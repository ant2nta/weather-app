// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  src: '~plugins/v-calendar.js',
  ssr: false,
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  router: {
    base: '/weather-app'
  }
})
