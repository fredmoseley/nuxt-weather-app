<script setup>
defineProps(['error'])

const handleClearError= () => clearError({redirect:'/'})
</script>
<template>
  <div class="mt-7 mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold"> {{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7 text-3xl">{{ error.message }}</p>
    <button class="btn my-7" @click="handleClearError">Go Home</button>
  </div>
</template>

<style scoped></style>
