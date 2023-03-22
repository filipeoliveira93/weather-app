<template>
    <div >   
        <img :src="showWeatherIcon" alt="Weather icon">
    </div>
</template>

<script>



const weatherIcons = {
    0: ['☀️', 'Céu limpo', 'clear-day'],
    1: ['🌤️', 'Limpo com nuvens', 'partly-cloudy-day'],
    2: ['⛅️', 'Parcialmente nublado', 'partly-cloudy-day'],
    3: ['☁️', 'Nublado', 'cloudy', 'overcast'],
    45: ['🌫️', 'Névoa', 'mist'],
    48: ['🌫️', 'Névoa', 'mist'],
    51: ['🌧️', 'Chuvisco Fraco', 'partly-cloudy-rain'],
    53: ['🌧️', 'Chuvisco Moderado', 'partly-cloudy-rain'],
    55: ['🌧️', 'Chuvisco Intenso', 'partly-cloudy-rain'],
    56: ['🌧️', 'Chuva congelante Fraca', 'partly-cloudy-rain'],
    57: ['🌧️', 'Chuva congelante Intensa', 'rain'],
    61: ['🌧️', 'Chuva Fraca', 'rain'],
    63: ['🌧️', 'Chuva Moderada', 'rain'],
    65: ['🌧️', 'Chuva Forte', 'rain'],
    66: ['🌨️', 'Chuva Congelante Fraca', 'sleet'],
    67: ['🌨️', 'Chuva Congelante Forte', 'sleet'],
    71: ['❄️', 'Neve Fraca', 'snow'],
    73: ['❄️', 'Neve Moderada', 'snow'],
    75: ['❄️', 'Neve Forte', 'snow'],
    77: ['❄️', 'Granizo', 'hail'],
    80: ['🌧️', 'Chuva Fraca', 'rain'],
    81: ['🌧️', 'Chuva Moderada', 'rain'],
    82: ['🌧️', 'Chuva Forte', 'thunderstorms-day-rain'],
    85: ['❄️', 'Neve Fraca', 'snow'],
    86: ['❄️', 'Neve Forte', 'snow'],
    95: ['🌩️', 'Trovoadas', 'thunderstorms-rain'],
    96: ['🌩️', 'Trovoadas com granizo Fraco', 'thunderstorms-rain'],
    99: ['🌩️', 'Trovoadas com granizo Forte', 'thunderstorms-rain']
};
export default {
    name: 'iconsComponents',
    props: {
        weathercode: {
            type: Number,
            default: null
        }
    },
    computed: {

        showWeatherIcon() {
            const weathercode = this.weathercode;
            const weatherData = weatherIcons[weathercode] || [];
            console.log(weatherData)
            return weatherData[2] ? `/src/assets/icons/${weatherData[2]}.svg` : '';
        }
    }
}


</script>

<style></style>