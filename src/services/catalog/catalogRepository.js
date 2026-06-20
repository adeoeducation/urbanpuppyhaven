import { products as staticProducts } from '../../data/atelier.js'
import { products as staticLatestDropProducts } from '../../data/products.js'
import { supabase } from '../../lib/supabaseClient.js'
import { mapCatalogProducts } from './catalogMapper.js'

const PRODUCT_SELECT = `
  *,
  product_size_stock(size, stock_status, quantity),
  product_colorways(colorway_id)
`

function sortCatalog(list) {
  return [...list].sort((a, b) => {
    const byOrder = (a.sortOrder || 0) - (b.sortOrder || 0)
    if (byOrder !== 0) return byOrder
    return String(a.name || '').localeCompare(String(b.name || ''))
  })
}

export function createCatalogRepository(deps = {}) {
  const client = deps.supabase === undefined ? supabase : deps.supabase
  const fallback = deps.staticProducts || staticProducts
  const latestFallback = deps.staticLatestDropProducts || staticLatestDropProducts

  async function fetchPublishedProducts() {
    if (!client) return fallback

    const { data, error } = await client
      .from('products')
      .select(PRODUCT_SELECT)
      .eq('status', 'live')
      .order('sort_order', { ascending: true })
      .order('name', { ascending: true })

    if (error || !Array.isArray(data)) {
      console.warn('[catalog] Using static fallback products.', error)
      return fallback
    }

    return mapCatalogProducts(data)
  }

  async function fetchLatestDropProducts(limit = 4) {
    if (!client) return latestFallback.slice(0, limit)

    const products = await fetchPublishedProducts()
    const sorted = sortCatalog(products)
    const featured = sorted.filter((item) => item.isFeatured)
    const fill = sorted.filter((item) => !item.isFeatured)
    return [...featured, ...fill].slice(0, limit)
  }

  return { fetchPublishedProducts, fetchLatestDropProducts }
}

export const catalogRepository = createCatalogRepository()
