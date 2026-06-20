import { describe, expect, it } from 'vitest'
import { mapCatalogProduct, mapCatalogProducts } from './catalogMapper.js'

const row = {
  id: 'uuid-1',
  slug: 'midnight-puffer',
  name: 'Midnight Pup Puffer',
  line: 'Walks like they own the block.',
  description: 'Water-resistant down puffer.',
  price_cents: 6400,
  edition: '012 / 120',
  edition_max: 120,
  badge: 'Drop 001',
  status: 'live',
  species: 'dog',
  category: 'Outerwear',
  vibe: 'paparazzi',
  material: 'Recycled nylon',
  drop_number: 1,
  sort_order: 2,
  is_featured: true,
  primary_image_path: 'https://example.test/primary.jpg',
  hover_image_path: 'https://example.test/hover.jpg',
  product_size_stock: [
    { size: 'XS', stock_status: 'in' },
    { size: 'M', stock_status: 'low' },
    { size: 'XL', stock_status: 'sold' }
  ],
  product_colorways: [
    { colorway_id: 'ink' },
    { colorway_id: 'rust' }
  ]
}

describe('catalogMapper', () => {
  it('maps Supabase rows into the existing atelier product shape', () => {
    expect(mapCatalogProduct(row)).toEqual({
      id: 'midnight-puffer',
      name: 'Midnight Pup Puffer',
      line: 'Walks like they own the block.',
      description: 'Water-resistant down puffer.',
      price: 64,
      edition: '012 / 120',
      tag: '012 / 120',
      badge: 'Drop 001',
      status: 'live',
      image: 'https://example.test/primary.jpg',
      altImage: 'https://example.test/hover.jpg',
      vibe: 'paparazzi',
      category: 'Outerwear',
      species: 'dog',
      sizes: ['XS', 'M', 'XL'],
      sizeStock: { XS: 'in', M: 'low', XL: 'sold' },
      colors: ['ink', 'rust'],
      material: 'Recycled nylon',
      drop: 1,
      editionMax: 120,
      sortOrder: 2,
      isFeatured: true
    })
  })

  it('sorts mapped products by sort order then name', () => {
    const later = { ...row, slug: 'zulu', name: 'Zulu', sort_order: 20 }
    const earlier = { ...row, slug: 'alpha', name: 'Alpha', sort_order: 1 }
    expect(mapCatalogProducts([later, earlier]).map((item) => item.id)).toEqual(['alpha', 'zulu'])
  })
})
