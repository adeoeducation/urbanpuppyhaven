<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { categories, colorways, sizes, worlds } from '../services/catalog/constants.js'
import { archiveProduct, deleteProduct, saveProductForm, uploadProductImage } from './adminCatalogApi.js'
import { createBlankProductForm, productRowToForm, slugifyProductName, validateProductForm } from './adminProductForm.js'

const props = defineProps({
  product: { type: Object, default: null }
})

const emit = defineEmits(['cancel', 'saved'])

const form = reactive(props.product ? productRowToForm(props.product) : createBlankProductForm())
const saving = ref(false)
const uploading = ref('')
const errors = ref([])
const notice = ref('')

const title = computed(() => props.product ? `Edit ${props.product.name}` : 'New product')

watch(() => props.product, (product) => {
  Object.assign(form, product ? productRowToForm(product) : createBlankProductForm())
  errors.value = []
  notice.value = ''
})

watch(() => form.name, (name) => {
  if (!form.slug) form.slug = slugifyProductName(name)
})

function toggleArray(list, value) {
  const index = list.indexOf(value)
  if (index >= 0) list.splice(index, 1)
  else list.push(value)
}

async function save(intent) {
  errors.value = validateProductForm(form, { intent })
  if (errors.value.length) return

  saving.value = true
  notice.value = ''
  const previousStatus = form.status
  if (intent === 'publish') form.status = 'live'
  if (intent === 'draft') form.status = 'draft'

  try {
    await saveProductForm(form)
    notice.value = intent === 'publish' ? 'Published.' : 'Draft saved.'
    emit('saved')
  } catch (err) {
    form.status = previousStatus
    errors.value = [err.message || 'Unable to save product.']
  } finally {
    saving.value = false
  }
}

async function upload(role, event) {
  const file = event.target.files?.[0]
  if (!file) return
  uploading.value = role
  errors.value = []
  try {
    const url = await uploadProductImage(form.id, role, file)
    if (role === 'hover') form.hoverImagePath = url
    else form.primaryImagePath = url
  } catch (err) {
    errors.value = [err.message || 'Unable to upload image.']
  } finally {
    uploading.value = ''
    event.target.value = ''
  }
}

async function archiveCurrent() {
  if (!form.id || !window.confirm('Archive this product?')) return
  await archiveProduct(form.id)
  emit('saved')
}

async function deleteCurrent() {
  if (!form.id || !window.confirm('Delete this product permanently?')) return
  await deleteProduct(form.id)
  emit('saved')
}
</script>

<template>
  <section class="admin-editor">
    <div class="admin__section-head">
      <div>
        <span class="admin__eyebrow">Listing editor</span>
        <h2>{{ title }}</h2>
      </div>
      <button class="admin__button admin__button--ghost" type="button" @click="emit('cancel')">
        Back to catalog
      </button>
    </div>

    <div v-if="errors.length" class="admin__error-list">
      <p v-for="error in errors" :key="error">{{ error }}</p>
    </div>
    <p v-if="notice" class="admin__notice">{{ notice }}</p>

    <form class="admin-editor__grid" @submit.prevent="save('draft')">
      <section class="admin__panel admin-card">
        <span class="admin__eyebrow">Identity</span>
        <label class="admin__field">
          <span>Name</span>
          <input v-model="form.name" class="admin__input" />
        </label>
        <label class="admin__field">
          <span>Slug</span>
          <input v-model="form.slug" class="admin__input" />
        </label>
        <label class="admin__field">
          <span>Tagline</span>
          <input v-model="form.line" class="admin__input" />
        </label>
        <label class="admin__field">
          <span>Description</span>
          <textarea v-model="form.description" class="admin__textarea" rows="6"></textarea>
        </label>
      </section>

      <section class="admin__panel admin-card">
        <span class="admin__eyebrow">Commerce</span>
        <div class="admin-editor__two">
          <label class="admin__field">
            <span>Price</span>
            <input v-model="form.price" class="admin__input" inputmode="decimal" placeholder="64.00" />
          </label>
          <label class="admin__field">
            <span>Status</span>
            <select v-model="form.status" class="admin__select">
              <option value="draft">Draft</option>
              <option value="live">Live</option>
              <option value="archived">Archived</option>
            </select>
          </label>
        </div>
        <div class="admin-editor__two">
          <label class="admin__field">
            <span>Badge</span>
            <input v-model="form.badge" class="admin__input" placeholder="Drop 001" />
          </label>
          <label class="admin__field">
            <span>Edition</span>
            <input v-model="form.edition" class="admin__input" placeholder="012 / 120" />
          </label>
        </div>
        <div class="admin-editor__two">
          <label class="admin__field">
            <span>Edition max</span>
            <input v-model="form.editionMax" class="admin__input" inputmode="numeric" />
          </label>
          <label class="admin__field">
            <span>Sort order</span>
            <input v-model="form.sortOrder" class="admin__input" inputmode="numeric" />
          </label>
        </div>
        <label class="admin-check">
          <input v-model="form.isFeatured" type="checkbox" />
          <span>Feature in Latest Drop</span>
        </label>
      </section>

      <section class="admin__panel admin-card">
        <span class="admin__eyebrow">Taxonomy</span>
        <div class="admin-editor__two">
          <label class="admin__field">
            <span>Species</span>
            <select v-model="form.species" class="admin__select">
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="both">Both</option>
            </select>
          </label>
          <label class="admin__field">
            <span>Category</span>
            <select v-model="form.category" class="admin__select">
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
          </label>
        </div>
        <label class="admin__field">
          <span>World</span>
          <select v-model="form.vibe" class="admin__select">
            <option v-for="world in worlds" :key="world.id" :value="world.id">{{ world.name }}</option>
          </select>
        </label>
        <label class="admin__field">
          <span>Material</span>
          <input v-model="form.material" class="admin__input" />
        </label>
      </section>

      <section class="admin__panel admin-card">
        <span class="admin__eyebrow">Images</span>
        <div class="admin-image-fields">
          <label class="admin__field">
            <span>Primary image URL</span>
            <input v-model="form.primaryImagePath" class="admin__input" />
            <input class="admin__input" type="file" accept="image/*" @change="upload('primary', $event)" />
          </label>
          <label class="admin__field">
            <span>Hover image URL</span>
            <input v-model="form.hoverImagePath" class="admin__input" />
            <input class="admin__input" type="file" accept="image/*" @change="upload('hover', $event)" />
          </label>
        </div>
        <p v-if="uploading" class="admin__notice">Uploading {{ uploading }} image...</p>
      </section>

      <section class="admin__panel admin-card">
        <span class="admin__eyebrow">Colorways</span>
        <div class="admin-swatches">
          <button
            v-for="(color, key) in colorways"
            :key="key"
            type="button"
            :class="['admin-swatch', { 'is-on': form.colors.includes(key) }]"
            @click="toggleArray(form.colors, key)"
          >
            <i :style="{ background: color.hex }"></i>
            <span>{{ color.name }}</span>
          </button>
        </div>
      </section>

      <section class="admin__panel admin-card">
        <span class="admin__eyebrow">Sizes and stock</span>
        <div class="admin-size-grid">
          <div v-for="size in sizes" :key="size" class="admin-size-row">
            <label class="admin-check">
              <input type="checkbox" :checked="form.sizes.includes(size)" @change="toggleArray(form.sizes, size)" />
              <span>{{ size }}</span>
            </label>
            <select v-model="form.sizeStock[size]" class="admin__select" :disabled="!form.sizes.includes(size)">
              <option value="in">In stock</option>
              <option value="low">Low</option>
              <option value="sold">Sold out</option>
            </select>
          </div>
        </div>
      </section>

      <div class="admin-editor__actions">
        <button class="admin__button admin__button--ghost" type="submit" :disabled="saving">
          Save draft
        </button>
        <button class="admin__button admin__button--primary" type="button" :disabled="saving" @click="save('publish')">
          Publish
        </button>
        <button v-if="form.id" class="admin__button admin__button--ghost" type="button" @click="archiveCurrent">
          Archive
        </button>
        <button v-if="form.id" class="admin__button admin__button--danger" type="button" @click="deleteCurrent">
          Delete
        </button>
      </div>
    </form>
  </section>
</template>
