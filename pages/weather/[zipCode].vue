<script setup>
useHead({
  title: 'Nuxt Weather App | Forecast',
  meta: [{ name: 'description', content: 'The 5 day / 3 hour Forecast' }],
})
const { zipCode } = useRoute().params
const { data } = await useFetch(`/api/openweathermap?zipCode=${zipCode}`)
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: `Zip code ${zipCode} not found`, fatal: true })
}
</script>
<template>
  <div v-if="data">
    <div class="my-16">
      <h1 class="text-7xl text-center mb-4">{{ data.city.name }}</h1>
      <h1 class="text-5xl text-center">5 day / 3 hour Forecast</h1>
    </div>
    <div class="overflow-x-auto sm:overflow-x-visible">
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-5 min-w-max">
        <div
          v-for="forecast in data.list"
          :key="forecast.dt"
        >
          <WeatherCard :forecast="forecast" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
