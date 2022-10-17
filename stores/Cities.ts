import { defineStore } from 'pinia'

export const useCities = defineStore('cities', {
  state: () => ({
    cities: {
      Kyiv: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kyiv?unitGroup=metric&include=days&key=64AFP9F3X69ZMS4UA7WL29JV2&contentType=json',
      'New York': 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york?unitGroup=metric&include=days&key=64AFP9F3X69ZMS4UA7WL29JV2&contentType=json',
      Varshava: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Varshava?unitGroup=metric&include=days&key=64AFP9F3X69ZMS4UA7WL29JV2&contentType=json',
      Tokyo: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tokyo?unitGroup=metric&include=days&key=64AFP9F3X69ZMS4UA7WL29JV2&contentType=json',
      Paris: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Paris?unitGroup=metric&include=days&key=64AFP9F3X69ZMS4UA7WL29JV2&contentType=json'
    },
    selectedCity: ''
  }),
  actions: {
    changeCity (newCity: string) {
      this.selectedCity = newCity
    }
  }
})
