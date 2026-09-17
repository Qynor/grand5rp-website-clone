import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/global.css'],
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@pinia/nuxt'],
  devtools: { enabled: false },
  compatibilityDate: '2024-04-03',
  vite: {
    plugins: [
      svgLoader()
    ]
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ua', name: 'Ukrainia', file: 'ua.json' },
    ]
  },
  app: {
    head: {
      title: "GTA 5 RP Grand - The Best GTA V Roleplay Server",
      link: [
        {
          rel: "icon",
          type: "image/webp",
          sizes: "57x57",
          href: "/apple-icon-57x57.webp"
        }
      ]
    }
  }
})