<template>
  <div>
    <TheCitiesTabs :city="selectedCity" @change="changeCity" />

    <div v-if="cities.selectedCity" class="flex">
      <div v-if="currentWeather" class="weather flex">
        <img :src="`/images/${currentWeather.icon}.webp`" alt="weather" class="w-16 h-16">

        <div class="flex flex-col gap-2 ml-10">
          <p>{{ `Temperature: ${currentWeather.tempmin}°С - ${currentWeather.tempmax}°С` }}</p>
          <p>{{ `Wind: ${currentWeather.windspeed}m` }}</p>
          <p>{{ `Humidity: ${currentWeather.humidity}%` }}</p>
          {{ currentWeather.description }}
        </div>
      </div>

      <div v-else class="weather flex">
        <p class="text-2xl">
          No weather forecast for this date
        </p>
      </div>

      <v-date-picker v-model="selectedDate" />
    </div>

    <div v-else class="weather">
      <p class="text-2xl">
        Select city
      </p>
    </div>
  </div>
</template>

<script>
import { useCities } from '~/stores/Cities'
import { useSelectedDate } from '~/stores/SelectedDate'
import 'v-calendar/dist/style.css'

export default {
  data () {
    return {
      cities: useCities(),
      selectedDate: useSelectedDate().date,
      selectedCity: Object.values(useCities().cities)[0],
      currentWeather: null
    }
  },

  watch: {
    selectedDate () {
      this.currentWeather = JSON.parse(localStorage.getItem('weather')).find(el => el.datetime === this.selectedDate.toISOString().slice(0, 10))
    },

    selectedCity () {
      this.getData().then((data) => {
        localStorage.setItem('weather', JSON.stringify(data.days))
        this.currentWeather = JSON.parse(localStorage.getItem('weather')).find(el => el.datetime === this.selectedDate.toISOString().slice(0, 10))
      })
    }
  },

  methods: {
    async getData () {
      return await fetch(useCities().cities[this.selectedCity]).then(response => response.json())
    },

    changeCity (newCity) {
      this.selectedCity = newCity
      this.getData()
    }
  }
}
</script>

<style>
  .weather {
    padding: 40px 100px;
    width: 780px;
  }
</style>
