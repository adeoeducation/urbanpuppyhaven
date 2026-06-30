create table if not exists public.guest_carts (
  id uuid primary key default gen_random_uuid(),
  guest_token text unique not null check (char_length(guest_token) between 24 and 160),
  items jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint guest_carts_items_array check (jsonb_typeof(items) = 'array' and jsonb_array_length(items) <= 100)
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique not null default ('UPH-' || upper(substr(gen_random_uuid()::text, 1, 8))),
  guest_token text not null,
  stripe_checkout_session_id text unique,
  stripe_payment_intent_id text,
  customer_email text,
  customer_name text,
  shipping_details jsonb,
  currency text not null default 'usd',
  subtotal_cents integer not null default 0 check (subtotal_cents >= 0),
  shipping_cents integer not null default 0 check (shipping_cents >= 0),
  total_cents integer not null default 0 check (total_cents >= 0),
  payment_status text not null default 'unpaid' check (payment_status in ('unpaid', 'paid', 'failed', 'refunded')),
  order_status text not null default 'checkout_created' check (order_status in ('checkout_created', 'paid', 'payment_failed', 'fulfilled', 'cancelled', 'refunded')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  product_slug text not null,
  name text not null,
  image_url text,
  size text,
  colorway_id text,
  unit_price_cents integer not null check (unit_price_cents >= 0),
  quantity integer not null check (quantity > 0 and quantity <= 10),
  line_total_cents integer not null check (line_total_cents >= 0),
  created_at timestamptz not null default now()
);

create index if not exists guest_carts_guest_token_idx on public.guest_carts(guest_token);
create index if not exists orders_created_at_idx on public.orders(created_at desc);
create index if not exists orders_checkout_session_idx on public.orders(stripe_checkout_session_id);
create index if not exists order_items_order_idx on public.order_items(order_id);

drop trigger if exists guest_carts_touch_updated_at on public.guest_carts;
create trigger guest_carts_touch_updated_at
before update on public.guest_carts
for each row execute function public.touch_updated_at();

drop trigger if exists orders_touch_updated_at on public.orders;
create trigger orders_touch_updated_at
before update on public.orders
for each row execute function public.touch_updated_at();

alter table public.guest_carts enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

create or replace function public.get_guest_cart(p_guest_token text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_cart public.guest_carts;
begin
  if p_guest_token is null or char_length(p_guest_token) < 24 or char_length(p_guest_token) > 160 then
    raise exception 'Invalid guest cart token.';
  end if;

  insert into public.guest_carts (guest_token)
  values (p_guest_token)
  on conflict (guest_token) do nothing;

  select * into v_cart
  from public.guest_carts
  where guest_token = p_guest_token;

  return jsonb_build_object(
    'guestId', v_cart.guest_token,
    'items', v_cart.items,
    'updatedAt', v_cart.updated_at
  );
end;
$$;

create or replace function public.save_guest_cart(p_guest_token text, p_items jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_items jsonb := coalesce(p_items, '[]'::jsonb);
  v_cart public.guest_carts;
begin
  if p_guest_token is null or char_length(p_guest_token) < 24 or char_length(p_guest_token) > 160 then
    raise exception 'Invalid guest cart token.';
  end if;

  if jsonb_typeof(v_items) <> 'array' or jsonb_array_length(v_items) > 100 then
    raise exception 'Invalid guest cart items.';
  end if;

  insert into public.guest_carts (guest_token, items)
  values (p_guest_token, v_items)
  on conflict (guest_token) do update
    set items = excluded.items,
        updated_at = now()
  returning * into v_cart;

  return jsonb_build_object(
    'guestId', v_cart.guest_token,
    'items', v_cart.items,
    'updatedAt', v_cart.updated_at
  );
end;
$$;

grant execute on function public.get_guest_cart(text) to anon, authenticated;
grant execute on function public.save_guest_cart(text, jsonb) to anon, authenticated;

drop policy if exists "Admins read guest carts" on public.guest_carts;
create policy "Admins read guest carts"
on public.guest_carts for select
to authenticated
using (public.is_catalog_admin());

drop policy if exists "Admins read orders" on public.orders;
create policy "Admins read orders"
on public.orders for select
to authenticated
using (public.is_catalog_admin());

drop policy if exists "Admins update orders" on public.orders;
create policy "Admins update orders"
on public.orders for update
to authenticated
using (public.is_catalog_admin())
with check (public.is_catalog_admin());

drop policy if exists "Admins read order items" on public.order_items;
create policy "Admins read order items"
on public.order_items for select
to authenticated
using (public.is_catalog_admin());
