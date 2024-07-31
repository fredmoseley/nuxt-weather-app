<script setup>
const { zipCode } = useRoute().params;
console.log('[zipCode].vue useRoute.params zipCode:', zipCode);
const { data } = await useFetch(`/api/openweathermap?zipCode=${zipCode}`);

const { list: forecasts, city } = data.value;
</script>
<template>
  <div class="my-16">
    <h1 class="text-7xl text-center mb-4">{{ city.name }}</h1>
    <h1 class="text-5xl text-center">3-Hourly Forecast for the Next 5 Days</h1>
  </div>
  <div class="overflow-x-auto sm:overflow-x-visible">
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-5 min-w-max">
      <div
        v-for="forecast in data.list"
        :key="forecast.dt"
      >
        <WeatherCard
          :forecast="forecast"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
