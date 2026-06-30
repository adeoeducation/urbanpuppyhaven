function moneyFromCents(cents) {
  return Number((Number(cents || 0) / 100).toFixed(2))
}

export function mapCatalogProduct(row) {
  const stockRows = row.product_size_stock || []
  const colorRows = row.product_colorways || []
  const sizes = stockRows.map((item) => item.size)
  const sizeStock = Object.fromEntries(stockRows.map((item) => [item.size, item.stock_status]))

  return {
    id: row.slug,
    name: row.name,
    line: row.line,
    description: row.description,
    price: moneyFromCents(row.price_cents),
    edition: row.edition || '',
    tag: row.edition || '',
    badge: row.badge || '',
    status: row.status,
    image: row.primary_image_path || '',
    altImage: row.hover_image_path || row.primary_image_path || '',
    vibe: row.vibe,
    category: row.category,
    species: row.species,
    sizes,
    sizeStock,
    colors: colorRows.map((item) => item.colorway_id),
    material: row.material || '',
    drop: row.drop_number || 1,
    editionMax: row.edition_max || 0,
    sortOrder: row.sort_order || 0,
    isFeatured: Boolean(row.is_featured)
  }
}

export function mapCatalogProducts(rows = []) {
  return rows
    .map(mapCatalogProduct)
    .sort((a, b) => (a.sortOrder - b.sortOrder) || a.name.localeCompare(b.name))
}
