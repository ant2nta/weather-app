import VCalendar from 'v-calendar';

// Setup plugin for defaults or `$screens` (optional)
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VCalendar, {})
})
