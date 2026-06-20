# Production Catalog Admin Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Supabase-backed admin/back-office for managing Urban Puppy Haven product listings while preserving the current public storefront UI.

**Architecture:** Add a catalog service layer between Vue components and data sources. Public storefront components keep their existing templates/styles and receive products through `useCatalog()`, which reads Supabase live products with static fallback. Add a private `/admin` mode with Supabase Auth, product CRUD, image upload, validation, and SQL/RLS assets.

**Tech Stack:** Vue 3, Vite, Supabase JS, Supabase Postgres/Storage/Auth, Vitest.

---

## File Structure

- Modify: `package.json` to add Supabase and Vitest scripts/dependencies.
- Create: `.env.example` with Supabase public env vars.
- Create: `supabase/migrations/202606200001_catalog_admin.sql` for tables, helper functions, RLS, and storage policies.
- Create: `src/lib/supabaseClient.js` for optional Supabase client initialization.
- Create: `src/services/catalog/constants.js` for catalog primitives shared by public shop and admin.
- Create: `src/services/catalog/catalogMapper.js` for Supabase row mapping into current product shape.
- Create: `src/services/catalog/catalogRepository.js` for published/featured catalog fetches with static fallback.
- Create: `src/services/catalog/catalogMapper.test.js` for mapper coverage.
- Create: `src/services/catalog/catalogRepository.test.js` for fallback/query coverage.
- Create: `src/composables/useCatalog.js` for reactive catalog loading.
- Modify: `src/components/TheAtelier.vue` to consume `useCatalog()` without changing template/class styling.
- Modify: `src/components/LatestDrop.vue` to consume `useCatalog()` without changing template/class styling.
- Create: `src/admin/adminProductForm.js` for form defaults, slugging, validation, payload mapping.
- Create: `src/admin/adminProductForm.test.js` for admin helper coverage.
- Create: `src/admin/adminCatalogApi.js` for admin CRUD and image upload calls.
- Create: `src/admin/AdminApp.vue` for admin auth gate and shell.
- Create: `src/admin/AdminLogin.vue` for login.
- Create: `src/admin/AdminProductList.vue` for catalog table.
- Create: `src/admin/AdminProductEditor.vue` for create/edit form.
- Create: `src/admin/admin.css` for admin-only styling based on existing design tokens.
- Modify: `src/App.vue` to render `AdminApp` only when path starts `/admin`; storefront path stays visually unchanged.
- Create: `scripts/seed-catalog-sql.js` to generate seed SQL from the current static catalog.

---

### Task 1: Dependencies And Environment

**Files:**
- Modify: `package.json`
- Create: `.env.example`

- [ ] **Step 1: Add package/test script expectations**

Update `package.json` so scripts include:

```json
{
  "test": "vitest run",
  "test:watch": "vitest"
}
```

Add runtime dependency:

```json
"@supabase/supabase-js": "^2.45.0"
```

Add dev dependency:

```json
"vitest": "^2.1.0"
```

- [ ] **Step 2: Install dependencies**

Run:

```bash
npm install
```

Expected: `package-lock.json` updates and install exits 0.

- [ ] **Step 3: Add env example**

Create `.env.example`:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

- [ ] **Step 4: Verify baseline**

Run:

```bash
npm run build
```

Expected: build exits 0.

---

### Task 2: Supabase Schema And RLS

**Files:**
- Create: `supabase/migrations/202606200001_catalog_admin.sql`

- [ ] **Step 1: Create migration file**

Add:

```sql
create extension if not exists pgcrypto;

create table if not exists public.admin_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  role text not null check (role in ('owner', 'catalog_admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  line text not null,
  description text not null,
  price_cents integer not null check (price_cents >= 0),
  edition text,
  edition_max integer check (edition_max is null or edition_max > 0),
  badge text,
  status text not null default 'draft' check (status in ('draft', 'live', 'archived')),
  species text not null check (species in ('dog', 'cat', 'both')),
  category text not null,
  vibe text not null,
  material text,
  drop_number integer not null default 1,
  sort_order integer not null default 0,
  is_featured boolean not null default false,
  primary_image_path text,
  hover_image_path text,
  primary_image_alt text,
  hover_image_alt text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.product_size_stock (
  product_id uuid not null references public.products(id) on delete cascade,
  size text not null check (size in ('XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL')),
  stock_status text not null check (stock_status in ('in', 'low', 'sold')),
  quantity integer check (quantity is null or quantity >= 0),
  primary key (product_id, size)
);

create table if not exists public.product_colorways (
  product_id uuid not null references public.products(id) on delete cascade,
  colorway_id text not null,
  primary key (product_id, colorway_id)
);

create index if not exists products_status_sort_idx on public.products(status, sort_order, created_at);
create index if not exists products_featured_idx on public.products(is_featured) where status = 'live';

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists products_touch_updated_at on public.products;
create trigger products_touch_updated_at
before update on public.products
for each row execute function public.touch_updated_at();

create or replace function public.is_catalog_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_profiles
    where user_id = auth.uid()
      and role in ('owner', 'catalog_admin')
  );
$$;

alter table public.admin_profiles enable row level security;
alter table public.products enable row level security;
alter table public.product_size_stock enable row level security;
alter table public.product_colorways enable row level security;

drop policy if exists "Admins read profiles" on public.admin_profiles;
create policy "Admins read profiles"
on public.admin_profiles for select
to authenticated
using (public.is_catalog_admin());

drop policy if exists "Public read live products" on public.products;
create policy "Public read live products"
on public.products for select
to anon, authenticated
using (status = 'live' or public.is_catalog_admin());

drop policy if exists "Admins insert products" on public.products;
create policy "Admins insert products"
on public.products for insert
to authenticated
with check (public.is_catalog_admin());

drop policy if exists "Admins update products" on public.products;
create policy "Admins update products"
on public.products for update
to authenticated
using (public.is_catalog_admin())
with check (public.is_catalog_admin());

drop policy if exists "Admins delete products" on public.products;
create policy "Admins delete products"
on public.products for delete
to authenticated
using (public.is_catalog_admin());

drop policy if exists "Public read live product size stock" on public.product_size_stock;
create policy "Public read live product size stock"
on public.product_size_stock for select
to anon, authenticated
using (
  exists (
    select 1 from public.products
    where products.id = product_size_stock.product_id
      and (products.status = 'live' or public.is_catalog_admin())
  )
);

drop policy if exists "Admins write product size stock" on public.product_size_stock;
create policy "Admins write product size stock"
on public.product_size_stock for all
to authenticated
using (public.is_catalog_admin())
with check (public.is_catalog_admin());

drop policy if exists "Public read live product colorways" on public.product_colorways;
create policy "Public read live product colorways"
on public.product_colorways for select
to anon, authenticated
using (
  exists (
    select 1 from public.products
    where products.id = product_colorways.product_id
      and (products.status = 'live' or public.is_catalog_admin())
  )
);

drop policy if exists "Admins write product colorways" on public.product_colorways;
create policy "Admins write product colorways"
on public.product_colorways for all
to authenticated
using (public.is_catalog_admin())
with check (public.is_catalog_admin());

insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

drop policy if exists "Public read product images" on storage.objects;
create policy "Public read product images"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'product-images');

drop policy if exists "Admins manage product images" on storage.objects;
create policy "Admins manage product images"
on storage.objects for all
to authenticated
using (bucket_id = 'product-images' and public.is_catalog_admin())
with check (bucket_id = 'product-images' and public.is_catalog_admin());
```

- [ ] **Step 2: Verify SQL is syntactically reviewable**

Run:

```bash
rg -n "create table|create policy|storage.buckets|is_catalog_admin" supabase/migrations/202606200001_catalog_admin.sql
```

Expected: output includes all four tables/policies and storage setup.

---

### Task 3: Catalog Constants And Mapper

**Files:**
- Create: `src/services/catalog/constants.js`
- Create: `src/services/catalog/catalogMapper.js`
- Create: `src/services/catalog/catalogMapper.test.js`

- [ ] **Step 1: Write failing mapper tests**

Create `src/services/catalog/catalogMapper.test.js`:

```js
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
```

- [ ] **Step 2: Run mapper tests and verify RED**

Run:

```bash
npm test -- src/services/catalog/catalogMapper.test.js
```

Expected: FAIL because `catalogMapper.js` does not exist.

- [ ] **Step 3: Implement constants and mapper**

Create `src/services/catalog/constants.js`:

```js
export const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']

export const categories = ['Outerwear', 'Knitwear', 'Sets', 'Vests', 'Harness', 'Accessory']

export const colorways = {
  bone: { name: 'Bone', hex: '#F2E2BC' },
  oat: { name: 'Oat', hex: '#DCC692' },
  caramel: { name: 'Caramel', hex: '#A87544' },
  terracotta: { name: 'Terracotta', hex: '#B14A2C' },
  rust: { name: 'Rust', hex: '#8C4520' },
  cognac: { name: 'Cognac', hex: '#5A2E1F' },
  ink: { name: 'Ink', hex: '#1F1812' },
  ivy: { name: 'Ivy', hex: '#3F5240' },
  ash: { name: 'Ash', hex: '#6F6862' },
  blush: { name: 'Blush', hex: '#E5B6A0' },
  pearl: { name: 'Pearl', hex: '#E8DFC8' },
  ember: { name: 'Ember', hex: '#C9682F' }
}

export const worlds = [
  { id: 'mogul', name: 'The Mogul' },
  { id: 'boombox', name: 'Boombox Block' },
  { id: 'softlife', name: 'Soft Life' },
  { id: 'courtside', name: 'Court Side' },
  { id: 'paparazzi', name: 'Paparazzi' },
  { id: 'heir', name: 'Cottage Heir' }
]

export const sortOptions = [
  { id: 'curator', label: "Curator's pick" },
  { id: 'newest', label: 'Newest first' },
  { id: 'price-asc', label: 'Price - low to high' },
  { id: 'price-desc', label: 'Price - high to low' },
  { id: 'rare', label: 'Most exclusive' }
]
```

Create `src/services/catalog/catalogMapper.js`:

```js
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
```

- [ ] **Step 4: Run mapper tests and verify GREEN**

Run:

```bash
npm test -- src/services/catalog/catalogMapper.test.js
```

Expected: PASS.

---

### Task 4: Supabase Client, Repository, And Catalog Composable

**Files:**
- Create: `src/lib/supabaseClient.js`
- Create: `src/services/catalog/catalogRepository.js`
- Create: `src/services/catalog/catalogRepository.test.js`
- Create: `src/composables/useCatalog.js`

- [ ] **Step 1: Write failing repository tests**

Create `src/services/catalog/catalogRepository.test.js`:

```js
import { describe, expect, it, vi } from 'vitest'
import { createCatalogRepository } from './catalogRepository.js'

const staticProducts = [
  { id: 'fallback-a', name: 'Fallback A', isFeatured: true, sortOrder: 2 },
  { id: 'fallback-b', name: 'Fallback B', isFeatured: false, sortOrder: 1 }
]

describe('catalogRepository', () => {
  it('returns static products when no Supabase client is available', async () => {
    const repo = createCatalogRepository({ supabase: null, staticProducts })
    await expect(repo.fetchPublishedProducts()).resolves.toEqual(staticProducts)
  })

  it('falls back to static products when Supabase fetch fails', async () => {
    const supabase = {
      from: vi.fn(() => ({
        select: vi.fn(() => ({
          eq: vi.fn(() => ({
            order: vi.fn(() => Promise.resolve({ data: null, error: new Error('offline') }))
          }))
        }))
      }))
    }
    const repo = createCatalogRepository({ supabase, staticProducts })
    await expect(repo.fetchPublishedProducts()).resolves.toEqual(staticProducts)
  })

  it('uses featured products first and fills remaining latest drop slots', async () => {
    const repo = createCatalogRepository({
      supabase: null,
      staticProducts: [
        { id: 'a', isFeatured: false, sortOrder: 1 },
        { id: 'b', isFeatured: true, sortOrder: 2 },
        { id: 'c', isFeatured: false, sortOrder: 3 }
      ]
    })
    await expect(repo.fetchLatestDropProducts(2)).resolves.toEqual([
      { id: 'b', isFeatured: true, sortOrder: 2 },
      { id: 'a', isFeatured: false, sortOrder: 1 }
    ])
  })
})
```

- [ ] **Step 2: Run repository tests and verify RED**

Run:

```bash
npm test -- src/services/catalog/catalogRepository.test.js
```

Expected: FAIL because `catalogRepository.js` does not exist.

- [ ] **Step 3: Implement Supabase client**

Create `src/lib/supabaseClient.js`:

```js
import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const hasSupabaseConfig = Boolean(url && anonKey)

export const supabase = hasSupabaseConfig
  ? createClient(url, anonKey)
  : null
```

- [ ] **Step 4: Implement repository**

Create `src/services/catalog/catalogRepository.js`:

```js
import { products as staticProducts } from '../../data/atelier.js'
import { supabase } from '../../lib/supabaseClient.js'
import { mapCatalogProducts } from './catalogMapper.js'

const PRODUCT_SELECT = `
  *,
  product_size_stock(size, stock_status, quantity),
  product_colorways(colorway_id)
`

function sortStatic(list) {
  return [...list].sort((a, b) => ((a.sortOrder || 0) - (b.sortOrder || 0)) || a.name.localeCompare(b.name))
}

export function createCatalogRepository(deps = {}) {
  const client = deps.supabase === undefined ? supabase : deps.supabase
  const fallback = deps.staticProducts || staticProducts

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
    const products = await fetchPublishedProducts()
    const sorted = sortStatic(products)
    const featured = sorted.filter((item) => item.isFeatured)
    const fill = sorted.filter((item) => !item.isFeatured)
    return [...featured, ...fill].slice(0, limit)
  }

  return { fetchPublishedProducts, fetchLatestDropProducts }
}

export const catalogRepository = createCatalogRepository()
```

- [ ] **Step 5: Implement composable**

Create `src/composables/useCatalog.js`:

```js
import { computed, ref } from 'vue'
import { catalogRepository } from '../services/catalog/catalogRepository.js'

const products = ref([])
const latestDropProducts = ref([])
const loading = ref(false)
const error = ref(null)
let loaded = false

export function useCatalog() {
  async function refresh() {
    loading.value = true
    error.value = null
    try {
      const [all, latest] = await Promise.all([
        catalogRepository.fetchPublishedProducts(),
        catalogRepository.fetchLatestDropProducts(4)
      ])
      products.value = all
      latestDropProducts.value = latest
      loaded = true
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  if (!loaded && !loading.value) refresh()

  return {
    products,
    latestDropProducts,
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    refresh
  }
}
```

- [ ] **Step 6: Run repository tests and verify GREEN**

Run:

```bash
npm test -- src/services/catalog/catalogRepository.test.js
```

Expected: PASS.

---

### Task 5: Admin Form Helpers

**Files:**
- Create: `src/admin/adminProductForm.js`
- Create: `src/admin/adminProductForm.test.js`

- [ ] **Step 1: Write failing admin helper tests**

Create `src/admin/adminProductForm.test.js`:

```js
import { describe, expect, it } from 'vitest'
import { createBlankProductForm, productFormToPayload, slugifyProductName, validateProductForm } from './adminProductForm.js'

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
})
```

- [ ] **Step 2: Run admin helper tests and verify RED**

Run:

```bash
npm test -- src/admin/adminProductForm.test.js
```

Expected: FAIL because `adminProductForm.js` does not exist.

- [ ] **Step 3: Implement admin helpers**

Create `src/admin/adminProductForm.js`:

```js
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
```

- [ ] **Step 4: Run admin helper tests and verify GREEN**

Run:

```bash
npm test -- src/admin/adminProductForm.test.js
```

Expected: PASS.

---

### Task 6: Admin Catalog API

**Files:**
- Create: `src/admin/adminCatalogApi.js`

- [ ] **Step 1: Implement admin API wrapper**

Create `src/admin/adminCatalogApi.js`:

```js
import { supabase } from '../lib/supabaseClient.js'
import { productFormToPayload } from './adminProductForm.js'

const PRODUCT_SELECT = `
  *,
  product_size_stock(size, stock_status, quantity),
  product_colorways(colorway_id)
`

function requireSupabase() {
  if (!supabase) throw new Error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.')
  return supabase
}

export async function getSession() {
  const client = requireSupabase()
  const { data, error } = await client.auth.getSession()
  if (error) throw error
  return data.session
}

export async function signInAdmin(email, password) {
  const client = requireSupabase()
  const { data, error } = await client.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data.session
}

export async function signOutAdmin() {
  const client = requireSupabase()
  const { error } = await client.auth.signOut()
  if (error) throw error
}

export async function listAdminProducts() {
  const client = requireSupabase()
  const { data, error } = await client
    .from('products')
    .select(PRODUCT_SELECT)
    .order('updated_at', { ascending: false })
  if (error) throw error
  return data || []
}

export async function saveProductForm(form) {
  const client = requireSupabase()
  const payload = productFormToPayload(form)
  const id = form.id

  const productResult = id
    ? await client.from('products').update(payload.product).eq('id', id).select('id').single()
    : await client.from('products').insert(payload.product).select('id').single()

  if (productResult.error) throw productResult.error

  const productId = productResult.data.id
  await client.from('product_size_stock').delete().eq('product_id', productId)
  await client.from('product_colorways').delete().eq('product_id', productId)

  if (payload.sizeRows.length) {
    const { error } = await client
      .from('product_size_stock')
      .insert(payload.sizeRows.map((row) => ({ ...row, product_id: productId })))
    if (error) throw error
  }

  if (payload.colorRows.length) {
    const { error } = await client
      .from('product_colorways')
      .insert(payload.colorRows.map((row) => ({ ...row, product_id: productId })))
    if (error) throw error
  }

  return productId
}

export async function archiveProduct(productId) {
  const client = requireSupabase()
  const { error } = await client.from('products').update({ status: 'archived' }).eq('id', productId)
  if (error) throw error
}

export async function deleteProduct(productId) {
  const client = requireSupabase()
  const { error } = await client.from('products').delete().eq('id', productId)
  if (error) throw error
}

export async function uploadProductImage(productId, role, file) {
  const client = requireSupabase()
  const ext = file.name.split('.').pop() || 'jpg'
  const path = `products/${productId || 'draft'}/${role}-${Date.now()}.${ext}`
  const { error } = await client.storage.from('product-images').upload(path, file, { upsert: true })
  if (error) throw error
  const { data } = client.storage.from('product-images').getPublicUrl(path)
  return data.publicUrl
}
```

- [ ] **Step 2: Run build to catch module issues**

Run:

```bash
npm run build
```

Expected: build exits 0 after all imports exist.

---

### Task 7: Admin UI Components

**Files:**
- Create: `src/admin/AdminApp.vue`
- Create: `src/admin/AdminLogin.vue`
- Create: `src/admin/AdminProductList.vue`
- Create: `src/admin/AdminProductEditor.vue`
- Create: `src/admin/admin.css`
- Modify: `src/App.vue`

- [ ] **Step 1: Create admin CSS using existing tokens**

Create `src/admin/admin.css` with admin-specific selectors prefixed by `.admin`.

Required primitives:

```css
.admin {
  min-height: 100vh;
  background: var(--bg-soft);
  color: var(--t);
  font-family: var(--f-body);
}

.admin__shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  min-height: 100vh;
}

.admin__rail {
  border-right: 1px solid var(--rule);
  background: var(--bg);
  padding: 1.5rem;
}

.admin__main {
  padding: clamp(1.2rem, 3vw, 2.5rem);
}

.admin__panel {
  border: 1px solid var(--rule);
  background: var(--surface);
  border-radius: 4px;
  box-shadow: var(--shadow-sm);
}

.admin__field {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.admin__input,
.admin__textarea,
.admin__select {
  width: 100%;
  border: 1px solid var(--rule-2);
  background: var(--bg-soft);
  color: var(--t);
  border-radius: 4px;
  padding: 0.75rem 0.85rem;
  font: inherit;
}
```

- [ ] **Step 2: Create admin app auth shell**

Create `AdminApp.vue` with:

```vue
<script setup>
import { onMounted, ref } from 'vue'
import './admin.css'
import { getSession, signOutAdmin } from './adminCatalogApi.js'
import AdminLogin from './AdminLogin.vue'
import AdminProductList from './AdminProductList.vue'
import AdminProductEditor from './AdminProductEditor.vue'

const session = ref(null)
const loading = ref(true)
const view = ref('list')
const editing = ref(null)

onMounted(async () => {
  try {
    session.value = await getSession()
  } catch {
    session.value = null
  } finally {
    loading.value = false
  }
})

function editProduct(product) {
  editing.value = product
  view.value = 'edit'
}

function createProduct() {
  editing.value = null
  view.value = 'edit'
}

async function logout() {
  await signOutAdmin()
  session.value = null
}
</script>
```

Template requirements:

- Loading state.
- `AdminLogin` when no session.
- Shell with rail/header and logout when session exists.
- `AdminProductList` for list view.
- `AdminProductEditor` for edit view.

- [ ] **Step 3: Create login component**

Create `AdminLogin.vue` with:

- Email/password fields.
- Submit calls `signInAdmin`.
- Emits `signed-in`.
- Inline error.

- [ ] **Step 4: Create product list component**

Create `AdminProductList.vue` with:

- Calls `listAdminProducts()` on mount.
- Search, status filter, species filter.
- Dense table.
- Create button emits `create`.
- Edit button emits `edit`.

- [ ] **Step 5: Create product editor component**

Create `AdminProductEditor.vue` with:

- Builds blank form for new product.
- Maps existing product rows to form for edit.
- Slug auto-generation when name changes and slug is empty.
- Sections for identity, commerce, taxonomy, images, colorways, sizes.
- Save draft, publish, archive, delete.
- `uploadProductImage` for primary/hover uploads.
- `validateProductForm` before publish.

- [ ] **Step 6: Wire admin path in App**

Modify `src/App.vue`:

```js
import AdminApp from './admin/AdminApp.vue'

const isAdmin = typeof window !== 'undefined' && window.location.pathname.startsWith('/admin')
```

Template behavior:

- Render `<AdminApp v-if="isAdmin" />`.
- Render existing public storefront tree in `v-else`.
- Do not change public component class names or public component CSS.

---

### Task 8: Public Storefront Catalog Integration

**Files:**
- Modify: `src/components/TheAtelier.vue`
- Modify: `src/components/LatestDrop.vue`
- Modify: `src/data/atelier.js`

- [ ] **Step 1: Re-export catalog constants for compatibility**

In `src/data/atelier.js`, replace local primitive exports with imports/re-exports from `src/services/catalog/constants.js` while leaving `products` static fallback intact:

```js
export { sizes, categories, colorways, worlds, sortOptions } from '../services/catalog/constants.js'
```

- [ ] **Step 2: Update `TheAtelier.vue` script only**

Replace:

```js
import { products, sizes, categories, colorways, worlds, sortOptions } from '../data/atelier.js'
```

With:

```js
import { sizes, categories, colorways, worlds, sortOptions } from '../services/catalog/constants.js'
import { useCatalog } from '../composables/useCatalog.js'
```

Add:

```js
const catalog = useCatalog()
const products = computed(() => catalog.products.value)
```

Keep the existing template and style unchanged.

- [ ] **Step 3: Update `LatestDrop.vue` script only**

Replace static products import with:

```js
import { useCatalog } from '../composables/useCatalog.js'

const catalog = useCatalog()
const products = catalog.latestDropProducts
```

Keep the existing template and style unchanged.

- [ ] **Step 4: Run build**

Run:

```bash
npm run build
```

Expected: build exits 0.

---

### Task 9: Seed SQL Generator

**Files:**
- Create: `scripts/seed-catalog-sql.js`

- [ ] **Step 1: Create seed generator**

Create a Node script that imports `src/data/atelier.js`, converts current fallback products into SQL inserts, and writes output to `supabase/seed-catalog.sql`.

Required behavior:

```js
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
  lines.push(`insert into public.products (id, slug, name, line, description, price_cents, edition, edition_max, badge, status, species, category, vibe, material, drop_number, sort_order, is_featured, primary_image_path, hover_image_path, primary_image_alt, hover_image_alt) values (${sql(productId)}, ${sql(product.id)}, ${sql(product.name)}, ${sql(product.line)}, ${sql(product.description)}, ${Math.round(product.price * 100)}, ${sql(product.edition)}, ${product.editionMax || 'null'}, ${sql(product.badge)}, 'live', ${sql(product.species)}, ${sql(product.category)}, ${sql(product.vibe)}, ${sql(product.material)}, ${product.drop || 1}, ${index}, ${index < 4 ? 'true' : 'false'}, ${sql(product.image)}, ${sql(product.altImage)}, ${sql(product.name)}, '') on conflict (slug) do nothing;`)
  for (const size of product.sizes || []) {
    lines.push(`insert into public.product_size_stock (product_id, size, stock_status) values (${sql(productId)}, ${sql(size)}, ${sql(product.sizeStock?.[size] || 'in')}) on conflict (product_id, size) do nothing;`)
  }
  for (const color of product.colors || []) {
    lines.push(`insert into public.product_colorways (product_id, colorway_id) values (${sql(productId)}, ${sql(color)}) on conflict (product_id, colorway_id) do nothing;`)
  }
}

lines.push('commit;')
writeFileSync('supabase/seed-catalog.sql', `${lines.join('\n')}\n`)
```

- [ ] **Step 2: Run seed generator**

Run:

```bash
node scripts/seed-catalog-sql.js
```

Expected: `supabase/seed-catalog.sql` is created.

---

### Task 10: Full Verification

**Files:**
- Verify all modified files.

- [ ] **Step 1: Run focused tests**

Run:

```bash
npm test
```

Expected: all Vitest tests pass.

- [ ] **Step 2: Run production build**

Run:

```bash
npm run build
```

Expected: build exits 0.

- [ ] **Step 3: Run local app**

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Expected: Vite prints a local URL.

- [ ] **Step 4: Manual public storefront check**

Open `/` and verify:

- Header, hero, Atelier, Latest Drop, drawer, filters, and bag retain the existing visual design.
- Products render from fallback data when env vars are not configured.
- No user-facing backend error appears.

- [ ] **Step 5: Manual admin check**

Open `/admin` and verify:

- If env vars are missing, admin shows setup/login error cleanly.
- With Supabase env vars, login form appears and can authenticate an invited admin.
- Product list loads.
- Draft save works.
- Publish validation blocks incomplete products.
- Image upload returns a public URL.

- [ ] **Step 6: Git review**

Run:

```bash
git status --short
git diff -- src package.json supabase scripts .env.example
```

Expected: changes are scoped to catalog/admin implementation and docs, with pre-existing unrelated files left untouched.
