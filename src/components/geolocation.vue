<template>
	<div>
		<form @submit.prevent="getcordinates">
			<input type="text" v-model="address" placeholder="Maringá, PR" />
			<button @type="submit">pesquisar</button>
		</form>
		<div v-if="response">
			<p>{{ response }}</p>
			<ul>
				<li v-for="item in time" :key="item.id">{{ item.id }}{{ item }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import axios from "axios";
import { EventBus } from "./js/eventBus.js";
export default {
	data() {
		return {
			address: "",
			response: null,
			time: "",
			teste: "oi",
		};
	},
	methods: {
		async getcordinates() {
			try {
				const response = await axios.get(
					`https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=AIzaSyAtDRhVstWbo-YnbnO6h64LyxFr0GOridg`
				);
				const location = response.data.results[0].geometry.location;
				let lat = location.lat;
				let lng = location.lng;
				let responseForecast = await axios.get(
					`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,precipitation,weathercode&current_weather=truedaily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America%2FSao_Paulo`
				);
				this.response = responseForecast;
				this.time = responseForecast.data.hourly.time;
				console.log(responseForecast.data);
			} catch {
				console.log(error);
			}
		},
		sendData() {
			EventBus.$emit("sendforecast", (mensagem) => {
				this.teste = mensagem;
			});
		},
	},
};
</script>

<style></style>
