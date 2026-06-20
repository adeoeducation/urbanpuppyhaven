# Production Catalog Admin Design

## Goal

Build a production-ready back office for Urban Puppy Haven that lets authorized admins manage shop listings while keeping the existing public storefront UI unchanged.

## Current State

The site is a Vite and Vue 3 single page app. The public shop already has two catalog surfaces:

- `src/components/TheAtelier.vue`: full shop grid with filters, sorting, product drawer, size/color selection, and local bag state.
- `src/components/LatestDrop.vue`: featured drop cards near the top of the page.

Both surfaces currently read static JavaScript arrays:

- `src/data/atelier.js`: full shop catalog.
- `src/data/products.js`: latest drop cards.

The bag is browser-local only through `src/composables/useBag.js`. There is no backend, login, image upload, persistent product database, checkout, order management, or admin surface.

## Non-Negotiables

- Do not redesign or visually alter the existing public storefront.
- Keep public shop layout, animation, styling, filtering, drawer behavior, and bag behavior intact.
- New admin screens must use the same Urban Puppy Haven design language: refined atelier editorial style, restrained controls, small-radius panels, mono metadata, warm luxury accents, and dense back-office ergonomics.
- Use a production backend, not local-only browser storage.
- Connect the frontend shop to backend-managed product data.

## Recommended Backend

Use Supabase for:

- Admin authentication.
- Postgres product catalog data.
- Product image storage.
- Row-level security.
- Public read access for published products only.
- Admin-only create, update, delete, upload, and publish controls.

This matches the existing frontend-only app well because it avoids building and hosting a custom API server before the business needs one.

## Scope

### In Scope

- Admin login and logout.
- Private `/admin` area.
- Product list with search, status filters, and quick status visibility.
- Create product.
- Edit product.
- Delete/archive product.
- Publish and unpublish product.
- Upload primary and hover images.
- Manage product name, slug, tagline, description, price, badge, edition label, edition max, material, category, vibe/world, species, drop number, sort order, featured/drop flags, colorways, sizes, and size stock.
- Connect public shop to Supabase product data.
- Keep the static catalog as a fallback so the public shop does not go blank if Supabase env vars are missing or the network fails.
- SQL migration file for Supabase schema and RLS policies.
- Seed script or seed SQL for the current hardcoded catalog.
- Focused tests for product mapping, fallback behavior, and admin form helpers.

### Out of Scope For This First Build

- Payment checkout.
- Orders.
- Shipping/tax calculation.
- Customer accounts.
- Discount codes.
- Inventory reservation at checkout time.
- Multi-admin audit log.

The schema should leave room for orders later, but this first build is catalog administration and storefront connection.

## Route Design

The app stays a single Vue app without adding a full router unless implementation proves it necessary.

- `/`: existing storefront, unchanged.
- `/admin`: admin shell.

`src/App.vue` can choose between storefront and admin based on `window.location.pathname.startsWith('/admin')`. When not in admin mode, it renders the existing storefront tree exactly as today.

The admin shell can manage internal views through local reactive state:

- Dashboard/list view.
- Product editor for new product.
- Product editor for existing product.

This keeps dependencies light and avoids route churn in the current project.

## Data Model

### `admin_profiles`

Stores which authenticated Supabase users are allowed to manage the catalog.

Fields:

- `user_id uuid primary key references auth.users(id)`
- `email text not null`
- `role text not null check role in ('owner', 'catalog_admin')`
- `created_at timestamptz not null default now()`

### `products`

Primary product listing table.

Fields:

- `id uuid primary key default gen_random_uuid()`
- `slug text unique not null`
- `name text not null`
- `line text not null`
- `description text not null`
- `price_cents integer not null check price_cents >= 0`
- `edition text`
- `edition_max integer check edition_max is null or edition_max > 0`
- `badge text`
- `status text not null check status in ('draft', 'live', 'archived') default 'draft'`
- `species text not null check species in ('dog', 'cat', 'both')`
- `category text not null`
- `vibe text not null`
- `material text`
- `drop_number integer not null default 1`
- `sort_order integer not null default 0`
- `is_featured boolean not null default false`
- `primary_image_path text`
- `hover_image_path text`
- `primary_image_alt text`
- `hover_image_alt text`
- `created_at timestamptz not null default now()`
- `updated_at timestamptz not null default now()`

### `product_size_stock`

Per-size stock state used by the existing frontend drawer and cards.

Fields:

- `product_id uuid references products(id) on delete cascade`
- `size text not null check size in ('XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL')`
- `stock_status text not null check stock_status in ('in', 'low', 'sold')`
- `quantity integer check quantity is null or quantity >= 0`
- Primary key: `(product_id, size)`

### `product_colorways`

Colorway membership for each product.

Fields:

- `product_id uuid references products(id) on delete cascade`
- `colorway_id text not null`
- Primary key: `(product_id, colorway_id)`

The colorway dictionary can remain in app constants for now because it is brand taxonomy, not merchant-entered content. A later version can promote it to a table.

## Storage Model

Use a Supabase Storage bucket named `product-images`.

Path convention:

- `products/{product_id}/primary-{timestamp}.{ext}`
- `products/{product_id}/hover-{timestamp}.{ext}`

Public storefront image URLs are generated from storage paths. If a product still uses an external URL during migration, the catalog mapper should support that too.

## Security Model

Supabase Auth controls identity.

RLS policies:

- Anyone can read `products` where `status = 'live'`.
- Anyone can read size stock and colorways for live products.
- Only users in `admin_profiles` can read draft/archived products.
- Only users in `admin_profiles` can insert, update, or delete catalog rows.
- Only users in `admin_profiles` can upload/update product images.

The frontend anon key is safe to expose because RLS enforces access.

## Frontend Integration

Create a catalog service layer instead of importing Supabase directly inside visual components.

Recommended files:

- `src/lib/supabaseClient.js`: initializes Supabase only when env vars are present.
- `src/services/catalog/constants.js`: shared sizes, categories, worlds, colorways, sort options.
- `src/services/catalog/catalogMapper.js`: maps database rows into the exact product object shape used by `TheAtelier.vue` and `LatestDrop.vue`.
- `src/services/catalog/catalogRepository.js`: fetches published products and featured products, with static fallback.
- `src/composables/useCatalog.js`: exposes loading, error, products, latestDropProducts, and refresh.

`TheAtelier.vue` should continue to render the same product card UI. It should replace the static import with `useCatalog()` data and preserve existing filtering/sorting logic.

`LatestDrop.vue` should use the same catalog source and render featured products. If no featured products exist, use the first live products by sort order.

## Admin UX

### Admin Shell

The admin shell should feel like the storefront's back room, not a generic dashboard.

Core layout:

- Fixed/top compact admin header with brand seal, "Catalog Studio", auth status, and logout.
- Left rail or compact tab strip for product views.
- Main content with dense tables and editor panels.
- No marketing hero sections.
- No nested decorative cards.
- Small border radii, restrained borders, existing typography tokens, warm accent use.

### Login

Simple centered login panel:

- Email.
- Password.
- Submit.
- Error state.

No public sign-up. Admin users are invited/created in Supabase.

### Product List

Product list controls:

- Search by name, slug, category, badge.
- Filter by status: all, live, draft, archived.
- Filter by species.
- Button to create a product.

Rows show:

- Thumbnail.
- Name and slug.
- Price.
- Status.
- Category.
- Vibe/world.
- Species.
- Sizes summary.
- Featured flag.
- Updated date.
- Edit action.

### Product Editor

Editor sections:

- Identity: name, slug, line, description.
- Commerce: price, badge, edition, edition max, status, featured, drop number, sort order.
- Taxonomy: species, category, vibe/world, material.
- Images: primary image upload, hover image upload, alt text.
- Colorways: swatch multi-select.
- Sizes and stock: size toggles plus stock status per enabled size.
- Danger area: archive/delete.

Validation:

- Name, slug, line, description, price, species, category, vibe, at least one image, at least one size, and at least one colorway are required before publishing.
- Drafts can be saved with incomplete fields.
- Price is stored as cents and displayed as dollars.
- Slugs are lowercase URL-safe strings.

## Error Handling

Public storefront:

- If Supabase env vars are missing, use static catalog.
- If fetch fails, use static catalog and keep the shop usable.
- Log a concise console warning for developers.
- Do not show backend errors on the public storefront unless no products can be rendered.

Admin:

- Missing Supabase env vars shows a setup error.
- Auth failures show inline error text.
- Save failures keep form state intact.
- Upload failures do not save broken image references.
- Delete/archive requires confirmation inside the admin UI.

## Testing Strategy

Add Vitest for focused unit coverage.

Test targets:

- Catalog mapper converts Supabase rows into the existing product shape.
- Price cents map to display dollars.
- Size stock rows map to `sizeStock`.
- Colorway rows map to `colors`.
- Static fallback is used when Supabase is unavailable.
- Admin validation blocks publishing incomplete products but permits draft saves.
- Slug helper normalizes product names predictably.

Manual verification:

- Public homepage still visually matches current storefront.
- Product filters and drawer still work.
- Bag still works.
- Admin login works.
- Product create/edit/upload/publish/delete flows work against Supabase.
- Public shop reflects newly published products.
- Draft/archived products do not appear publicly.

## Migration Plan

1. Add Supabase dependency and env example.
2. Add SQL migration for tables, storage bucket notes, and RLS policies.
3. Add catalog constants and mapper.
4. Add catalog repository with static fallback.
5. Connect `TheAtelier.vue` and `LatestDrop.vue` to catalog composable without changing public UI.
6. Build admin auth shell.
7. Build product list.
8. Build product editor.
9. Add image upload.
10. Add seed script/SQL from current hardcoded catalog.
11. Run tests and production build.

## Acceptance Criteria

- Existing storefront renders with the same UI when visiting `/`.
- Existing shop interactions still work.
- `/admin` is private and requires Supabase login.
- Admin users can create, edit, publish, unpublish, archive/delete, price, describe, categorize, and upload images for products.
- Published products appear on the storefront without editing source code.
- Draft and archived products do not appear on the storefront.
- Product image uploads are stored in Supabase Storage.
- Catalog read failures fall back to static data.
- Tests cover mapping, fallback, validation, and slug helpers.
