type ForecastMain = {
  temp: number
}

type ForecastEntry = {
  dt?: number
  dt_txt?: string
  main: ForecastMain
}

const createShiftedDate = (forecast: ForecastEntry, timezoneOffsetSeconds = 0) => {
  if (typeof forecast.dt === 'number') {
    return new Date((forecast.dt + timezoneOffsetSeconds) * 1000)
  }

  if (forecast.dt_txt) {
    const isoLike = forecast.dt_txt.replace(' ', 'T')
    return new Date(new Date(`${isoLike}Z`).getTime() + timezoneOffsetSeconds * 1000)
  }

  throw new Error('Forecast entry is missing dt and dt_txt values.')
}

export const formatForecastDayLabel = (forecast: ForecastEntry, timezoneOffsetSeconds = 0) =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(createShiftedDate(forecast, timezoneOffsetSeconds))

export const formatForecastTime = (forecast: ForecastEntry, timezoneOffsetSeconds = 0) =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    timeStyle: 'short',
  }).format(createShiftedDate(forecast, timezoneOffsetSeconds))

export const groupForecastByDay = (forecasts: ForecastEntry[], timezoneOffsetSeconds = 0) => {
  const groupedByDay = forecasts.reduce<Record<string, ForecastEntry[]>>((groups, forecast) => {
    const dayLabel = formatForecastDayLabel(forecast, timezoneOffsetSeconds)

    if (!groups[dayLabel]) {
      groups[dayLabel] = []
    }

    groups[dayLabel].push(forecast)
    return groups
  }, {})

  return Object.entries(groupedByDay).map(([dayLabel, entries]) => {
    const temperatures = entries.map(({ main }) => main.temp)

    return {
      dayLabel,
      entries,
      high: Math.round(Math.max(...temperatures)),
      low: Math.round(Math.min(...temperatures)),
    }
  })
}
