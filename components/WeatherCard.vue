<script setup lang="ts">
const { forecast } = defineProps(['forecast'])
const {main: temperature, weather, dt_txt } = forecast
const [dayOfWeek, month, day, year, time] = new Date(dt_txt).toString().split(' ');
const [{id, main, description, icon}] = weather
</script>

<template>
  <div class="card text-center my-6">
    <p class="m-4">{{ dayOfWeek }} {{ month }} {{ day }} {{ year }}</p>
    <p class="m-4">{{ time }}</p>
    <img :src="`https://openweathermap.org/img/wn/${icon}@2x.png`" alt="weather icon" class="mx-auto">
    <p class="font-bold text-gray-500 m-4">{{ Math.round(temperature.temp) }}°</p>
    <p class="font-bold text-gray-500 m-4">{{ main }}</p>
    <p class=" text-gray-500 m-4">{{ description }}</p>
  </div>
</template>

<style scoped>
</style>
