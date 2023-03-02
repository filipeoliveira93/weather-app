<template>
  <div>
    <form @submit.prevent="getcordinates">
      <input type="text" v-model="address" placeholder="Maringá, PR" />
      <button @type="submit">pesquisar</button>
    </form>
    <div v-if="response">
      <ul>
        <li v-for="item in time" :key="item.id">{{ key }}{{ item }}</li>
      </ul>
    </div>
  </div>
  <dayForecast :response="response" />
</template>

<script>
import axios from 'axios'
import dayForecast from './dayForecast.vue'

export default {
  data() {
    return {
      address: '',
      lat: '',
      lng: '',
      response: null,
      time: ''
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
        `https://api.open-meteo.com/v1/forecast?latitude=${this.lat}&longitude=${this.lng}&hourly=temperature_2m,precipitation,weathercode&timezone=America%2FSao_Paulo`
      )

      this.response = responseForecast
      this.time = responseForecast.data.hourly.time
      // console.log(this.response.data.results[0].geometry.location)
      // console.log('teste')

      // console.log(this.response)
      console.log(this.time)

      // console.log(JSON.stringify(this.response, null, 2))
    }
  }
}
</script>

<style></style>