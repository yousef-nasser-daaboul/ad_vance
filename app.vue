<script setup lang="ts">
// If you want to use it in setup, import from the nuxtApp.
const { $pwa } = useNuxtApp();

const toast = useToast();

onMounted(() => {
  console.log("pwa ===>", $pwa);
  if (($pwa as { offlineReady: boolean })?.offlineReady)
    toast.add({ title: "App ready to work offline" });
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
