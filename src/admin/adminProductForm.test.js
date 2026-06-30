import { describe, expect, it } from 'vitest'
import { createBlankProductForm, productFormToPayload, productRowToForm, slugifyProductName, validateProductForm } from './adminProductForm.js'

describe('adminProductForm', () => {
  it('slugifies product names', () => {
    expect(slugifyProductName(' Midnight Pup Puffer! ')).toBe('midnight-pup-puffer')
  })

  it('allows incomplete draft saves', () => {
    const form = createBlankProductForm()
    expect(validateProductForm(form, { intent: 'draft' })).toEqual([])
  })

  it('blocks publishing incomplete products', () => {
    const form = createBlankProductForm()
    expect(validateProductForm(form, { intent: 'publish' })).toContain('Name is required.')
  })

  it('maps dollars to price cents', () => {
    const form = {
      ...createBlankProductForm(),
      name: 'Midnight Pup Puffer',
      slug: 'midnight-pup-puffer',
      line: 'Walks like they own the block.',
      description: 'A real description.',
      price: '64.50',
      species: 'dog',
      category: 'Outerwear',
      vibe: 'paparazzi',
      primaryImagePath: 'products/1/primary.jpg',
      sizes: ['XS'],
      sizeStock: { XS: 'in' },
      colors: ['ink']
    }

    expect(productFormToPayload(form).product.price_cents).toBe(6450)
  })

  it('maps admin product rows into editable form state', () => {
    const form = productRowToForm({
      id: 'uuid-1',
      slug: 'midnight-puffer',
      name: 'Midnight Pup Puffer',
      line: 'Walks like they own the block.',
      description: 'A real description.',
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
      sort_order: 4,
      is_featured: true,
      primary_image_path: 'primary.jpg',
      hover_image_path: 'hover.jpg',
      product_size_stock: [{ size: 'XS', stock_status: 'low' }],
      product_colorways: [{ colorway_id: 'ink' }]
    })

    expect(form.price).toBe('64.00')
    expect(form.sizes).toEqual(['XS'])
    expect(form.sizeStock.XS).toBe('low')
    expect(form.colors).toEqual(['ink'])
  })
})
