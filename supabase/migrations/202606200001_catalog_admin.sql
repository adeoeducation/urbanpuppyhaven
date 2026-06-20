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
