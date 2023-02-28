<script>
import { useGeoStore } from '/src/stores/store.js'
import { mapActions } from 'pinia'

export default {
  setup() {
    const geoStore = useGeoStore()
    const { getcordinates } = mapActions(['getcordinates'], geoStore)

    return {
      address: geoStore.address,
      response: geoStore.response,
      time: geoStore.time,
      getCordinates: getcordinates,
      error: geoStore.error
    }
  }
}
</script>
<template>
  <div>
    <form @submit.prevent="getcordinates">
      <input type="text" v-model="address" placeholder="Maringá, PR" />
      <button @type="submit">pesquisar</button>
    </form>
    <p>{{ address }}</p>
    <div v-if="error">
      <p>Erro: {{ error }}</p>
    </div>
    <div v-if="response">
      <ul>
        <li v-for="(item, key) in time" :key="key">{{ key }}{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style></style>
