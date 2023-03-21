
<template>
  <div v-if="dayInfo">
    <p>{{ address }}</p>
    <p>{{ dayForecastData.temperatura }}</p>
    <p> {{ dayForecastData.weatherDescription }}</p>
    <img :src="dayForecastData.weatherIcon2" alt="Weather icon">
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
  name: 'dayForecast',
  props: {
    dayInfo: {
      type: Object,
      default: null
    },
    address: {
      type: String,
      default: ''
    }

  },


  // computed: {
  //   temperatura() { 
  //     return this.dayInfo ? this.dayInfo.temperature : ''
  //   },
  //   weathercode() {
  //     if (this.dayInfo && weatherIcons[this.dayInfo.weathercode]) {
  //       return (weatherIcons[this.dayInfo.weathercode][0])
  //     }
  //     else {
  //       return ('')
  //     }

  //   },
  //   weatherDescription() {
  //     if (this.dayInfo && weatherIcons[this.dayInfo.weathercode]) {
  //       return (weatherIcons[this.dayInfo.weathercode][1])
  //     }
  //     else {
  //       return ('')
  //     }
  //   },
  //   weatherIcon2() {
  //     if (this.dayInfo && weatherIcons[this.dayInfo.weathercode]) {
  //       const iconName = weatherIcons[this.dayInfo.weathercode][2];
  //       const iconPath = `/src/assets/icons/${iconName}.svg`;
  //       console.log(weatherIcons[this.dayInfo.weathercode])
  //       console.log(iconPath)
  //       return (iconPath);

  //     } else {
  //       return '';
  //     }
  //   }
  // }
  computed: {
    dayForecastData() {
      const dayInfo = this.dayInfo;
      const weatherData = weatherIcons[dayInfo?.weathercode] || [];
      return {
        temperatura: dayInfo?.temperature || '',
        weathercode: weatherData[0] || '',
        weatherDescription: weatherData[1] || '',
        weatherIcon2: dayInfo ? `/src/assets/icons/${weatherData[2]}.svg` : ''
      };
    }
  }
}

</script>

<style></style>