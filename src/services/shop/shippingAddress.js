export const SHIPPING_COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' }
]

export function emptyShippingAddress() {
  return {
    name: '',
    email: '',
    phone: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'US'
  }
}

function clean(value, maxLength = 160) {
  return String(value || '').trim().replace(/\s+/g, ' ').slice(0, maxLength)
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function normalizeShippingAddress(input = {}) {
  return {
    name: clean(input.name),
    email: clean(input.email, 254).toLowerCase(),
    phone: clean(input.phone, 40),
    line1: clean(input.line1),
    line2: clean(input.line2),
    city: clean(input.city, 120),
    state: clean(input.state, 80).toUpperCase(),
    postalCode: clean(input.postalCode || input.postal_code, 32).toUpperCase(),
    country: clean(input.country, 2).toUpperCase()
  }
}

export function validateShippingAddress(input = {}) {
  const address = normalizeShippingAddress(input)
  const errors = {}

  if (!address.name) errors.name = 'Name is required.'
  if (!address.email) errors.email = 'Email is required.'
  else if (!validEmail(address.email)) errors.email = 'Enter a valid email address.'
  if (!address.line1) errors.line1 = 'Street address is required.'
  if (!address.city) errors.city = 'City is required.'
  if (!address.state) errors.state = 'State is required.'
  if (!address.postalCode) errors.postalCode = 'ZIP or postal code is required.'
  if (!address.country) errors.country = 'Country is required.'
  else if (!SHIPPING_COUNTRIES.some((country) => country.code === address.country)) {
    errors.country = 'Choose an available shipping country.'
  }

  return {
    address,
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
