<template>
  <div>
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
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
    </ul>
  </div>
</template>

<script setup>
import { useCities } from '~/stores/Cities'

const store = useCities()
</script>
