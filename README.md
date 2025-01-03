# Nuxt Weather App

A weather forecasting app that provides 3-hour forecasts over 5 days for any US location using ZIP code lookup.

## Features

- 3-hour weather forecasts for 5 days
- Lookup weather by US ZIP code
- User-friendly interface built with Vue.js
- Responsive design
<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://fm-nuxt-weather.netlify.app/)

## Technologies

- **Nuxt**
- **Vue**
- **Tailwind CSS**

## Third-Party APIs
* **OpenWeatherMap:** Used to fetch geolocation and weather forecast data.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/fredmoseley/nuxt-weather-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd nuxt-weather-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Setup

1. Copy the `.env.example` file to `.env`:

    ```bash
    cp .env.example .env
    ```

2. Open the `.env` file and add your OpenWeatherAPI key:

    ```env
    WEATHER_API_KEY=your_openweather_api_key
    ```

3. Replace `your_openweather_api_key` with your actual OpenWeatherAPI key.

## Usage

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`

## Build

To build the project for production, run:

```bash
npm run build