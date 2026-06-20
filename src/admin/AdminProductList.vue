<script setup>
import { computed, onMounted, ref } from 'vue'
import { listAdminProducts } from './adminCatalogApi.js'

const emit = defineEmits(['create', 'edit'])

const products = ref([])
const loading = ref(true)
const error = ref('')
const search = ref('')
const status = ref('all')
const species = ref('all')

const filteredProducts = computed(() => {
  const term = search.value.trim().toLowerCase()
  return products.value.filter((product) => {
    const matchesSearch = !term || [product.name, product.slug, product.category, product.badge]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(term))
    const matchesStatus = status.value === 'all' || product.status === status.value
    const matchesSpecies = species.value === 'all' || product.species === species.value
    return matchesSearch && matchesStatus && matchesSpecies
  })
})

function price(product) {
  return `$${(Number(product.price_cents || 0) / 100).toFixed(2)}`
}

function sizes(product) {
  return (product.product_size_stock || []).map((item) => item.size).join(', ') || 'No sizes'
}

function image(product) {
  return product.primary_image_path || product.hover_image_path || ''
}

async function load() {
  loading.value = true
  error.value = ''
  try {
    products.value = await listAdminProducts()
  } catch (err) {
    error.value = err.message || 'Unable to load products.'
  } finally {
    loading.value = false
  }
}

onMounted(load)

defineExpose({ load })
</script>

<template>
  <section class="admin-list">
    <div class="admin__section-head">
      <div>
        <span class="admin__eyebrow">Products</span>
        <h2>Catalog floor</h2>
      </div>
      <button class="admin__button admin__button--primary" type="button" @click="emit('create')">
        New product
      </button>
    </div>

    <div class="admin__panel admin-list__controls">
      <label class="admin__field">
        <span>Search</span>
        <input v-model="search" class="admin__input" placeholder="Name, slug, badge, category" />
      </label>

      <label class="admin__field">
        <span>Status</span>
        <select v-model="status" class="admin__select">
          <option value="all">All</option>
          <option value="live">Live</option>
          <option value="draft">Draft</option>
          <option value="archived">Archived</option>
        </select>
      </label>

      <label class="admin__field">
        <span>Species</span>
        <select v-model="species" class="admin__select">
          <option value="all">All</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
          <option value="both">Both</option>
        </select>
      </label>
    </div>

    <p v-if="error" class="admin__error">{{ error }}</p>
    <p v-else-if="loading" class="admin__notice">Loading catalog...</p>

    <div v-else class="admin__panel admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
            <th>Taxonomy</th>
            <th>Sizes</th>
            <th>Updated</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredProducts" :key="product.id">
            <td>
              <div class="admin-product-cell">
                <img v-if="image(product)" :src="image(product)" :alt="product.name" />
                <span v-else class="admin-product-cell__empty"></span>
                <span>
                  <strong>{{ product.name }}</strong>
                  <small>{{ product.slug }}</small>
                </span>
              </div>
            </td>
            <td class="admin__mono">{{ price(product) }}</td>
            <td>
              <span :class="['admin-status', `admin-status--${product.status}`]">{{ product.status }}</span>
            </td>
            <td>{{ product.category }} / {{ product.vibe }} / {{ product.species }}</td>
            <td>{{ sizes(product) }}</td>
            <td class="admin__mono">{{ product.updated_at ? new Date(product.updated_at).toLocaleDateString() : '-' }}</td>
            <td>
              <button class="admin__button admin__button--ghost" type="button" @click="emit('edit', product)">
                Edit
              </button>
            </td>
          </tr>
          <tr v-if="filteredProducts.length === 0">
            <td colspan="7" class="admin-table__empty">No products match these filters.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
