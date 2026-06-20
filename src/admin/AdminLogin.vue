<script setup>
import { ref } from 'vue'
import { hasSupabaseConfig } from '../lib/supabaseClient.js'
import { signInAdmin } from './adminCatalogApi.js'
import { isLocalAdminEnabled } from '../services/catalog/localCatalogStore.js'

const emit = defineEmits(['signed-in'])

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

async function submit() {
  if (!hasSupabaseConfig && !isLocalAdminEnabled) return
  loading.value = true
  error.value = ''
  try {
    const session = await signInAdmin(email.value, password.value)
    emit('signed-in', session)
  } catch (err) {
    error.value = err.message || 'Unable to sign in.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="admin admin--login">
    <section class="admin-login admin__panel">
      <div class="admin-login__mark" aria-hidden="true">u</div>
      <span class="admin__eyebrow">Catalog Studio</span>
      <h1>Back office</h1>
      <p>Manage listings, images, prices, stock, and publishing for Urban Puppy Haven.</p>

      <p v-if="!hasSupabaseConfig && !isLocalAdminEnabled" class="admin__notice">
        Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment.
      </p>

      <p v-else-if="isLocalAdminEnabled && !hasSupabaseConfig" class="admin__notice">
        Local development admin is enabled. Catalog edits are saved in this browser until Supabase is connected.
      </p>

      <form v-if="hasSupabaseConfig || isLocalAdminEnabled" class="admin-login__form" @submit.prevent="submit">
        <label class="admin__field">
          <span>Email or username</span>
          <input v-model="email" class="admin__input" type="text" autocomplete="username" required />
        </label>

        <label class="admin__field">
          <span>Password</span>
          <input v-model="password" class="admin__input" type="password" autocomplete="current-password" required />
        </label>

        <p v-if="error" class="admin__error">{{ error }}</p>

        <button class="admin__button admin__button--primary" type="submit" :disabled="loading">
          {{ loading ? 'Signing in...' : 'Sign in' }}
        </button>
      </form>
    </section>
  </main>
</template>
