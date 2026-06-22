import { describe, expect, it, vi } from 'vitest'
import {
  addCartLine,
  cartSubtotalCents,
  createGuestId,
  removeCartLine,
  sanitizeCartItems,
  updateCartLineQty
} from './guestCart.js'

const product = {
  id: 'midnight-puffer',
  name: 'Midnight Pup Puffer',
  price: 64,
  image: '/midnight.jpg',
  sizes: ['XS', 'S'],
  colors: ['ink', 'oat']
}

function storage(seed = {}) {
  const values = { ...seed }
  return {
    getItem: vi.fn((key) => values[key] ?? null),
    setItem: vi.fn((key, value) => { values[key] = value }),
    removeItem: vi.fn((key) => { delete values[key] })
  }
}

describe('guestCart', () => {
  it('creates and persists an anonymous guest id without using IP addresses', () => {
    const store = storage()
    const guestId = createGuestId(store, { randomUUID: () => 'guest-123' })

    expect(guestId).toBe('guest-123')
    expect(store.setItem).toHaveBeenCalledWith('uph-guest-id', 'guest-123')
  })

  it('reuses an existing guest id from storage', () => {
    const store = storage({ 'uph-guest-id': 'existing-guest' })

    expect(createGuestId(store, { randomUUID: () => 'new-guest' })).toBe('existing-guest')
    expect(store.setItem).not.toHaveBeenCalled()
  })

  it('merges identical product, size, and color lines', () => {
    const first = addCartLine([], product, { size: 'S', color: 'ink' })
    const second = addCartLine(first, product, { size: 'S', color: 'ink' })

    expect(second).toHaveLength(1)
    expect(second[0]).toMatchObject({
      lineId: 'midnight-puffer::S::ink',
      productSlug: 'midnight-puffer',
      qty: 2,
      priceCents: 6400
    })
  })

  it('keeps different sizes as separate lines and totals in cents', () => {
    const cart = addCartLine(
      addCartLine([], product, { size: 'XS', color: 'ink' }),
      product,
      { size: 'S', color: 'ink' }
    )

    expect(cart.map((line) => line.lineId)).toEqual([
      'midnight-puffer::XS::ink',
      'midnight-puffer::S::ink'
    ])
    expect(cartSubtotalCents(cart)).toBe(12800)
  })

  it('updates and removes lines by stable line id', () => {
    const cart = addCartLine([], product, { size: 'XS', color: 'oat' })
    const updated = updateCartLineQty(cart, 'midnight-puffer::XS::oat', 3)
    const removed = removeCartLine(updated, 'midnight-puffer::XS::oat')

    expect(updated[0].qty).toBe(3)
    expect(removed).toEqual([])
  })

  it('sanitizes persisted cart data before syncing', () => {
    const sanitized = sanitizeCartItems([
      { productSlug: 'midnight-puffer', name: 'Midnight', price: '64', priceCents: 6400, size: 'S', color: 'ink', qty: 100 },
      { productSlug: '', qty: 1 },
      null
    ])

    expect(sanitized).toEqual([
      {
        lineId: 'midnight-puffer::S::ink',
        productSlug: 'midnight-puffer',
        name: 'Midnight',
        price: 64,
        priceCents: 6400,
        image: '',
        size: 'S',
        color: 'ink',
        qty: 10,
        addedAt: expect.any(Number)
      }
    ])
  })
})
