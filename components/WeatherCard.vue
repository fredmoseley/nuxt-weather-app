<script setup lang="ts">
const { forecast } = defineProps(['forecast'])
const { main: temperature, weather, dt_txt } = forecast
const date = new Date(dt_txt)
const formattedTime = date.toLocaleTimeString('en-US', {
  timeStyle: 'short',
})
const [{ main, description, icon }] = weather
</script>

<template>
  <div class="card h-full min-h-0 text-center">
    <p class="text-sm font-semibold uppercase tracking-wide text-slate-500">{{ formattedTime }}</p>
    <img
      :src="`https://openweathermap.org/img/wn/${icon}@2x.png`"
      alt="weather icon"
      class="mx-auto h-20 w-20"
    />
    <p class="text-3xl font-bold text-slate-900">{{ Math.round(temperature.temp) }}°</p>
    <p class="mt-2 font-semibold text-slate-700">{{ main }}</p>
    <p class="mt-1 text-sm text-slate-500">{{ description }}</p>
  </div>
</template>

<style scoped></style>
