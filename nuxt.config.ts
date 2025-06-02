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
  app: {
    head: {
      link: [{ rel: "icon", href: "/logo/logo.png" }],
    },
  },
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
      screenshots: [
        {
          src: "screenshots/desktop_screenshot_1.png",
          sizes: "1387x720",
          type: "image/png",
          form_factor: "wide",
          label: "Desktop App View",
        },
        {
          src: "screenshots/mobile_screenshot_1.png",
          sizes: "697x1280",
          type: "image/png",
          label: "Mobile App View",
        },
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
