export default defineEventHandler(async (event) => {
  const { zipCode } = getQuery(event);
  const { weatherAPIKey } = useRuntimeConfig();

  console.log('openweathermap.js: API Server getQuery zipCode:', zipCode);
  try {
    const locationUri = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${weatherAPIKey}`;
    const { name, lat, lon, country } = await $fetch(locationUri);
    const weatherUri = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`;
    console.log({ name, country, lat, lon }, weatherUri);
    const data = await $fetch(weatherUri);
    return data;
  } catch (error) {
    console.error(`Error looking up weather: ${error}`);
  }
});
