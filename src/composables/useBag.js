import { computed, ref, watch } from 'vue'
import { cartRepository } from '../services/shop/cartRepository.js'
import {
  CART_KEY,
  GUEST_ID_KEY,
  addCartLine,
  cartSubtotalCents,
  createGuestId,
  formatCents,
  removeCartLine,
  sanitizeCartItems,
  updateCartLineQty
} from '../services/shop/guestCart.js'

function getStorage() {
  return typeof window !== 'undefined' ? window.localStorage : null
}

function loadLocalItems(storage = getStorage()) {
  if (!storage) return []
  try {
    const raw = storage.getItem(CART_KEY)
    return sanitizeCartItems(raw ? JSON.parse(raw) : [])
  } catch {
    return []
  }
}

function writeLocalItems(items, storage = getStorage()) {
  if (!storage) return
  try {
    storage.setItem(CART_KEY, JSON.stringify(sanitizeCartItems(items)))
  } catch {}
}

const storage = getStorage()
const guestId = storage ? createGuestId(storage) : ''
const items = ref(loadLocalItems(storage))
const isOpen = ref(false)
const syncing = ref(false)
const checkoutLoading = ref(false)
const checkoutError = ref('')
const ready = ref(false)

let syncTimer = null
let hydrating = false

const count = computed(() => items.value.reduce((sum, item) => sum + Number(item.qty || 1), 0))
const subtotalCents = computed(() => cartSubtotalCents(items.value))
const subtotal = computed(() => formatCents(subtotalCents.value))

function persist() {
  if (storage && guestId && !storage.getItem(GUEST_ID_KEY)) {
    storage.setItem(GUEST_ID_KEY, guestId)
  }
  writeLocalItems(items.value, storage)
}

async function syncNow() {
  if (!guestId) return []
  syncing.value = true
  try {
    return await cartRepository.saveCart(guestId, items.value)
  } catch (err) {
    console.warn('[cart] Unable to sync guest cart.', err)
    return items.value
  } finally {
    syncing.value = false
  }
}

function scheduleSync() {
  if (!guestId) return
  window.clearTimeout(syncTimer)
  syncTimer = window.setTimeout(syncNow, 350)
}

async function hydrate() {
  if (!guestId || ready.value) return
  hydrating = true
  try {
    const remoteItems = await cartRepository.fetchCart(guestId)
    if (remoteItems.length) {
      items.value = remoteItems
      persist()
    } else if (items.value.length) {
      await syncNow()
    }
  } catch (err) {
    console.warn('[cart] Using local guest cart.', err)
  } finally {
    hydrating = false
    ready.value = true
  }
}

watch(items, () => {
  persist()
  if (!hydrating) scheduleSync()
}, { deep: true })

if (typeof window !== 'undefined') {
  window.setTimeout(hydrate, 0)
}

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

function add(product, opts = {}) {
  items.value = addCartLine(items.value, product, opts)
}

function remove(lineIdOrIndex) {
  if (typeof lineIdOrIndex === 'number') {
    const line = items.value[lineIdOrIndex]
    if (!line) return
    items.value = removeCartLine(items.value, line.lineId)
    return
  }
  items.value = removeCartLine(items.value, lineIdOrIndex)
}

function setQty(lineId, qty) {
  items.value = updateCartLineQty(items.value, lineId, qty)
}

function clear() {
  items.value = []
}

async function checkout() {
  checkoutError.value = ''
  if (!items.value.length) {
    checkoutError.value = 'Your bag is empty.'
    return null
  }

  checkoutLoading.value = true
  try {
    await syncNow()
    const session = await cartRepository.startCheckout(guestId)
    window.location.assign(session.url)
    return session
  } catch (err) {
    checkoutError.value = err.message || 'Checkout is not available right now.'
    return null
  } finally {
    checkoutLoading.value = false
  }
}

export function useBag() {
  return {
    guestId,
    items,
    count,
    subtotal,
    subtotalCents,
    isOpen,
    syncing,
    checkoutLoading,
    checkoutError,
    ready,
    open,
    close,
    add,
    remove,
    setQty,
    clear,
    checkout,
    syncNow,
    hydrate
  }
}
