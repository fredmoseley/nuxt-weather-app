// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Nuxt Weather App',
      meta: [{ name: 'description', content: 'Check the 5 day/3 hour weather forecast' }],
    },
  },
  runtimeConfig: {
    weatherAPIKey: process.env.WEATHER_API_KEY,
  },
})
