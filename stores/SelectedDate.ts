import { defineStore } from 'pinia'

export const useSelectedDate = defineStore('selectedDate', {
  state: () => ({
    date: new Date()
  }),

  actions: {
    setDate (newDate) {
      this.date = newDate
    }
  }
})
