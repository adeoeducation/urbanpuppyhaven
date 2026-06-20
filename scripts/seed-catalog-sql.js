import { writeFileSync } from 'node:fs'
import { products } from '../src/data/atelier.js'

function sql(value) {
  if (value === null || value === undefined) return 'null'
  return `'${String(value).replaceAll("'", "''")}'`
}

const lines = [
  '-- Generated from src/data/atelier.js',
  'begin;'
]

for (const [index, product] of products.entries()) {
  const productId = `00000000-0000-4000-8000-${String(index + 1).padStart(12, '0')}`
  lines.push(
    'insert into public.products ' +
    '(id, slug, name, line, description, price_cents, edition, edition_max, badge, status, species, category, vibe, material, drop_number, sort_order, is_featured, primary_image_path, hover_image_path, primary_image_alt, hover_image_alt) values ' +
    `(${sql(productId)}, ${sql(product.id)}, ${sql(product.name)}, ${sql(product.line)}, ${sql(product.description)}, ${Math.round(product.price * 100)}, ${sql(product.edition)}, ${product.editionMax || 'null'}, ${sql(product.badge)}, 'live', ${sql(product.species)}, ${sql(product.category)}, ${sql(product.vibe)}, ${sql(product.material)}, ${product.drop || 1}, ${index}, ${index < 4 ? 'true' : 'false'}, ${sql(product.image)}, ${sql(product.altImage)}, ${sql(product.name)}, '') ` +
    'on conflict (slug) do nothing;'
  )

  for (const size of product.sizes || []) {
    lines.push(
      'insert into public.product_size_stock (product_id, size, stock_status) values ' +
      `(${sql(productId)}, ${sql(size)}, ${sql(product.sizeStock?.[size] || 'in')}) ` +
      'on conflict (product_id, size) do nothing;'
    )
  }

  for (const color of product.colors || []) {
    lines.push(
      'insert into public.product_colorways (product_id, colorway_id) values ' +
      `(${sql(productId)}, ${sql(color)}) ` +
      'on conflict (product_id, colorway_id) do nothing;'
    )
  }
}

lines.push('commit;')
writeFileSync('supabase/seed-catalog.sql', `${lines.join('\n')}\n`)
