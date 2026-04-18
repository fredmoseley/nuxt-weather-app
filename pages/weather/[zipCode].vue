<script setup>
import { groupForecastByDay } from '~/utils/forecast'

useHead({
  title: 'Nuxt Weather App | Forecast',
  meta: [{ name: 'description', content: 'The 5 day / 3 hour Forecast' }],
})

const { zipCode } = useRoute().params
const { data, status, error, refresh } = await useFetch(`/api/openweathermap?zipCode=${zipCode}`)
const cityTimezoneOffset = computed(() => data.value?.city?.timezone ?? 0)

const hasForecastData = computed(() => Array.isArray(data.value?.list) && data.value.list.length > 0)
const isPending = computed(() => status.value === 'pending')
const groupedForecast = computed(() => {
  const forecasts = Array.isArray(data.value?.list) ? data.value.list : []
  return groupForecastByDay(forecasts, cityTimezoneOffset.value)
})
const weatherLoadingIcon = 'https://unpkg.com/@lxg/weather-icons@3.0.1/production/line/svg/partly-cloudy-day.svg'

watchEffect(() => {
  if (error.value?.statusCode === 404) {
    throw createError({
      statusCode: 404,
      statusMessage: `Zip code ${zipCode} not found`,
      fatal: true,
    })
  }
})

const retryFetch = async () => {
  await refresh()

  if (error.value) {
    if (error.value.statusCode === 404) {
      showError(
        createError({
          statusCode: 404,
          statusMessage: `Zip code ${zipCode} not found`,
          fatal: true,
        })
      )
      return
    }

    showError(
      createError({
        statusCode: 502,
        statusMessage: 'We still could not load the forecast. Please try again later.',
        fatal: true,
      })
    )
  }
}
</script>
<template>
  <div class="my-16">
    <div
      v-if="isPending"
      class="max-w-xl mx-auto p-6 border border-slate-200 rounded-lg bg-slate-50 animate-pulse text-center"
    >
      <img
        :src="weatherLoadingIcon"
        alt="Loading forecast"
        class="w-24 h-24 mx-auto mb-4"
      />
      <p class="text-slate-700">Loading forecast...</p>
    </div>

    <div
      v-else-if="error"
      class="max-w-xl mx-auto p-6 border border-amber-300 rounded-lg bg-amber-50 text-center"
    >
      <h2 class="text-2xl font-semibold text-amber-900 mb-2">We could not load the latest forecast</h2>
      <p class="text-amber-800 mb-4">This is usually temporary. Please try again.</p>
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
      <div class="my-16 space-y-3 text-center">
        <h1 class="text-5xl font-semibold text-slate-900 sm:text-7xl">{{ data.city.name }}</h1>
        <h2 class="text-3xl font-medium text-slate-700 sm:text-5xl">5 day / 3 hour Forecast</h2>
      </div>

      <div class="space-y-10">
        <section
          v-for="dayForecast in groupedForecast"
          :key="dayForecast.dayLabel"
          class="space-y-4"
        >
          <div class="flex flex-col gap-2 border-b border-slate-200 pb-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 class="text-2xl font-semibold text-slate-900">{{ dayForecast.dayLabel }}</h3>
            <p class="text-sm font-medium text-slate-600">
              H: <span class="text-slate-900">{{ dayForecast.high }}°</span>
              <span class="mx-2 text-slate-300">|</span>
              L: <span class="text-slate-900">{{ dayForecast.low }}°</span>
            </p>
          </div>

          <div class="overflow-x-auto">
            <div
              class="grid auto-cols-[minmax(10rem,1fr)] grid-flow-col gap-4 pb-2 md:grid-flow-row md:grid-cols-4 lg:grid-cols-6"
            >
              <div
                v-for="forecast in dayForecast.entries"
                :key="forecast.dt"
              >
                <WeatherCard
                  :forecast="forecast"
                  :timezone-offset="cityTimezoneOffset"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
