const ZIP_CODE_REGEX = /^\d{5}$/

export const normalizeZipCodeInput = (value: string) => value.replace(/\D/g, '').slice(0, 5)

export const isValidZipCode = (value: string) => ZIP_CODE_REGEX.test(value)

export const getZipCodeError = (value: string) =>
  isValidZipCode(value) ? '' : 'Please enter a valid 5-digit US ZIP code.'
