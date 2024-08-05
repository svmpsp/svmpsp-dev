// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  srcDir: "src/",
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@pinia/nuxt", "nuxt-viewport"],
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
});
