<script setup lang="ts">
const { forecast } = defineProps(['forecast']);
const { main: temperature, weather, dt_txt } = forecast;
const date = new Date(dt_txt);
const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'long' });
const formattedTime = date.toLocaleTimeString('en-US', {
  timeStyle: 'short',
});
const [{ main, description, icon }] = weather;
</script>

<template>
  <div class="card text-center my-6">
    <p class="m-4">{{ formattedDate }}</p>
    <p class="m-4">{{ formattedTime }}</p>
    <img
      :src="`https://openweathermap.org/img/wn/${icon}@2x.png`"
      alt="weather icon"
      class="mx-auto"
    />
    <p class="font-bold text-gray-500 m-4">{{ Math.round(temperature.temp) }}°</p>
    <p class="font-bold text-gray-500 m-4">{{ main }}</p>
    <p class="text-gray-500 m-4">{{ description }}</p>
  </div>
</template>

<style scoped></style>
