<script setup lang="ts">
// If you want to use it in setup, import from the nuxtApp.
const { $pwa } = useNuxtApp();

const toast = useToast();

onMounted(async () => {
  console.log("pwa ===>", $pwa);
  if (($pwa as { offlineReady: boolean })?.offlineReady)
    toast.add({ title: "App ready to work offline" });
  if (!$pwa?.isPWAInstalled) {
    const soso = await $pwa?.install();
    console.log(soso);
  }
});
</script>

<template>
  <div>
    <NuxtPwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
