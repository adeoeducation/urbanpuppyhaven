import { categories, sizes, worlds } from '../services/catalog/constants.js'

export function slugifyProductName(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function createBlankProductForm() {
  return {
    id: null,
    name: '',
    slug: '',
    line: '',
    description: '',
    price: '',
    edition: '',
    editionMax: '',
    badge: '',
    status: 'draft',
    species: 'dog',
    category: categories[0],
    vibe: worlds[0].id,
    material: '',
    dropNumber: 1,
    sortOrder: 0,
    isFeatured: false,
    primaryImagePath: '',
    hoverImagePath: '',
    primaryImageAlt: '',
    hoverImageAlt: '',
    sizes: [],
    sizeStock: Object.fromEntries(sizes.map((size) => [size, 'in'])),
    colors: []
  }
}

export function validateProductForm(form, { intent = 'draft' } = {}) {
  if (intent === 'draft') return []

  const errors = []
  if (!form.name.trim()) errors.push('Name is required.')
  if (!form.slug.trim()) errors.push('Slug is required.')
  if (!form.line.trim()) errors.push('Tagline is required.')
  if (!form.description.trim()) errors.push('Description is required.')
  if (!Number(form.price)) errors.push('Price is required.')
  if (!form.species) errors.push('Species is required.')
  if (!form.category) errors.push('Category is required.')
  if (!form.vibe) errors.push('World is required.')
  if (!form.primaryImagePath) errors.push('Primary image is required.')
  if (!form.sizes.length) errors.push('At least one size is required.')
  if (!form.colors.length) errors.push('At least one colorway is required.')
  return errors
}

export function productFormToPayload(form) {
  const price_cents = Math.round(Number(form.price || 0) * 100)
  return {
    product: {
      slug: form.slug || slugifyProductName(form.name),
      name: form.name.trim(),
      line: form.line.trim(),
      description: form.description.trim(),
      price_cents,
      edition: form.edition || null,
      edition_max: form.editionMax ? Number(form.editionMax) : null,
      badge: form.badge || null,
      status: form.status,
      species: form.species,
      category: form.category,
      vibe: form.vibe,
      material: form.material || null,
      drop_number: Number(form.dropNumber || 1),
      sort_order: Number(form.sortOrder || 0),
      is_featured: Boolean(form.isFeatured),
      primary_image_path: form.primaryImagePath || null,
      hover_image_path: form.hoverImagePath || null,
      primary_image_alt: form.primaryImageAlt || form.name,
      hover_image_alt: form.hoverImageAlt || ''
    },
    sizeRows: form.sizes.map((size) => ({
      size,
      stock_status: form.sizeStock[size] || 'in'
    })),
    colorRows: form.colors.map((colorway_id) => ({ colorway_id }))
  }
}

export function productRowToForm(row) {
  const form = createBlankProductForm()
  const stockRows = row.product_size_stock || []
  const colorRows = row.product_colorways || []

  form.id = row.id
  form.name = row.name || ''
  form.slug = row.slug || ''
  form.line = row.line || ''
  form.description = row.description || ''
  form.price = ((Number(row.price_cents || 0) / 100).toFixed(2))
  form.edition = row.edition || ''
  form.editionMax = row.edition_max ? String(row.edition_max) : ''
  form.badge = row.badge || ''
  form.status = row.status || 'draft'
  form.species = row.species || 'dog'
  form.category = row.category || categories[0]
  form.vibe = row.vibe || worlds[0].id
  form.material = row.material || ''
  form.dropNumber = row.drop_number || 1
  form.sortOrder = row.sort_order || 0
  form.isFeatured = Boolean(row.is_featured)
  form.primaryImagePath = row.primary_image_path || ''
  form.hoverImagePath = row.hover_image_path || ''
  form.primaryImageAlt = row.primary_image_alt || row.name || ''
  form.hoverImageAlt = row.hover_image_alt || ''
  form.sizes = stockRows.map((item) => item.size)
  form.sizeStock = {
    ...form.sizeStock,
    ...Object.fromEntries(stockRows.map((item) => [item.size, item.stock_status]))
  }
  form.colors = colorRows.map((item) => item.colorway_id)

  return form
}
