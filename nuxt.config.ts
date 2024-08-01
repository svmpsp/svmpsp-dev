// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
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
})
