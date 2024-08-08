// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  srcDir: "src/",
  pages: true,
  devtools: { enabled: true },
  router: {
    options: {
      sensitive: true,
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "nuxt-viewport",
    "@nuxtjs/i18n",
  ],
  nitro: {
    preset: "node-server",
  },
  viewport: {
    defaultBreakpoints: {},
    breakpoints: {
      mobile: 450,
      tablet: 900,
      laptop: 1000,
      desktop: Infinity,
    },
  },
  googleFonts: {
    families: {
      Merriweather: [400],
      Karla: [400],
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["en", "it"],
    defaultLocale: "en",
    strategy: "prefix_and_default",
  },
});
