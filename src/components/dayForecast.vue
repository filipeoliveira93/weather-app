<template>

    <div v-if="teste != ''">
        <p>{{teste}}</p>
    
    </div>

</template>

<script>
import Vue from 'vue';
import { EventBus } from "./js/eventBus.js";
export default {
	data() {
		return {
			teste: "",
		};
	},
	mounted() {
		EventBus.$on("sendforecast", data => {
			this.teste = data;
		});
	},
};
</script>

<style></style>
