import Stripe from 'https://esm.sh/stripe@14?target=denonext'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders, jsonResponse } from '../_shared/cors.ts'

type CartLine = {
  productSlug?: string
  size?: string
  color?: string
  qty?: number
}

const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY') || Deno.env.get('STRIPE_API_KEY') || ''
const stripe = new Stripe(stripeSecret, { apiVersion: '2024-11-20' })

function serviceRoleKey() {
  const secretKeys = Deno.env.get('SUPABASE_SECRET_KEYS')
  if (secretKeys) {
    const parsed = JSON.parse(secretKeys)
    if (parsed.default) return parsed.default
  }
  return Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
}

function siteUrl(request: Request) {
  return (Deno.env.get('SITE_URL') || request.headers.get('origin') || 'http://127.0.0.1:5175').replace(/\/$/, '')
}

function allowedCountries() {
  return (Deno.env.get('STRIPE_ALLOWED_COUNTRIES') || 'US,CA')
    .split(',')
    .map((country) => country.trim().toUpperCase())
    .filter(Boolean)
}

function normalizeCartLine(line: CartLine) {
  return {
    productSlug: String(line.productSlug || '').trim(),
    size: String(line.size || '').trim(),
    color: String(line.color || '').trim(),
    qty: Math.min(Math.max(Number.parseInt(String(line.qty || 1), 10) || 1, 1), 10)
  }
}

function publicImage(url?: string) {
  if (!url) return []
  return /^https?:\/\//i.test(url) ? [url] : []
}

Deno.serve(async (request) => {
  const origin = request.headers.get('origin') || '*'
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders(origin) })
  if (request.method !== 'POST') return jsonResponse({ error: 'Method not allowed.' }, 405, origin)
  if (!stripeSecret) return jsonResponse({ error: 'Stripe is not configured.' }, 500, origin)

  const supabaseUrl = Deno.env.get('SUPABASE_URL') || ''
  const supabaseKey = serviceRoleKey()
  if (!supabaseUrl || !supabaseKey) return jsonResponse({ error: 'Supabase service credentials are not configured.' }, 500, origin)

  const { guestId } = await request.json().catch(() => ({ guestId: '' }))
  if (!guestId || typeof guestId !== 'string' || guestId.length < 24 || guestId.length > 160) {
    return jsonResponse({ error: 'Invalid guest cart.' }, 400, origin)
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  })

  const { data: cart, error: cartError } = await supabase
    .from('guest_carts')
    .select('items')
    .eq('guest_token', guestId)
    .single()

  if (cartError || !Array.isArray(cart?.items) || cart.items.length === 0) {
    return jsonResponse({ error: 'Your bag is empty.' }, 400, origin)
  }

  const cartLines = (cart.items as CartLine[]).map(normalizeCartLine).filter((line) => line.productSlug)
  const slugs = [...new Set(cartLines.map((line) => line.productSlug))]

  const { data: products, error: productsError } = await supabase
    .from('products')
    .select('id, slug, name, price_cents, status, primary_image_path, product_size_stock(size, stock_status), product_colorways(colorway_id)')
    .in('slug', slugs)
    .eq('status', 'live')

  if (productsError) return jsonResponse({ error: 'Unable to validate products.' }, 500, origin)

  const productBySlug = new Map((products || []).map((product) => [product.slug, product]))
  const orderItems = []
  const lineItems = []
  let subtotalCents = 0

  for (const line of cartLines) {
    const product = productBySlug.get(line.productSlug)
    if (!product) return jsonResponse({ error: `${line.productSlug} is no longer available.` }, 400, origin)

    const stockRows = product.product_size_stock || []
    const sizeRow = stockRows.find((row: { size: string }) => row.size === line.size)
    if (line.size && (!sizeRow || sizeRow.stock_status === 'sold')) {
      return jsonResponse({ error: `${product.name} is not available in ${line.size}.` }, 400, origin)
    }

    const colorRows = product.product_colorways || []
    if (line.color && colorRows.length && !colorRows.some((row: { colorway_id: string }) => row.colorway_id === line.color)) {
      return jsonResponse({ error: `${product.name} is not available in that colorway.` }, 400, origin)
    }

    const lineTotal = Number(product.price_cents || 0) * line.qty
    subtotalCents += lineTotal
    const optionLabel = [line.size, line.color].filter(Boolean).join(' / ')

    lineItems.push({
      quantity: line.qty,
      price_data: {
        currency: 'usd',
        unit_amount: Number(product.price_cents || 0),
        product_data: {
          name: optionLabel ? `${product.name} (${optionLabel})` : product.name,
          images: publicImage(product.primary_image_path),
          metadata: { product_slug: product.slug }
        }
      }
    })

    orderItems.push({
      product_id: product.id,
      product_slug: product.slug,
      name: product.name,
      image_url: product.primary_image_path,
      size: line.size || null,
      colorway_id: line.color || null,
      unit_price_cents: Number(product.price_cents || 0),
      quantity: line.qty,
      line_total_cents: lineTotal
    })
  }

  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      guest_token: guestId,
      currency: 'usd',
      subtotal_cents: subtotalCents,
      total_cents: subtotalCents,
      payment_status: 'unpaid',
      order_status: 'checkout_created'
    })
    .select('id, order_number')
    .single()

  if (orderError) return jsonResponse({ error: 'Unable to create order.' }, 500, origin)

  const { error: orderItemsError } = await supabase
    .from('order_items')
    .insert(orderItems.map((item) => ({ ...item, order_id: order.id })))

  if (orderItemsError) return jsonResponse({ error: 'Unable to create order lines.' }, 500, origin)

  const baseUrl = siteUrl(request)
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    client_reference_id: order.id,
    line_items: lineItems,
    success_url: `${baseUrl}/?checkout=success&order=${encodeURIComponent(order.order_number)}`,
    cancel_url: `${baseUrl}/?checkout=cancelled`,
    metadata: {
      order_id: order.id,
      order_number: order.order_number,
      guest_id: guestId
    },
    billing_address_collection: 'auto',
    shipping_address_collection: { allowed_countries: allowedCountries() },
    phone_number_collection: { enabled: true },
    allow_promotion_codes: true
  })

  await supabase
    .from('orders')
    .update({
      stripe_checkout_session_id: session.id,
      total_cents: session.amount_total || subtotalCents
    })
    .eq('id', order.id)

  return jsonResponse({ url: session.url, orderNumber: order.order_number }, 200, origin)
})
