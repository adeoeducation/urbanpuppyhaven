<script setup>
import { computed, onMounted, ref } from 'vue'
import { listAdminOrders } from './adminCatalogApi.js'
import { formatOrderMoney, orderCustomer, orderItemSummary, orderShippingAddress } from './adminOrderFormat.js'

const orders = ref([])
const loading = ref(true)
const error = ref('')
const search = ref('')
const status = ref('all')

const filteredOrders = computed(() => {
  const term = search.value.trim().toLowerCase()
  return orders.value.filter((order) => {
    const matchesSearch = !term || [
      order.order_number,
      order.customer_email,
      order.customer_name,
      orderItemSummary(order)
    ].filter(Boolean).some((value) => value.toLowerCase().includes(term))
    const matchesStatus = status.value === 'all' || order.order_status === status.value || order.payment_status === status.value
    return matchesSearch && matchesStatus
  })
})

async function load() {
  loading.value = true
  error.value = ''
  try {
    orders.value = await listAdminOrders()
  } catch (err) {
    error.value = err.message || 'Unable to load orders.'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>

<template>
  <section class="admin-list">
    <div class="admin__section-head">
      <div>
        <span class="admin__eyebrow">Orders</span>
        <h2>Checkout ledger</h2>
      </div>
    </div>

    <div class="admin__panel admin-list__controls admin-list__controls--orders">
      <label class="admin__field">
        <span>Search</span>
        <input v-model="search" class="admin__input" placeholder="Order, customer, product" />
      </label>

      <label class="admin__field">
        <span>Status</span>
        <select v-model="status" class="admin__select">
          <option value="all">All</option>
          <option value="paid">Paid</option>
          <option value="checkout_created">Checkout created</option>
          <option value="payment_failed">Payment failed</option>
          <option value="fulfilled">Fulfilled</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </label>
    </div>

    <p v-if="error" class="admin__error">{{ error }}</p>
    <p v-else-if="loading" class="admin__notice">Loading orders...</p>

    <div v-else class="admin__panel admin-table-wrap">
      <table class="admin-table admin-table--orders">
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in filteredOrders" :key="order.id">
            <td>
              <strong>{{ order.order_number }}</strong>
              <small class="admin-table__sub">{{ order.stripe_checkout_session_id || 'No Stripe session yet' }}</small>
            </td>
            <td>{{ orderCustomer(order) }}</td>
            <td>
              {{ orderItemSummary(order) || 'No items' }}
              <small class="admin-table__sub">{{ orderShippingAddress(order) }}</small>
            </td>
            <td class="admin__mono">{{ formatOrderMoney(order) }}</td>
            <td>
              <span :class="['admin-status', `admin-status--${order.payment_status}`]">{{ order.payment_status }}</span>
            </td>
            <td>
              <span :class="['admin-status', `admin-status--${order.order_status}`]">{{ order.order_status }}</span>
            </td>
            <td class="admin__mono">{{ order.created_at ? new Date(order.created_at).toLocaleString() : '-' }}</td>
          </tr>
          <tr v-if="filteredOrders.length === 0">
            <td colspan="7" class="admin-table__empty">No orders match these filters.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
