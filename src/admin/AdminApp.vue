<script setup>
import { onMounted, ref } from 'vue'
import './admin.css'
import { getSession, signOutAdmin } from './adminCatalogApi.js'
import AdminLogin from './AdminLogin.vue'
import AdminProductEditor from './AdminProductEditor.vue'
import AdminProductList from './AdminProductList.vue'
import AdminOrderList from './AdminOrderList.vue'

const session = ref(null)
const loading = ref(true)
const view = ref('list')
const editing = ref(null)
const reloadKey = ref(0)

onMounted(async () => {
  try {
    session.value = await getSession()
  } catch {
    session.value = null
  } finally {
    loading.value = false
  }
})

function editProduct(product) {
  editing.value = product
  view.value = 'edit'
}

function createProduct() {
  editing.value = null
  view.value = 'edit'
}

function returnToList() {
  editing.value = null
  view.value = 'list'
  reloadKey.value += 1
}

function showOrders() {
  editing.value = null
  view.value = 'orders'
}

async function logout() {
  await signOutAdmin()
  session.value = null
}
</script>

<template>
  <div v-if="loading" class="admin admin--loading">
    <p class="admin__notice">Opening catalog studio...</p>
  </div>

  <AdminLogin v-else-if="!session" @signed-in="session = $event" />

  <main v-else class="admin">
    <div class="admin__shell">
      <aside class="admin__rail">
        <a href="/" class="admin__brand" aria-label="Urban Puppy Haven storefront">
          <span class="admin__seal">u</span>
          <span>
            <strong>Urban Puppy Haven</strong>
            <small>Catalog Studio</small>
          </span>
        </a>

        <nav class="admin__nav" aria-label="Admin">
          <button :class="{ 'is-on': view === 'list' }" type="button" @click="returnToList">Products</button>
          <button :class="{ 'is-on': view === 'orders' }" type="button" @click="showOrders">Orders</button>
          <button type="button" @click="createProduct">New listing</button>
        </nav>

        <button class="admin__button admin__button--ghost admin__logout" type="button" @click="logout">
          Sign out
        </button>
      </aside>

      <div class="admin__main">
        <AdminProductList
          v-if="view === 'list'"
          :key="reloadKey"
          @create="createProduct"
          @edit="editProduct"
        />
        <AdminProductEditor
          v-else-if="view === 'edit'"
          :product="editing"
          @cancel="returnToList"
          @saved="returnToList"
        />
        <AdminOrderList v-else />
      </div>
    </div>
  </main>
</template>
