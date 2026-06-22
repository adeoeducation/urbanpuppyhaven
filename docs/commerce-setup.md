# Commerce Setup

Urban Puppy Haven now supports a no-login shopping flow:

- Browser creates a random `uph-guest-id`; IP addresses are not used.
- Bag lines are saved locally and synced to Supabase through guest cart RPCs.
- Shoppers add a shipping address in the bag before Stripe Checkout opens.
- Checkout is created by the `create-checkout-session` Supabase Edge Function.
- Stripe webhooks update `orders` and clear paid guest carts.
- Admin users can view orders from `/admin` under `Orders`.

## Required Production Configuration

Apply migrations:

```bash
supabase db push
```

Deploy functions:

```bash
supabase functions deploy create-checkout-session
supabase functions deploy stripe-webhook
```

Set Edge Function secrets:

```bash
supabase secrets set STRIPE_SECRET_KEY=sk_live_xxx
supabase secrets set STRIPE_WEBHOOK_SIGNING_SECRET=whsec_xxx
supabase secrets set SITE_URL=https://your-domain.com
supabase secrets set STRIPE_ALLOWED_COUNTRIES=US,CA
```

The browser still needs:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Stripe Webhook

Create a Stripe webhook endpoint pointing to:

```text
https://your-project.supabase.co/functions/v1/stripe-webhook
```

Subscribe to:

- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`
- `checkout.session.async_payment_failed`
- `checkout.session.expired`

Copy the webhook signing secret into `STRIPE_WEBHOOK_SIGNING_SECRET`.
