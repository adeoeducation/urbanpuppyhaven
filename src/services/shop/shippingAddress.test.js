import { describe, expect, it } from 'vitest'
import { normalizeShippingAddress, validateShippingAddress } from './shippingAddress.js'

describe('shippingAddress', () => {
  it('trims and normalizes shopper shipping details for checkout', () => {
    expect(normalizeShippingAddress({
      name: '  William Urban  ',
      email: '  URBANPUPPYHAVEN@GMAIL.COM ',
      phone: ' 555-0101 ',
      line1: ' 18 Puppy Lane ',
      line2: ' Apt 2 ',
      city: ' New York ',
      state: ' ny ',
      postalCode: ' 10001 ',
      country: ' us '
    })).toEqual({
      name: 'William Urban',
      email: 'urbanpuppyhaven@gmail.com',
      phone: '555-0101',
      line1: '18 Puppy Lane',
      line2: 'Apt 2',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'US'
    })
  })

  it('requires a complete shipping address before checkout can start', () => {
    const result = validateShippingAddress({
      name: '',
      email: 'not-an-email',
      line1: '',
      city: '',
      state: '',
      postalCode: '',
      country: ''
    })

    expect(result.isValid).toBe(false)
    expect(result.errors).toMatchObject({
      name: 'Name is required.',
      email: 'Enter a valid email address.',
      line1: 'Street address is required.',
      city: 'City is required.',
      state: 'State is required.',
      postalCode: 'ZIP or postal code is required.',
      country: 'Country is required.'
    })
  })
})
