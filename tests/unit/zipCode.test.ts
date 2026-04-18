import { getZipCodeError, isValidZipCode, normalizeZipCodeInput } from '../../utils/zipCode'

describe('zip code helpers', () => {
  it('normalizes mixed input down to five digits', () => {
    expect(normalizeZipCodeInput('9a0-21xyz7')).toBe('90217')
  })

  it('accepts exactly five digits', () => {
    expect(isValidZipCode('90210')).toBe(true)
    expect(getZipCodeError('90210')).toBe('')
  })

  it('rejects invalid zip codes', () => {
    expect(isValidZipCode('9021')).toBe(false)
    expect(isValidZipCode('90A10')).toBe(false)
    expect(getZipCodeError('9021')).toBe('Please enter a valid 5-digit US ZIP code.')
  })
})
