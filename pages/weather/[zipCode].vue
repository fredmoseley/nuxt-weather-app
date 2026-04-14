<script setup>
useHead({
  title: 'Nuxt Weather App | Forecast',
  meta: [{ name: 'description', content: 'The 5 day / 3 hour Forecast' }],
})

const { zipCode } = useRoute().params
const { data, pending, error, refresh } = await useFetch(`/api/openweathermap?zipCode=${zipCode}`)

const attemptedRetry = ref(false)
const hasForecastData = computed(() => Array.isArray(data.value?.list) && data.value.list.length > 0)

watchEffect(() => {
  if (error.value?.statusCode === 404) {
    throw createError({
      statusCode: 404,
      statusMessage: `Zip code ${zipCode} not found`,
      fatal: true,
    })
  }

  if (attemptedRetry.value && error.value) {
    showError(createError({
      statusCode: 502,
      statusMessage: 'We still could not load the forecast. Please try again later.',
      fatal: true,
    }))
  }
})

const retryFetch = async () => {
  attemptedRetry.value = true
  await refresh()

  if (!error.value) {
    attemptedRetry.value = false
  }
}
</script>
<template>
  <div class="my-16">
    <div
      v-if="pending"
      class="max-w-xl mx-auto p-6 border border-slate-200 rounded-lg bg-slate-50 animate-pulse text-center"
    >
      <div class="w-12 h-12 rounded-full border-4 border-slate-300 border-t-slate-500 mx-auto mb-4 animate-spin" />
      <p class="text-slate-700">Loading forecast...</p>
    </div>

    <div
      v-else-if="error"
      class="max-w-xl mx-auto p-6 border border-amber-300 rounded-lg bg-amber-50 text-center"
    >
      <h2 class="text-2xl font-semibold text-amber-900 mb-2">
        We could not load the latest forecast
      </h2>
      <p class="text-amber-800 mb-4">
        This is usually temporary. Please try again.
      </p>
      <button
        class="px-4 py-2 rounded bg-amber-700 text-white hover:bg-amber-800"
        @click="retryFetch"
      >
        Retry
      </button>
    </div>

    <div
      v-else-if="!hasForecastData"
      class="max-w-xl mx-auto p-6 border border-slate-200 rounded-lg bg-slate-50 text-center"
    >
      <h2 class="text-2xl font-semibold mb-2">No forecast data available yet</h2>
      <p class="text-slate-600">Please check back soon for upcoming weather updates.</p>
    </div>

    <div v-else>
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
  </div>
</template>

<style scoped></style>
