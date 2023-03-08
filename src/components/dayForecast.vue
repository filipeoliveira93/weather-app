<template>
  <div v-if="dayInfo">
    <p>{{ address }}</p>
    <p>{{ temperatura }}</p>
    <p> {{ weatherDescription }}</p>
    <img :src="weatherIcon2" alt="Weather icon">
    <!-- <img src="`../assets/icons/clear-day.svg`"> -->
  </div>
</template>

<script>

const weatherIcons = {
  0: ['☀️', 'Céu limpo', 'clear-day'],
  1: ['🌤️', 'Limpo com nuvens', 'partly-cloudy-day'],
  2: ['⛅️', 'Parcialmente nublado', 'partly-cloudy-day'],
  3: ['☁️', 'Nublado', 'cloudy', 'overcast'],
  45: ['🌫️', 'Névoa'],
  48: ['🌫️', 'Névoa'],
  51: ['🌧️', 'Chuvisco Fraco'],
  53: ['🌧️', 'Chuvisco Moderado'],
  55: ['🌧️', 'Chuvisco Intenso'],
  56: ['🌧️', 'Chuva congelante Fraca'],
  57: ['🌧️', 'Chuva congelante Intensa'],
  61: ['🌧️', 'Chuva Fraca'],
  63: ['🌧️', 'Chuva Moderada'],
  65: ['🌧️', 'Chuva Forte'],
  66: ['🌨️', 'Chuva Congelante Fraca'],
  67: ['🌨️', 'Chuva Congelante Forte'],
  71: ['❄️', 'Neve Fraca'],
  73: ['❄️', 'Neve Moderada'],
  75: ['❄️', 'Neve Forte'],
  77: ['❄️', 'Granizo'],
  80: ['🌧️', 'Chuva Fraca'],
  81: ['🌧️', 'Chuva Moderada'],
  82: ['🌧️', 'Chuva Forte'],
  85: ['❄️', 'Neve Fraca'],
  86: ['❄️', 'Neve Forte'],
  95: ['🌩️', 'Trovoadas'],
  96: ['🌩️', 'Trovoadas com granizo Fraco'],
  99: ['🌩️', 'Trovoadas com granizo Forte']
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


  computed: {
    temperatura() { 
      return this.dayInfo ? this.dayInfo.temperature : ''
    },
    weathercode() {
      if (this.dayInfo && weatherIcons[this.dayInfo.weathercode]) {
        return (weatherIcons[this.dayInfo.weathercode][0])
      }
      else {
        return ('')
      }

    },
    weatherDescription() {
      if (this.dayInfo && weatherIcons[this.dayInfo.weathercode]) {
        return (weatherIcons[this.dayInfo.weathercode][1])
      }
      else {
        return ('')
      }
    },
    weatherIcon2() {
      if (this.dayInfo && weatherIcons[this.dayInfo.weathercode]) {
        const iconName = weatherIcons[this.dayInfo.weathercode][2];
        const iconPath = `/src/assets/icons/${iconName}.svg`;
        console.log(weatherIcons[this.dayInfo.weathercode])
        console.log(iconPath)
        return (iconPath);

      } else {
        return '';
      }
    }
  }
}

</script>

<style></style>