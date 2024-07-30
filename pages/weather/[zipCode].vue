<script setup>
// 1. Server will make the call api/openweathermap/${routeURL}
const { zipCode } = useRoute().params;
console.log('useRoute.params zipCode:', zipCode)
const { data } = await useFetch(`/api/openweathermap/${zipCode}`)

</script>
<template>
  <h1 class="">Weather Route</h1>
  <p>{{ data }}</p>
</template>

<style scoped></style>
