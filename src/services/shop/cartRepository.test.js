import { describe, expect, it, vi } from 'vitest'
import { createCartRepository } from './cartRepository.js'

function supabaseWithRpc(result) {
  return {
    rpc: vi.fn(() => Promise.resolve(result)),
    functions: {
      invoke: vi.fn(() => Promise.resolve({ data: { url: 'https://checkout.stripe.test/session' }, error: null }))
    }
  }
}

describe('cartRepository', () => {
  it('returns an empty remote cart when Supabase is not configured', async () => {
    const repo = createCartRepository({ supabase: null })

    await expect(repo.fetchCart('guest-123')).resolves.toEqual([])
    await expect(repo.saveCart('guest-123', [])).resolves.toEqual([])
  })

  it('loads and sanitizes a remote guest cart', async () => {
    const client = supabaseWithRpc({
      data: {
        items: [
          { productSlug: 'midnight-puffer', name: 'Midnight', price: 64, priceCents: 6400, size: 'S', color: 'ink', qty: 2 }
        ]
      },
      error: null
    })
    const repo = createCartRepository({ supabase: client })

    await expect(repo.fetchCart('guest-token-000000000000')).resolves.toMatchObject([
      { productSlug: 'midnight-puffer', qty: 2, lineId: 'midnight-puffer::S::ink' }
    ])
    expect(client.rpc).toHaveBeenCalledWith('get_guest_cart', { p_guest_token: 'guest-token-000000000000' })
  })

  it('saves sanitized cart lines through the cart RPC', async () => {
    const client = supabaseWithRpc({ data: { items: [] }, error: null })
    const repo = createCartRepository({ supabase: client })

    await repo.saveCart('guest-token-000000000000', [
      { productSlug: 'midnight-puffer', name: 'Midnight', price: 64, priceCents: 6400, size: 'S', color: 'ink', qty: 2 }
    ])

    expect(client.rpc).toHaveBeenCalledWith('save_guest_cart', {
      p_guest_token: 'guest-token-000000000000',
      p_items: [
        expect.objectContaining({ productSlug: 'midnight-puffer', qty: 2, lineId: 'midnight-puffer::S::ink' })
      ]
    })
  })

  it('starts a Stripe Checkout session through the Supabase Edge Function', async () => {
    const client = supabaseWithRpc({ data: { items: [] }, error: null })
    const repo = createCartRepository({ supabase: client })
    const shippingAddress = {
      name: 'William Urban',
      email: 'urbanpuppyhaven@gmail.com',
      phone: '555-0101',
      line1: '18 Puppy Lane',
      line2: '',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'US'
    }

    await expect(repo.startCheckout('guest-token-000000000000', shippingAddress)).resolves.toEqual({
      url: 'https://checkout.stripe.test/session'
    })
    expect(client.functions.invoke).toHaveBeenCalledWith('create-checkout-session', {
      body: { guestId: 'guest-token-000000000000', shippingAddress }
    })
  })
})
