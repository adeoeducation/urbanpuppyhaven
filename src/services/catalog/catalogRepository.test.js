import { describe, expect, it, vi } from 'vitest'
import { createCatalogRepository } from './catalogRepository.js'

const staticProducts = [
  { id: 'fallback-a', name: 'Fallback A', isFeatured: true, sortOrder: 2 },
  { id: 'fallback-b', name: 'Fallback B', isFeatured: false, sortOrder: 1 }
]

function createFailingSupabase() {
  const query = {
    select: vi.fn(() => query),
    eq: vi.fn(() => query),
    order: vi.fn(() => query),
    then(resolve) {
      return Promise.resolve({ data: null, error: new Error('offline') }).then(resolve)
    }
  }

  return { from: vi.fn(() => query) }
}

function createSuccessfulSupabase(rows) {
  const query = {
    select: vi.fn(() => query),
    eq: vi.fn(() => query),
    order: vi.fn(() => query),
    then(resolve) {
      return Promise.resolve({ data: rows, error: null }).then(resolve)
    }
  }

  return { from: vi.fn(() => query) }
}

function row(slug, name, sortOrder, isFeatured) {
  return {
    slug,
    name,
    line: `${name} line`,
    description: `${name} description`,
    price_cents: 1000,
    edition: '001 / 100',
    badge: 'Drop 001',
    status: 'live',
    species: 'dog',
    category: 'Outerwear',
    vibe: 'mogul',
    material: 'Cotton',
    drop_number: 1,
    sort_order: sortOrder,
    is_featured: isFeatured,
    primary_image_path: `${slug}.jpg`,
    hover_image_path: `${slug}-alt.jpg`,
    product_size_stock: [{ size: 'XS', stock_status: 'in' }],
    product_colorways: [{ colorway_id: 'ink' }]
  }
}

describe('catalogRepository', () => {
  it('returns static products when no Supabase client is available', async () => {
    const repo = createCatalogRepository({ supabase: null, staticProducts })
    await expect(repo.fetchPublishedProducts()).resolves.toEqual(staticProducts)
  })

  it('falls back to static products when Supabase fetch fails', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const repo = createCatalogRepository({ supabase: createFailingSupabase(), staticProducts })
    await expect(repo.fetchPublishedProducts()).resolves.toEqual(staticProducts)
    expect(warn).toHaveBeenCalledWith('[catalog] Using static fallback products.', expect.any(Error))
    warn.mockRestore()
  })

  it('uses featured products first and fills remaining latest drop slots', async () => {
    const repo = createCatalogRepository({
      supabase: createSuccessfulSupabase([
        row('a', 'A', 1, false),
        row('b', 'B', 2, true),
        row('c', 'C', 3, false)
      ]),
      staticProducts
    })

    const products = await repo.fetchLatestDropProducts(2)
    expect(products.map((item) => item.id)).toEqual(['b', 'a'])
  })

  it('preserves the dedicated latest drop fallback when Supabase is unavailable', async () => {
    const latestDropProducts = [{ id: 'drop-a', name: 'Drop A', tag: '001 / 120' }]
    const repo = createCatalogRepository({ supabase: null, staticProducts, staticLatestDropProducts: latestDropProducts })
    await expect(repo.fetchLatestDropProducts(4)).resolves.toEqual(latestDropProducts)
  })
})
