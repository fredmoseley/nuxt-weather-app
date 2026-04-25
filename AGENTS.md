# Repository Guidelines

## Project Structure & Module Organization

This is a small Nuxt 3 app for US ZIP-code weather lookup. Route pages live in `pages/`, including the dynamic forecast route at `pages/weather/[zipCode].vue`. Reusable UI belongs in `components/` such as `WeatherCard.vue`. Shared layout and app shell files are in `layouts/`, `app.vue`, and `error.vue`. Server-side API logic lives in `server/api/openweathermap.js`. Global styles are loaded from `assets/css/main.css`, and static files belong in `public/`.

## Build, Test, and Development Commands

Install dependencies with `npm install`. Use `npm run dev` for local development at `http://localhost:3000`, or `npm run inspect` to start Nuxt with the inspector enabled. Build production output with `npm run build`, preview it with `npm run preview`, and run the built server with `npm run start`. Static generation is available through `npm run generate`. Formatting checks run through `npm run lint`, and `npm run lint:fix` rewrites files with Prettier.

## Coding Style & Naming Conventions

Prettier is the only enforced formatter here. Follow `.prettierrc`: 2-space indentation, single quotes, no semicolons, trailing commas where valid in ES5, and 120-character line width. Keep Vue single-file components in PascalCase (`WeatherCard.vue`), route files aligned to Nuxt routing conventions (`[zipCode].vue`), and composable-style helpers in camelCase. Prefer short `script setup` components and keep Tailwind utility ordering compatible with `prettier-plugin-tailwindcss`.

## Testing Guidelines

There is currently no automated test suite configured in `package.json`. Until one is added, validate changes by running `npm run lint` and manually testing the main flows: ZIP validation on `/`, forecast loading on `/weather/<zip>`, retry behavior, and error states. If you add tests, keep them close to the feature and document the command in `package.json`.

## Commit & Pull Request Guidelines

Recent history favors short, imperative commit messages such as `Fix nuxt layout wrapper` and `Add lint and lint:fix npm scripts`. Keep commits focused and descriptive. Pull requests should summarize user-visible changes, note any API or environment-variable impact, link related issues, and include screenshots for UI changes.

## Configuration Tips

Copy `.env.example` to `.env` and set `WEATHER_API_KEY` before running the app. Do not commit secrets or production API keys.
