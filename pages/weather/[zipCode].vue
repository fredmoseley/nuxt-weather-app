<script setup>
const { zipCode } = useRoute().params;
console.log('[zipCode].vue useRoute.params zipCode:', zipCode)
const { data } = await useFetch(`/api/openweathermap?zipCode=${zipCode}`)

const {list: forecasts, city} = data.value

</script>
<template>
  <h1 class="text-7xl text-center mt-24 mb-8">{{ city.name }}</h1>
  <h1 class="text-5xl text-center mb-24 ">3-Hourly Forecast for the Next 5 Days</h1>
  <div>
    <div class="grid grid-cols-8 gap-5">
      <div
        v-for="forecast in data.list"
        :key="forecast.dt"
      >
        <WeatherCard :forecast="forecast" class="my-12" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
