export default defineEventHandler(async (event) => {
  const { zipCode } = getQuery(event)
  const { weatherAPIKey } = useRuntimeConfig()

  const units = 'imperial'

  try {
    const gecodingAPIUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${weatherAPIKey}`
    const { lat, lon } = await $fetch(gecodingAPIUrl)

    const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${weatherAPIKey}`
    return await $fetch(weatherAPIUrl)
  } catch (error) {
    const statusCode = error?.response?.status || error?.statusCode

    if (statusCode === 404) {
      throw createError({
        statusCode: 404,
        statusMessage: `Zip code ${zipCode} not found`,
      })
    }

    console.error(`Error retrieving the weather forecast: ${error}`)
    throw createError({
      statusCode: 502,
      statusMessage: 'Unable to retrieve weather data at the moment.',
    })
  }
})
