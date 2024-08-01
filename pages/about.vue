<script setup lang="ts">
useHead({
    title: 'Nuxt Weather App | About',
    meta: [
        {name: 'description', content: 'Learn how to use the Nuxt Weather App'}
    ]
})
</script>
<template>
  <div class="text-black card">
    <h1 class="text-2xl mb-1">About:</h1>
    <p class="mb-4">The Nuxt Weather App allows you to look up the 3-Hour forecast for the next 5 days for any city in the United States.</p>
    <h2 class="text-2xl">How it works:</h2>
    <ol class="list-decimal list-inside mb-4">
      <li>Enter the 5 digit zip code for the city.</li>
      <li>Press the Submit button</li>
    </ol>
    <p>Use the navigation bar to return to the Home screen and look up another city.</p>
    <br />
    <p class="font-bold">Alternatively, you could retrieve the weather forecast by appending  '/weather/[zip]' to the end of the base URL.   For example '/weather/90210'</p>
  </div>
</template>

<style scoped></style>
