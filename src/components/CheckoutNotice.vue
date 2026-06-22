<script setup>
import { onMounted, ref } from 'vue'
import { useBag } from '../composables/useBag.js'

const bag = useBag()
const status = ref('')
const order = ref('')

function close() {
  status.value = ''
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const checkout = params.get('checkout')
  if (checkout !== 'success' && checkout !== 'cancelled') return

  status.value = checkout
  order.value = params.get('order') || ''
  if (checkout === 'success') bag.clear()

  params.delete('checkout')
  params.delete('order')
  const query = params.toString()
  const next = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`
  window.history.replaceState({}, '', next)
})
</script>

<template>
  <transition name="checkout-note">
    <aside v-if="status" class="checkout-note" role="status">
      <div>
        <span>{{ status === 'success' ? 'Order received' : 'Checkout paused' }}</span>
        <p v-if="status === 'success'">
          {{ order ? `${order} is in the studio queue.` : 'Your order is in the studio queue.' }}
        </p>
        <p v-else>Your bag is still saved for later.</p>
      </div>
      <button type="button" aria-label="Dismiss checkout notice" @click="close">Close</button>
    </aside>
  </transition>
</template>

<style scoped>
.checkout-note {
  position: fixed;
  right: clamp(1rem, 3vw, 1.6rem);
  bottom: clamp(1rem, 3vw, 1.6rem);
  z-index: 680;
  width: min(380px, calc(100vw - 2rem));
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--rule);
  border-radius: 4px;
  background: var(--surface);
  box-shadow: var(--shadow);
  color: var(--t);
}

.checkout-note span {
  display: block;
  margin-bottom: 0.35rem;
  font-family: var(--f-mono);
  font-size: 0.64rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--gold-2);
}

.checkout-note p {
  color: var(--t-2);
  line-height: 1.45;
}

.checkout-note button {
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}

.checkout-note-enter-active,
.checkout-note-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}

.checkout-note-enter-from,
.checkout-note-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
