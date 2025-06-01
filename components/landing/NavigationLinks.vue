<script lang="ts" setup>
import type { NavigateLink } from "./Header.vue";

defineProps<{ navigationLinks: NavigateLink[] }>();

defineEmits<{ (e: "click", href?: string): void }>();
</script>

<template>
  <div class="flex flex-col md:flex-row items-center md:space-x-8">
    <NuxtLink
      v-for="(link, index) in navigationLinks"
      :key="index"
      :href="link.href"
      class="hover:text-primary w-full hover:font-semibold hover:dark:bg-secondary-light hover:bg-secondary-light2 md:py-1 py-2 rounded px-5 md:px-2 transition-colors duration-200 cursor-pointer"
      :class="{
        'text-primary font-semibold bg-secondary-light md:bg-transparent':
          link.isActive,
      }"
      @click.prevent="$emit('click', link.href)"
    >
      {{ link.name }}
    </NuxtLink>
    <div class="md:hidden w-full px-5 border-t border-primary pt-5">
      <UButton
        class="w-full"
        :ui="{
          base: 'ease-in-out transition-all duration-300  text-white ',
        }"
        size="xl"
      >
        Sign In
      </UButton>
    </div>
  </div>
</template>
