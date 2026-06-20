import { computed, ref } from 'vue'
import { products as staticProducts } from '../data/atelier.js'
import { products as staticLatestDropProducts } from '../data/products.js'
import { catalogRepository } from '../services/catalog/catalogRepository.js'

const products = ref(staticProducts)
const latestDropProducts = ref(staticLatestDropProducts)
const loading = ref(false)
const error = ref(null)
let loaded = false

export function useCatalog() {
  async function refresh() {
    loading.value = true
    error.value = null
    try {
      const [all, latest] = await Promise.all([
        catalogRepository.fetchPublishedProducts(),
        catalogRepository.fetchLatestDropProducts(4)
      ])
      products.value = all
      latestDropProducts.value = latest
      loaded = true
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  if (!loaded && !loading.value) refresh()

  return {
    products,
    latestDropProducts,
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    refresh
  }
}
