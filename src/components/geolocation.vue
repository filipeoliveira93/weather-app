<template>
    <div>
        <form @submit.prevent="getcordinates">
            <input type="text" v-model="address" placeholder="Maringá, PR">
            <button @type="submit">pesquisar</button>
        </form>
        <div v-if="response !={}">
            <p>{{ response }}</p>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            address: '',
            lat: '',
            lng: '',
            response: {}
        }
    },
    methods: {
        async getcordinates() {
            const response = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=AIzaSyAtDRhVstWbo-YnbnO6h64LyxFr0GOridg`
            )
            const location = response.data.results[0].geometry.location
            this.lat = location.lat;
            this.lng = location.lng
            const responseForecast = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${this.lat}&longitude=${this.lng}&hourly=temperature_2m,relativehumidity_2m,precipitation,rain,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours&timezone=America%2FSao_Paulo`
            )
            this.response = responseForecast
            console.log(responseForecast)
            console.log(JSON.stringify(this.response, null, 2))
            
        }
    }

}

</script>

<style>

</style>