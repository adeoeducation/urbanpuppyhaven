export const CART_KEY = 'uph-bag'
export const GUEST_ID_KEY = 'uph-guest-id'

const MAX_QTY = 10

function fallbackGuestId() {
  return `guest-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`
}

function toCents(price) {
  return Math.max(0, Math.round(Number(price || 0) * 100))
}

function clampQty(qty) {
  const value = Number.parseInt(qty, 10)
  if (!Number.isFinite(value) || value < 1) return 1
  return Math.min(value, MAX_QTY)
}

export function createGuestId(storage, cryptoSource = globalThis.crypto) {
  const stored = storage?.getItem?.(GUEST_ID_KEY)
  if (stored) return stored

  const guestId = cryptoSource?.randomUUID?.() || fallbackGuestId()
  storage?.setItem?.(GUEST_ID_KEY, guestId)
  return guestId
}

export function lineKey(productSlug, size, color) {
  return `${productSlug || ''}::${size || ''}::${color || ''}`
}

export function createCartLine(product, opts = {}) {
  const productSlug = product.id || product.slug || product.productSlug
  const size = opts.size || product.size || product.sizes?.[0] || ''
  const color = opts.color || product.color || product.colors?.[0] || ''
  const price = Number(product.price || 0)

  return {
    lineId: lineKey(productSlug, size, color),
    productSlug,
    name: product.name || '',
    price,
    priceCents: product.priceCents ?? toCents(price),
    image: product.image || '',
    size,
    color,
    qty: clampQty(opts.qty || product.qty || 1),
    addedAt: product.addedAt || Date.now()
  }
}

export function addCartLine(items, product, opts = {}) {
  const line = createCartLine(product, opts)
  const next = sanitizeCartItems(items)
  const existing = next.find((item) => item.lineId === line.lineId)
  if (existing) existing.qty = clampQty(existing.qty + line.qty)
  else next.push(line)
  return next
}

export function updateCartLineQty(items, lineId, qty) {
  return sanitizeCartItems(items)
    .map((item) => item.lineId === lineId ? { ...item, qty: clampQty(qty) } : item)
}

export function removeCartLine(items, lineId) {
  return sanitizeCartItems(items).filter((item) => item.lineId !== lineId)
}

export function cartSubtotalCents(items) {
  return sanitizeCartItems(items)
    .reduce((sum, item) => sum + (Number(item.priceCents || 0) * Number(item.qty || 1)), 0)
}

export function sanitizeCartItems(items = []) {
  if (!Array.isArray(items)) return []
  return items
    .filter((item) => item && (item.productSlug || item.id))
    .map((item) => createCartLine({
      id: item.productSlug || item.id,
      name: item.name,
      price: item.price,
      priceCents: item.priceCents,
      image: item.image,
      size: item.size,
      color: item.color,
      qty: item.qty,
      addedAt: item.addedAt
    }, {
      size: item.size,
      color: item.color,
      qty: item.qty
    }))
}

export function formatCents(cents) {
  return (Number(cents || 0) / 100).toFixed(2)
}
