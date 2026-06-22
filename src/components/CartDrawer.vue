<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useBag } from '../composables/useBag.js'
import { colorways } from '../services/catalog/constants.js'
import { SHIPPING_COUNTRIES } from '../services/shop/shippingAddress.js'

const bag = useBag()

function colorName(color) {
  return colorways[color]?.name || color || 'Colorway'
}

function onKey(event) {
  if (event.key === 'Escape') bag.close()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <transition name="bag">
      <div v-if="bag.isOpen.value" class="bag-drawer" role="dialog" aria-modal="true" aria-label="Shopping bag">
        <button class="bag-drawer__back" type="button" aria-label="Close bag" @click="bag.close"></button>

        <aside class="bag-drawer__pane">
          <header class="bag-drawer__head">
            <div>
              <span class="bag-drawer__eyebrow">Your bag</span>
              <h2>{{ bag.count.value }} {{ bag.count.value === 1 ? 'piece' : 'pieces' }}</h2>
            </div>
            <button class="bag-drawer__close" type="button" aria-label="Close bag" @click="bag.close">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </header>

          <div v-if="bag.items.value.length === 0" class="bag-drawer__empty">
            <p class="bag-drawer__empty-title">No pieces yet.</p>
            <button class="bag-drawer__shop" type="button" @click="bag.close">
              Back to the atelier
            </button>
          </div>

          <div v-else class="bag-drawer__body">
            <ul class="bag-drawer__items">
              <li v-for="item in bag.items.value" :key="item.lineId" class="bag-line">
                <img v-if="item.image" :src="item.image" :alt="item.name" />
                <span v-else class="bag-line__image"></span>

                <div class="bag-line__main">
                  <div class="bag-line__top">
                    <div>
                      <h3>{{ item.name }}</h3>
                      <p>{{ item.size || 'One size' }} / {{ colorName(item.color) }}</p>
                    </div>
                    <strong>${{ (item.priceCents / 100).toFixed(2) }}</strong>
                  </div>

                  <div class="bag-line__actions">
                    <div class="bag-line__qty" aria-label="Quantity">
                      <button type="button" aria-label="Decrease quantity" @click="bag.setQty(item.lineId, item.qty - 1)">-</button>
                      <span>{{ item.qty }}</span>
                      <button type="button" aria-label="Increase quantity" @click="bag.setQty(item.lineId, item.qty + 1)">+</button>
                    </div>
                    <button class="bag-line__remove" type="button" @click="bag.remove(item.lineId)">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            </ul>

            <form class="bag-drawer__foot" @submit.prevent="bag.checkout">
              <div class="bag-drawer__total">
                <span>Subtotal</span>
                <strong>${{ bag.subtotal.value }}</strong>
              </div>

              <section class="bag-drawer__shipping" aria-label="Delivery address">
                <div class="bag-drawer__section-head">
                  <span>Delivery address</span>
                  <small>Required before payment</small>
                </div>

                <label class="bag-drawer__field">
                  <span>Full name</span>
                  <input
                    v-model="bag.shippingAddress.value.name"
                    autocomplete="shipping name"
                    :aria-invalid="Boolean(bag.shippingErrors.value.name)"
                  />
                  <small v-if="bag.shippingErrors.value.name">{{ bag.shippingErrors.value.name }}</small>
                </label>

                <label class="bag-drawer__field">
                  <span>Email</span>
                  <input
                    v-model="bag.shippingAddress.value.email"
                    type="email"
                    autocomplete="email"
                    :aria-invalid="Boolean(bag.shippingErrors.value.email)"
                  />
                  <small v-if="bag.shippingErrors.value.email">{{ bag.shippingErrors.value.email }}</small>
                </label>

                <label class="bag-drawer__field">
                  <span>Phone</span>
                  <input v-model="bag.shippingAddress.value.phone" autocomplete="tel" />
                </label>

                <label class="bag-drawer__field">
                  <span>Street address</span>
                  <input
                    v-model="bag.shippingAddress.value.line1"
                    autocomplete="shipping address-line1"
                    :aria-invalid="Boolean(bag.shippingErrors.value.line1)"
                  />
                  <small v-if="bag.shippingErrors.value.line1">{{ bag.shippingErrors.value.line1 }}</small>
                </label>

                <label class="bag-drawer__field">
                  <span>Apartment, suite, etc.</span>
                  <input v-model="bag.shippingAddress.value.line2" autocomplete="shipping address-line2" />
                </label>

                <div class="bag-drawer__field-grid">
                  <label class="bag-drawer__field">
                    <span>City</span>
                    <input
                      v-model="bag.shippingAddress.value.city"
                      autocomplete="shipping address-level2"
                      :aria-invalid="Boolean(bag.shippingErrors.value.city)"
                    />
                    <small v-if="bag.shippingErrors.value.city">{{ bag.shippingErrors.value.city }}</small>
                  </label>

                  <label class="bag-drawer__field">
                    <span>State</span>
                    <input
                      v-model="bag.shippingAddress.value.state"
                      autocomplete="shipping address-level1"
                      :aria-invalid="Boolean(bag.shippingErrors.value.state)"
                    />
                    <small v-if="bag.shippingErrors.value.state">{{ bag.shippingErrors.value.state }}</small>
                  </label>
                </div>

                <div class="bag-drawer__field-grid">
                  <label class="bag-drawer__field">
                    <span>ZIP / Postal</span>
                    <input
                      v-model="bag.shippingAddress.value.postalCode"
                      autocomplete="shipping postal-code"
                      :aria-invalid="Boolean(bag.shippingErrors.value.postalCode)"
                    />
                    <small v-if="bag.shippingErrors.value.postalCode">{{ bag.shippingErrors.value.postalCode }}</small>
                  </label>

                  <label class="bag-drawer__field">
                    <span>Country</span>
                    <select
                      v-model="bag.shippingAddress.value.country"
                      autocomplete="shipping country"
                      :aria-invalid="Boolean(bag.shippingErrors.value.country)"
                    >
                      <option v-for="country in SHIPPING_COUNTRIES" :key="country.code" :value="country.code">
                        {{ country.name }}
                      </option>
                    </select>
                    <small v-if="bag.shippingErrors.value.country">{{ bag.shippingErrors.value.country }}</small>
                  </label>
                </div>
              </section>

              <p v-if="bag.checkoutError.value" class="bag-drawer__error">{{ bag.checkoutError.value }}</p>

              <button
                class="bag-drawer__checkout"
                type="submit"
                :disabled="bag.checkoutLoading.value"
              >
                {{ bag.checkoutLoading.value ? 'Opening Stripe...' : bag.shippingReady.value ? 'Checkout with Stripe' : 'Add shipping address' }}
              </button>

              <p class="bag-drawer__fine">Payment opens in Stripe after your delivery address is saved.</p>
            </form>
          </div>
        </aside>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.bag-drawer {
  position: fixed;
  inset: 0;
  z-index: 700;
  display: flex;
  justify-content: flex-end;
  font-family: var(--f-body);
  color: var(--t);
}

.bag-drawer__back {
  position: absolute;
  inset: 0;
  background: color-mix(in oklab, var(--ink, #0B0907) 48%, transparent);
  backdrop-filter: blur(6px);
}

.bag-drawer__pane {
  position: relative;
  z-index: 1;
  width: min(460px, 100vw);
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background: var(--bg-soft);
  border-left: 1px solid var(--rule);
  box-shadow: -40px 0 100px -30px rgba(0, 0, 0, 0.38);
}

.bag-drawer__head {
  min-height: 112px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.4rem;
  border-bottom: 1px solid var(--rule);
}

.bag-drawer__eyebrow {
  display: block;
  margin-bottom: 0.45rem;
  font-family: var(--f-mono);
  font-size: 0.64rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--gold-2);
}

.bag-drawer__head h2 {
  font-family: var(--f-display);
  font-size: clamp(1.8rem, 7vw, 2.4rem);
  font-weight: 600;
  font-variation-settings: var(--fr-editorial);
  line-height: 1;
}

.bag-drawer__close {
  width: 40px;
  height: 40px;
  border: 1px solid var(--rule-2);
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--t);
  transition: background 0.35s, color 0.35s, border-color 0.35s;
}

.bag-drawer__close:hover {
  background: var(--accent);
  color: var(--t-on-accent);
  border-color: transparent;
}

.bag-drawer__empty {
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
}

.bag-drawer__empty-title {
  font-family: var(--f-display);
  font-size: 1.45rem;
  font-style: italic;
  color: var(--t);
}

.bag-drawer__shop,
.bag-drawer__checkout {
  min-height: 48px;
  border-radius: 999px;
  padding: 0.85rem 1.1rem;
  font-family: var(--f-mono);
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.bag-drawer__shop {
  border: 1px solid var(--rule-2);
  color: var(--t);
}

.bag-drawer__body {
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.bag-drawer__items {
  display: flex;
  flex-direction: column;
}

.bag-line {
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 0.9rem;
  padding: 1rem 1.4rem;
  border-bottom: 1px solid var(--rule);
}

.bag-line img,
.bag-line__image {
  width: 84px;
  height: 104px;
  object-fit: cover;
  background: var(--bg-tonal);
  border: 1px solid var(--rule);
  border-radius: 4px;
}

.bag-line__main {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.8rem;
}

.bag-line__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.7rem;
}

.bag-line h3 {
  font-family: var(--f-display);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1;
}

.bag-line p,
.bag-drawer__fine {
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--t-3);
}

.bag-line strong {
  font-family: var(--f-mono);
  font-size: 0.76rem;
  color: var(--accent);
  white-space: nowrap;
}

.bag-line__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
}

.bag-line__qty {
  display: inline-grid;
  grid-template-columns: 32px 34px 32px;
  min-height: 32px;
  border: 1px solid var(--rule-2);
  border-radius: 999px;
  overflow: hidden;
  font-family: var(--f-mono);
  font-size: 0.72rem;
}

.bag-line__qty button,
.bag-line__qty span {
  display: grid;
  place-items: center;
}

.bag-line__qty button:hover {
  background: var(--t);
  color: var(--bg-soft);
}

.bag-line__remove {
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--t-3);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.bag-line__remove:hover {
  color: var(--accent);
}

.bag-drawer__foot {
  display: grid;
  gap: 0.8rem;
  padding: 1.2rem 1.4rem 1.4rem;
  border-top: 1px solid var(--rule);
  background: var(--bg);
}

.bag-drawer__shipping {
  display: grid;
  gap: 0.65rem;
  padding-block: 0.2rem;
}

.bag-drawer__section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.8rem;
  padding-top: 0.25rem;
}

.bag-drawer__section-head span {
  font-family: var(--f-display);
  font-size: 1.1rem;
  font-weight: 600;
}

.bag-drawer__section-head small,
.bag-drawer__field span {
  font-family: var(--f-mono);
  font-size: 0.58rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--t-3);
}

.bag-drawer__field,
.bag-drawer__field-grid {
  display: grid;
  gap: 0.4rem;
}

.bag-drawer__field-grid {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 0.55rem;
}

.bag-drawer__field input,
.bag-drawer__field select {
  width: 100%;
  min-height: 42px;
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 0.7rem 0.75rem;
  background: var(--bg-soft);
  color: var(--t);
  font: 0.86rem var(--f-body);
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
}

.bag-drawer__field input:focus,
.bag-drawer__field select:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 14%, transparent);
}

.bag-drawer__field input[aria-invalid="true"],
.bag-drawer__field select[aria-invalid="true"] {
  border-color: var(--accent);
}

.bag-drawer__field > small {
  color: var(--accent);
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.04em;
}

.bag-drawer__total {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.bag-drawer__total span {
  font-family: var(--f-mono);
  font-size: 0.68rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--gold-2);
}

.bag-drawer__total strong {
  font-family: var(--f-display);
  font-size: 2rem;
  font-weight: 600;
  color: var(--t);
}

.bag-drawer__checkout {
  width: 100%;
  background: var(--t);
  color: var(--bg-soft);
  transition: background 0.35s, color 0.35s, transform 0.35s;
}

.bag-drawer__checkout:hover:not(:disabled) {
  background: var(--accent);
  color: var(--t-on-accent);
  transform: translateY(-1px);
}

.bag-drawer__checkout:disabled {
  opacity: 0.62;
  cursor: wait;
}

.bag-drawer__error {
  border: 1px solid color-mix(in oklab, var(--accent) 50%, transparent);
  border-radius: 4px;
  padding: 0.7rem 0.8rem;
  color: var(--accent);
  background: var(--bg-soft);
}

.bag-drawer__fine {
  text-align: center;
  line-height: 1.5;
}

.bag-enter-active,
.bag-leave-active {
  transition: opacity 0.3s;
}

.bag-enter-active .bag-drawer__pane,
.bag-leave-active .bag-drawer__pane {
  transition: transform 0.42s var(--ease-luxe);
}

.bag-enter-from,
.bag-leave-to {
  opacity: 0;
}

.bag-enter-from .bag-drawer__pane,
.bag-leave-to .bag-drawer__pane {
  transform: translateX(18%);
}

@media (max-width: 520px) {
  .bag-line {
    grid-template-columns: 72px 1fr;
    padding-inline: 1rem;
  }

  .bag-line img,
  .bag-line__image {
    width: 72px;
    height: 92px;
  }

  .bag-drawer__field-grid {
    grid-template-columns: 1fr;
  }
}
</style>
