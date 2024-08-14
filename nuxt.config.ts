// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    postgres: {
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      db: process.env.POSTGRES_DB,
      pwd: process.env.POSTGRES_PWD,
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Title - svmpsp.dev",
      meta: [
        {
          name: "description",
          content: "Sivam Pasupathipillai's personal website.",
        },
      ],
      script: [
        {
          async: true,
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7590734585602123",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
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
    "@nuxt/image",
    "@nuxt/icon",
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
  image: {},
});
