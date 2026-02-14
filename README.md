# Nuxt Weather App

A Nuxt 3 weather app that provides 3-hour forecasts over 5 days for any US location using ZIP code lookup.

## Features

- 3-hour weather forecasts for 5 days
- Lookup weather by US ZIP code
- User-friendly interface built with Vue
- Responsive design with Tailwind CSS

## 🚀 Live Demo

- [Live Demo Link](https://fm-nuxt-weather.netlify.app/)

## Tech Stack

- **Nuxt 3**
- **Vue 3**
- **Tailwind CSS**
- **OpenWeatherMap API** (geolocation + forecast data)

## Onboarding

### Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended)
- npm 9+

### 1) Clone the repository

```bash
git clone https://github.com/fredmoseley/nuxt-weather-app.git
cd nuxt-weather-app
```

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment variables

Create a local env file from the example:

```bash
cp .env.example .env
```

Then edit `.env` and set your OpenWeatherMap API key:

```env
WEATHER_API_KEY=your_openweathermap_api_key
```

You can generate an API key from your OpenWeatherMap account dashboard.

### 4) Start the app in development mode

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Production

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run the built server output directly:

```bash
npm run start
```
