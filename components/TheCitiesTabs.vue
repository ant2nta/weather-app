<template>
  <div>
    <select
      id="countries"
      v-model="store.selectedCity"
      @change="select = $event.target.value"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option
        v-for="city in Object.keys(store.cities)"
        :key="city"
        :value="city"
      >
        {{ city }}
      </option>
    </select>
    <!-- <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <select></select>
      <li v-for="city in Object.keys(store.cities)" :key="city" class="mr-2">
        <p
          :class="{
            'text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500' : city === store.selectedCity,
            'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300': city !== store.selectedCity
          }"
          class="inline-block p-4 rounded-t-lg cursor-pointer"
          @click="() => {
            store.changeCity(city)
            $emit('change', city)
          }"
        >
          {{ city }}
        </p>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { useCities } from '~/stores/Cities'

export default {
  data () {
    return {
      store: useCities(),
      select: ''
    }
  },

  watch: {
    select () {
      this.store.changeCity(this.select)
      this.$emit('change', this.select)
    }
  }
}
</script>
