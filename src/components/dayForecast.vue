<template>
  <div>
    <p>teste</p>
    <p>sou o componente filho</p>
    <p>{{ response }}</p>
  </div>
</template>

<script>
export default {
  name: 'dayForecast',
  props: {
    response: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>