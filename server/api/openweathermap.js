export default defineEventHandler(async (event) => {
  const { zipCode } = getQuery(event)
  const { weatherAPIKey } = useRuntimeConfig()

  const units = 'imperial'

  try {
    const gecodingAPIUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${weatherAPIKey}`
    const { lat, lon } = await $fetch(gecodingAPIUrl)

    const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${weatherAPIKey}`
    const data = await $fetch(weatherAPIUrl)

    return data
  } catch (error) {
    console.error(`Error retrieving the weather forecast: ${error}`)
  }
})
