import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const source = readFileSync(new URL('./CartDrawer.vue', import.meta.url), 'utf8')

describe('CartDrawer checkout address step', () => {
  it('collects shipping details before sending shoppers to Stripe', () => {
    expect(source).toContain('Delivery address')
    expect(source).toContain('bag.shippingAddress.value.name')
    expect(source).toContain('bag.shippingAddress.value.postalCode')
    expect(source).toContain('bag.checkout')
    expect(source).toContain('Add shipping address')
  })
})
