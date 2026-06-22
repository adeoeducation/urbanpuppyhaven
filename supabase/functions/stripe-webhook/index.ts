import Stripe from 'https://esm.sh/stripe@14?target=denonext'
import { createClient } from 'npm:@supabase/supabase-js@2'

const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY') || Deno.env.get('STRIPE_API_KEY') || ''
const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SIGNING_SECRET') || Deno.env.get('STRIPE_WEBHOOK_SECRET') || ''
const stripe = new Stripe(stripeSecret, { apiVersion: '2024-11-20' })
const cryptoProvider = Stripe.createSubtleCryptoProvider()

function serviceRoleKey() {
  const secretKeys = Deno.env.get('SUPABASE_SECRET_KEYS')
  if (secretKeys) {
    const parsed = JSON.parse(secretKeys)
    if (parsed.default) return parsed.default
  }
  return Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
}

function supabaseAdmin() {
  return createClient(Deno.env.get('SUPABASE_URL') || '', serviceRoleKey(), {
    auth: { persistSession: false, autoRefreshToken: false }
  })
}

function checkoutSession(event: Stripe.Event) {
  return event.data.object as Stripe.Checkout.Session
}

Deno.serve(async (request) => {
  if (request.method !== 'POST') return new Response('Method not allowed.', { status: 405 })
  if (!stripeSecret || !webhookSecret) return new Response('Stripe webhook is not configured.', { status: 500 })

  const signature = request.headers.get('Stripe-Signature')
  const body = await request.text()

  let event: Stripe.Event
  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      signature!,
      webhookSecret,
      undefined,
      cryptoProvider
    )
  } catch (err) {
    return new Response(err instanceof Error ? err.message : String(err), { status: 400 })
  }

  const supabase = supabaseAdmin()

  if (
    event.type === 'checkout.session.completed' ||
    event.type === 'checkout.session.async_payment_succeeded'
  ) {
    const session = checkoutSession(event)
    const orderId = session.metadata?.order_id || session.client_reference_id
    if (orderId) {
      const { data: order } = await supabase
        .from('orders')
        .update({
          stripe_checkout_session_id: session.id,
          stripe_payment_intent_id: typeof session.payment_intent === 'string' ? session.payment_intent : null,
          customer_email: session.customer_details?.email || null,
          customer_name: session.customer_details?.name || null,
          shipping_details: session.shipping_details || null,
          subtotal_cents: session.amount_subtotal || undefined,
          total_cents: session.amount_total || undefined,
          payment_status: 'paid',
          order_status: 'paid'
        })
        .eq('id', orderId)
        .select('guest_token')
        .single()

      if (order?.guest_token) {
        await supabase
          .from('guest_carts')
          .update({ items: [] })
          .eq('guest_token', order.guest_token)
      }
    }
  }

  if (
    event.type === 'checkout.session.async_payment_failed' ||
    event.type === 'checkout.session.expired'
  ) {
    const session = checkoutSession(event)
    const orderId = session.metadata?.order_id || session.client_reference_id
    if (orderId) {
      await supabase
        .from('orders')
        .update({
          stripe_checkout_session_id: session.id,
          payment_status: 'failed',
          order_status: event.type === 'checkout.session.expired' ? 'cancelled' : 'payment_failed'
        })
        .eq('id', orderId)
    }
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
})
