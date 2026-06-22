import { describe, expect, it } from 'vitest'
import { formatOrderMoney, orderCustomer, orderItemSummary, orderShippingAddress } from './adminOrderFormat.js'

describe('adminOrderFormat', () => {
  it('formats order totals from cents', () => {
    expect(formatOrderMoney({ total_cents: 12800, currency: 'usd' })).toBe('$128.00')
  })

  it('falls back to guest checkout when customer details are missing', () => {
    expect(orderCustomer({})).toBe('Guest checkout')
    expect(orderCustomer({ customer_name: 'Ada', customer_email: 'ada@example.com' })).toBe('Ada / ada@example.com')
  })

  it('summarizes order items with quantities and selected options', () => {
    expect(orderItemSummary({
      order_items: [
        { name: 'Puffer', quantity: 2, size: 'S', colorway_id: 'ink' },
        { name: 'Vest', quantity: 1, size: 'M', colorway_id: null }
      ]
    })).toBe('2x Puffer (S / ink), 1x Vest (M)')
  })

  it('formats the shipping address for fulfillment', () => {
    expect(orderShippingAddress({
      shipping_details: {
        address: {
          line1: '18 Puppy Lane',
          line2: 'Apt 2',
          city: 'New York',
          state: 'NY',
          postal_code: '10001',
          country: 'US'
        }
      }
    })).toBe('18 Puppy Lane, Apt 2, New York, NY 10001, US')
  })
})
