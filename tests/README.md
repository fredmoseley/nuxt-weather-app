# Test Roadmap

## Current Scaffold

- `vitest.config.ts`: shared Vitest configuration for the current unit-test layer
- `tests/setup.ts`: shared test cleanup hooks
- `tests/unit/zipCode.test.ts`: ZIP-code helper coverage
- `tests/unit/forecast.test.ts`: forecast grouping and time-formatting coverage
- `utils/zipCode.ts`: extracted ZIP validation and normalization logic
- `utils/forecast.ts`: extracted forecast grouping and time-formatting logic

## Next Files To Add

- `tests/server/openweathermap.test.ts`: server route success, 404, and upstream-failure coverage
- `tests/pages/index.test.ts`: form validation and navigation coverage
- `tests/pages/weather-[zipCode].test.ts`: loading, error, empty, and success-state coverage
- `tests/components/WeatherCard.test.ts`: rendering coverage for temperature, time, and icon output

## App Files Likely To Change Next

- `server/api/openweathermap.js`: add explicit server-side ZIP and API-key validation
- `pages/index.vue`: test-driven cleanup around submit and navigation behavior
- `pages/weather/[zipCode].vue`: test-driven rendering and retry-state coverage
- `components/WeatherCard.vue`: prop typing and display assertions
