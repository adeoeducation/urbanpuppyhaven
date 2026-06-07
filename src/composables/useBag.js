// Shared bag state. Header reads count; Atelier writes.
// Persists per-tab so a soft reload doesn't drop the cart.

import { ref, computed, watch } from 'vue'

const KEY = 'uph-bag'

function load() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch { return [] }
}

const items = ref(load())

watch(items, (v) => {
  try { window.localStorage.setItem(KEY, JSON.stringify(v)) } catch {}
}, { deep: true })

const count = computed(() => items.value.reduce((s, x) => s + (x.qty || 1), 0))

function add(product, opts = {}) {
  const size = opts.size || (product.sizes && product.sizes[0]) || null
  const color = opts.color || (product.colors && product.colors[0]) || null
  // Merge with an existing identical line.
  const existing = items.value.find(x => x.id === product.id && x.size === size && x.color === color)
  if (existing) {
    existing.qty = (existing.qty || 1) + 1
  } else {
    items.value.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
      qty: 1,
      addedAt: Date.now()
    })
  }
}

function remove(idx) {
  if (idx >= 0 && idx < items.value.length) items.value.splice(idx, 1)
}

function clear() { items.value = [] }

export function useBag() {
  return { items, count, add, remove, clear }
}
