<template>
  <div>
    <v-date-picker v-model="store.date" />
    <p>{{ store.date.toISOString().slice(0, 10) }}</p>
  </div>
</template>

<script setup lang="ts">
import 'v-calendar/dist/style.css'
import { useSelectedDate } from '~/stores/SelectedDate'

const store = useSelectedDate()

// export default {
//   data() {
//     return {
//       date: new Date(),
//     };
//   },

//   methods: {
//     log: () => console.log(this.date)
//   }
// }
</script>
