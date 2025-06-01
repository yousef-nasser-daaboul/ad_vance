// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "light",
  },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@vite-pwa/nuxt",
  ],
  pwa: {
    manifest: {
      name: "Ad-Vance",
      short_name: "advance",
      description: "Advance App for advertisement management",
      icons: [
        { src: "logo/logo_64x64.png", sizes: "64x64", type: "image/png" },
        { src: "logo/logo_144x144.png", sizes: "144x144", type: "image/png" },
        { src: "logo/logo_192x192.png", sizes: "192x192", type: "image/png" },
        { src: "logo/logo_512x512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
