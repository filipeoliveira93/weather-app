import { defineStore } from 'pinia'
import axios from 'axios'
export const useGeoStore = defineStore('main', {
    state: () => ({
        address: '',
        lat: '',
        lng: '',
        response: null,
        time: null,
        error: null


    }),
    actions: {
        async getCordinates() {
            try {
                const response = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=YOUR_API_KEY`
                )
                const location = response.data.results[0].geometry.location
                this.lat = location.lat
                this.lng = location.lng
                const responseForecast = await axios.get(
                    `https://api.open-meteo.com/v1/forecast?latitude=${this.lat}&longitude=${this.lng}&hourly=temperature_2m,precipitation,weathercode&timezone=America%2FSao_Paulo`
                )
                if (responseForecast.status === 200 && responseForecast.data && responseForecast.data.hourly && responseForecast.data.hourly.time) {
                    this.response = responseForecast
                    this.time = responseForecast.data.hourly.time
                    this.error = null
                } else {
                    this.response = null
                    this.time = null
                    this.error = 'A resposta da API não contém os dados esperados.'
                }
            } catch (error) {
                this.error = error.message
                console.error(error)
            }
        }
    }
})
