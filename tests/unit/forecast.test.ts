import { formatForecastDayLabel, formatForecastTime, groupForecastByDay } from '../../utils/forecast'

describe('forecast helpers', () => {
  const forecastEntries = [
    {
      dt: 1713650400,
      dt_txt: '2024-04-20 22:00:00',
      main: { temp: 61.2 },
    },
    {
      dt: 1713661200,
      dt_txt: '2024-04-21 01:00:00',
      main: { temp: 58.6 },
    },
    {
      dt: 1713736800,
      dt_txt: '2024-04-21 22:00:00',
      main: { temp: 66.4 },
    },
  ]

  it('formats times using the forecast timezone offset instead of the viewer timezone', () => {
    expect(formatForecastTime(forecastEntries[0], -25200)).toBe('3:00 PM')
  })

  it('groups entries into local forecast days and computes daily highs and lows', () => {
    expect(groupForecastByDay(forecastEntries, -25200)).toEqual([
      {
        dayLabel: 'Saturday, April 20',
        entries: [forecastEntries[0], forecastEntries[1]],
        high: 61,
        low: 59,
      },
      {
        dayLabel: 'Sunday, April 21',
        entries: [forecastEntries[2]],
        high: 66,
        low: 66,
      },
    ])
  })

  it('formats day labels consistently', () => {
    expect(formatForecastDayLabel(forecastEntries[0], -25200)).toBe('Saturday, April 20')
  })
})
