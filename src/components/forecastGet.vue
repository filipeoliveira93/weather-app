<template>
  <div>
    <form @submit.prevent="getcordinates">
      <input type="text" v-model="address" placeholder="Maringá, PR" />
      <button @type="submit">pesquisar</button>
    </form>
    <dayForecast :response="response" :dayInfo="dayInfo" :address="address" />
    <div v-for="index in dailyInfo.time.length" :key="index">
      <p>{{ dailyInfo.time[index - 1] }}</p>
      <p>{{ dailyInfo.tempmax[index - 1] }}</p>
      <p>{{ dailyInfo.tempmin[index - 1] }}</p>
      <p>{{ dailyInfo.weathercodes[index - 1] }}</p>
      <p>{{ dailyInfo.precipitationprobability[index - 1] }}</p>
    </div>

  </div>
</template>

<script lang="js">
import axios from 'axios'
import dayForecast from './dayForecast.vue'

export default {
  data() {
    return {
      address: '',
      lat: '',
      lng: '',
      response: null,
      time: '',
      dayInfo: null,
      dailyInfo: {
        time: [],
        tempmax: [],
        tempmin: [],
        weathercodes: [],
        precipitationprobability: []

      }
    }
  },
  components: {
    dayForecast
  },
  methods: {
    async getcordinates() {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=AIzaSyAtDRhVstWbo-YnbnO6h64LyxFr0GOridg`
      )
      const location = response.data.results[0].geometry.location
      this.lat = location.lat
      this.lng = location.lng
      const responseForecast = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${this.lat}&longitude=${this.lng}&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&current_weather=true&timezone=America%2FSao_Paulo`
      )

      this.response = responseForecast
      this.dayInfo = responseForecast.data.current_weather

      this.dailyInfo.time = responseForecast.data.daily.time
      this.dailyInfo.tempmin = responseForecast.data.daily.temperature_2m_min
      this.dailyInfo.tempmax = responseForecast.data.daily.temperature_2m_max
      this.dailyInfo.weathercodes = responseForecast.data.daily.weathercode
      this.dailyInfo.precipitationprobability = responseForecast.data.daily.precipitation_probability_max




      console.log(this.response)
      console.log(this.dailyInfo)

    }
  }
}
</script>

<style></style>