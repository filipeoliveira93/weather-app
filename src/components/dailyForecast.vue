<template>
    <div v-if="response">
        <!-- <p>{{ response }}</p> -->
        <!-- <p>{{ dailyInfo }}</p> -->
        <div v-for="index in dailyInfo.time.length" :key="index">
            <p>{{ dailyInfo.time[index - 1] }}</p>
            <p>{{ dailyInfo.tempmax[index - 1] }}</p>
            <p>{{ dailyInfo.tempmin[index - 1] }}</p>
            <p>{{ dailyInfo.weathercodes[index - 1] }}</p>
            <p>{{ dailyInfo.precipitationprobability[index - 1] }}</p>
            <iconsComponent :weathercode="dailyInfo.weathercodes[index - 1]" />
        </div>



    </div>
</template>

<script >
import iconsComponent from './iconsComponent.vue';


export default {
    components: {
        iconsComponent
    },

    name: 'dailyForecast',
    props: {
        response: {
            type: Object,
            default: null
        }
    },
    computed: {
        dailyInfo() {
            return {
                time: this.response?.daily?.time || [],
                tempmax: this.response?.daily?.temperature_2m_min || [],
                tempmin: this.response?.daily?.temperature_2m_max || [],
                weathercodes: this.response?.daily?.weathercode || [],
                precipitationprobability: this.response?.daily?.precipitation_probability_max || []
            }
        }
    }
}
</script>

<style></style>