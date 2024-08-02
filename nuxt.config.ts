// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    'nuxt-viewport',
  ],
  nitro: {
    preset: 'node-server'
  },
  viewport: {
    breakpoints: {
      mobile: 450,
      tablet: 900,
      laptop: 1000,
      desktop: Infinity,
    }
  },
  googleFonts: {
    families: {
      'Noto+Sans': [400],
      'Lobster': [400],
    }
  },
})