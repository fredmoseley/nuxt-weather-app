export default defineEventHandler(async (event) => {
  const { zipCode } = getQuery(event);
  const { weatherAPIKey } = useRuntimeConfig();

  const units = 'imperial';
  const locationUri = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${weatherAPIKey}`;

  try {
    // Use geocode API to get the lat,lon from zip
    const { name, lat, lon, country } = await $fetch(locationUri);

    // Use openweathermap api to get the forecast
    const weatherUri = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${weatherAPIKey}`;
    const data = await $fetch(weatherUri);

    return data;
  } catch (error) {
    console.error(`Error retrieving the weather forecast: ${error}`);
  }
});
