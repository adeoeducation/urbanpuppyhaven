import { products as staticProducts } from '../../data/atelier.js'
import { mapCatalogProducts } from './catalogMapper.js'

const PRODUCTS_KEY = 'uph-local-admin-products'
const SESSION_KEY = 'uph-local-admin-session'

export const localAdminConfig = {
  email: import.meta.env.VITE_LOCAL_ADMIN_EMAIL || '',
  password: import.meta.env.VITE_LOCAL_ADMIN_PASSWORD || '',
  username: import.meta.env.VITE_LOCAL_ADMIN_USERNAME || ''
}

export const isLocalAdminEnabled = Boolean(localAdminConfig.email && localAdminConfig.password)

function canUseStorage() {
  return typeof window !== 'undefined' && window.localStorage
}

function staticProductToRow(product, index) {
  return {
    id: `local-${product.id}`,
    slug: product.id,
    name: product.name,
    line: product.line,
    description: product.description,
    price_cents: Math.round(Number(product.price || 0) * 100),
    edition: product.edition || product.tag || '',
    edition_max: product.editionMax || null,
    badge: product.badge || '',
    status: product.status || 'live',
    species: product.species || 'dog',
    category: product.category || 'Outerwear',
    vibe: product.vibe || 'mogul',
    material: product.material || '',
    drop_number: product.drop || 1,
    sort_order: product.sortOrder ?? index,
    is_featured: index < 4,
    primary_image_path: product.image || '',
    hover_image_path: product.altImage || product.image || '',
    primary_image_alt: product.name,
    hover_image_alt: '',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    product_size_stock: (product.sizes || []).map((size) => ({
      size,
      stock_status: product.sizeStock?.[size] || 'in'
    })),
    product_colorways: (product.colors || []).map((colorway_id) => ({ colorway_id }))
  }
}

function seedRows() {
  return staticProducts.map(staticProductToRow)
}

export function getLocalAdminSession() {
  if (!isLocalAdminEnabled || !canUseStorage()) return null
  try {
    const raw = window.localStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function signInLocalAdmin(email, password) {
  if (!isLocalAdminEnabled) throw new Error('Local admin is not configured.')
  const validEmail = email.trim().toLowerCase() === localAdminConfig.email.trim().toLowerCase()
  const validUsername = localAdminConfig.username && email.trim().toLowerCase() === localAdminConfig.username.trim().toLowerCase()
  if ((!validEmail && !validUsername) || password !== localAdminConfig.password) {
    throw new Error('Invalid admin credentials.')
  }

  const session = {
    user: { email: localAdminConfig.email, role: 'owner' },
    access_token: 'local-development-session'
  }
  if (canUseStorage()) window.localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return session
}

export function signOutLocalAdmin() {
  if (canUseStorage()) window.localStorage.removeItem(SESSION_KEY)
}

export function listLocalAdminProducts() {
  if (!canUseStorage()) return seedRows()
  try {
    const raw = window.localStorage.getItem(PRODUCTS_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  const rows = seedRows()
  window.localStorage.setItem(PRODUCTS_KEY, JSON.stringify(rows))
  return rows
}

function writeLocalProducts(rows) {
  if (canUseStorage()) window.localStorage.setItem(PRODUCTS_KEY, JSON.stringify(rows))
}

export function saveLocalProduct(payload, existingId) {
  const rows = listLocalAdminProducts()
  const now = new Date().toISOString()
  const id = existingId || `local-${payload.product.slug || Date.now()}`
  const existing = rows.find((row) => row.id === id)
  const next = {
    ...(existing || { id, created_at: now }),
    ...payload.product,
    id,
    updated_at: now,
    product_size_stock: payload.sizeRows.map((row) => ({
      size: row.size,
      stock_status: row.stock_status
    })),
    product_colorways: payload.colorRows.map((row) => ({
      colorway_id: row.colorway_id
    }))
  }

  const index = rows.findIndex((row) => row.id === id)
  if (index >= 0) rows.splice(index, 1, next)
  else rows.unshift(next)
  writeLocalProducts(rows)
  return id
}

export function archiveLocalProduct(productId) {
  const rows = listLocalAdminProducts().map((row) => (
    row.id === productId ? { ...row, status: 'archived', updated_at: new Date().toISOString() } : row
  ))
  writeLocalProducts(rows)
}

export function deleteLocalProduct(productId) {
  writeLocalProducts(listLocalAdminProducts().filter((row) => row.id !== productId))
}

export function getLocalPublishedProducts() {
  return mapCatalogProducts(listLocalAdminProducts().filter((row) => row.status === 'live'))
}
