import { supabase } from '../../lib/supabaseClient.js'
import { sanitizeCartItems } from './guestCart.js'

function throwIfError(result) {
  if (result?.error) throw result.error
  return result
}

export function createCartRepository({ supabase: client = supabase } = {}) {
  async function fetchCart(guestId) {
    if (!client) return []
    const result = throwIfError(await client.rpc('get_guest_cart', { p_guest_token: guestId }))
    return sanitizeCartItems(result.data?.items || [])
  }

  async function saveCart(guestId, items) {
    const sanitized = sanitizeCartItems(items)
    if (!client) return sanitized
    throwIfError(await client.rpc('save_guest_cart', {
      p_guest_token: guestId,
      p_items: sanitized
    }))
    return sanitized
  }

  async function startCheckout(guestId) {
    if (!client) {
      throw new Error('Checkout needs Supabase and Stripe configuration.')
    }
    const result = throwIfError(await client.functions.invoke('create-checkout-session', {
      body: { guestId }
    }))
    if (!result.data?.url) throw new Error('Stripe Checkout did not return a checkout URL.')
    return { url: result.data.url }
  }

  return { fetchCart, saveCart, startCheckout }
}

export const cartRepository = createCartRepository()
