<script setup>
// 1. Server will make the call api/openweathermap/${routeURL}
const { zipCode } = useRoute().params;
console.log('[zipCode].vue useRoute.params zipCode:', zipCode)
// const { data } = await useFetch(`/api/openweathermap/${zipCode}`)
const { data } = await useFetch(`/api/openweathermap?zipCode=${zipCode}`)

</script>
<template>
  <h1 class="">Weather Route</h1>
  <p>{{ data }}</p>
</template>

<style scoped></style>
