<template>
  <header class="fixed w-full bg-white/95 dark:bg-dark-light/95 shadow-md z-50">
    <nav class="container mx-auto px-4 py-1">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img src="/logo/full_logo.svg" alt="Logo" class="h-12 w-auto" />
            <span class="text-xl font-bold">AdVance</span>
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <NavigationLinksComponent
          class="hidden md:block"
          :navigation-links="navigationLinks"
          @click="navigationClicked"
        />

        <!-- Sign Up Button -->
        <div
          class="flex items-center gap-5 md:gap-0 xl:gap-10 md:mx-5 md:space-x-4"
        >
          <ClientOnly v-if="!colorMode?.forced">
            <UButton
              :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
              color="neutral"
              variant="ghost"
              size="xl"
              @click="isDark = !isDark"
            />

            <template #fallback>
              <div class="size-8 opacity" />
            </template>
          </ClientOnly>

          <div class="block md:hidden">
            <UDrawer direction="top">
              <UButton
                icon="i-material-symbols:menu-rounded"
                size="xl"
                color="primary"
                variant="soft"
                :ui="{ base: 'text-2xl' }"
              />

              <template #body>
                <NavigationLinksComponent
                  class="block md:hidden py-5 gap-5"
                  :navigation-links="navigationLinks"
                  @click="navigationClicked"
                />
              </template>
            </UDrawer>
          </div>

          <UButton
            class="hidden md:block"
            :ui="{
              base: 'ease-in-out transition-all duration-300  text-white ',
            }"
            size="xl"
          >
            Sign In
          </UButton>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import NavigationLinksComponent from "./NavigationLinks.vue";

const route = useRoute();
const router = useRouter();

export interface NavigateLink {
  name: string;
  path?: string;
  href?: string;
  isActive?: boolean;
}
const navigationLinks = ref<NavigateLink[]>([
  { name: "Home", path: "/" },
  { name: "Features", href: "#features" },
  { name: "Services", href: "#services" },
  { name: "For Developers", href: "#developers" },
  { name: "Docs", path: "/docs" }, // Kept as /docs, assuming it's a separate page/section
  // { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]);

function navigationClicked(href?: string) {
  scrollToSection(href);
}

const sectionIds = navigationLinks.value
  .filter((link: NavigateLink) => !!link.href)
  .map((link: NavigateLink) => link.href?.substring(1));

const sections = ref<(HTMLElement | null)[]>([]);

const checkVisibleSection = () => {
  // Only run on the home page
  if (route.path !== "/") return;

  // Find the first visible section
  for (const section of sections.value) {
    if (!section) continue;

    const rect = section.getBoundingClientRect();
    // Check if the section is visible in the viewport
    // We consider a section visible if its top is within the viewport or if it starts above the viewport but takes up most of the screen
    if (
      (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) ||
      (rect.top < 0 && rect.bottom > window.innerHeight * 0.5)
    ) {
      // Update URL hash if it's different from current hash
      if (route.hash !== `#${section.id}`) {
        scrollToSection(`#${section.id}`);
      }
      return;
    }
  }
  // If no section is visible (e.g., at the very top), clear the hash
  if (route.hash && window.scrollY < 700) {
    addIsActiveClass();
    router.push({ hash: "" });
  }
};

function scrollToSection(hash?: string) {
  removeScrollListener();
  if (hash) {
    router.push({ hash });
  } else {
    // If no section is visible (e.g., at the very top), clear the hash
    if (route.hash) {
      router.push({ hash: "" });
    }
  }
  addIsActiveClass(hash);
  window.addEventListener("scrollend", addScrollListener, { once: true });
}

function addIsActiveClass(hash?: string) {
  if (hash) {
    navigationLinks.value.forEach((link: NavigateLink) => {
      if (link.href === hash) {
        link.isActive = true;
      } else {
        link.isActive = false;
      }
    });
  } else {
    navigationLinks.value.forEach((link: NavigateLink) => {
      if (link.path === "/") {
        link.isActive = true;
      } else {
        link.isActive = false;
      }
    });
  }
}

onMounted(async () => {
  await nextTick();
  sections.value = sectionIds.map((id?: string) =>
    document?.getElementById(id ?? "")
  );
  window.addEventListener("scrollend", addScrollListener, { once: true });
  addIsActiveClass(route.hash);
});

onUnmounted(() => {
  removeScrollListener();
});

function addScrollListener() {
  window.addEventListener("scroll", checkVisibleSection, { passive: true });
}

function removeScrollListener() {
  window.removeEventListener("scroll", checkVisibleSection);
}

// Color Mode
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark: boolean) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>
