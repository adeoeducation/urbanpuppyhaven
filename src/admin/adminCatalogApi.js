import { supabase } from '../lib/supabaseClient.js'
import { productFormToPayload } from './adminProductForm.js'
import {
  archiveLocalProduct,
  deleteLocalProduct,
  getLocalAdminSession,
  isLocalAdminEnabled,
  listLocalAdminProducts,
  saveLocalProduct,
  signInLocalAdmin,
  signOutLocalAdmin
} from '../services/catalog/localCatalogStore.js'

const PRODUCT_SELECT = `
  *,
  product_size_stock(size, stock_status, quantity),
  product_colorways(colorway_id)
`

const ORDER_SELECT = `
  *,
  order_items(*)
`

function requireSupabase() {
  if (!supabase) {
    throw new Error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.')
  }
  return supabase
}

function throwIfError(result) {
  if (result?.error) throw result.error
  return result
}

export async function getSession() {
  if (!supabase && isLocalAdminEnabled) return getLocalAdminSession()
  const client = requireSupabase()
  const { data, error } = await client.auth.getSession()
  if (error) throw error
  return data.session
}

export async function signInAdmin(email, password) {
  if (!supabase && isLocalAdminEnabled) return signInLocalAdmin(email, password)
  const client = requireSupabase()
  const { data, error } = await client.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data.session
}

export async function signOutAdmin() {
  if (!supabase && isLocalAdminEnabled) {
    signOutLocalAdmin()
    return
  }
  const client = requireSupabase()
  const { error } = await client.auth.signOut()
  if (error) throw error
}

export async function listAdminProducts() {
  if (!supabase && isLocalAdminEnabled) return listLocalAdminProducts()
  const client = requireSupabase()
  const { data, error } = await client
    .from('products')
    .select(PRODUCT_SELECT)
    .order('updated_at', { ascending: false })

  if (error) throw error
  return data || []
}

export async function listAdminOrders() {
  if (!supabase && isLocalAdminEnabled) return []
  const client = requireSupabase()
  const { data, error } = await client
    .from('orders')
    .select(ORDER_SELECT)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data || []
}

export async function saveProductForm(form) {
  const payload = productFormToPayload(form)
  if (!supabase && isLocalAdminEnabled) return saveLocalProduct(payload, form.id)
  const client = requireSupabase()
  const id = form.id

  const productResult = id
    ? await client.from('products').update(payload.product).eq('id', id).select('id').single()
    : await client.from('products').insert(payload.product).select('id').single()

  throwIfError(productResult)

  const productId = productResult.data.id
  throwIfError(await client.from('product_size_stock').delete().eq('product_id', productId))
  throwIfError(await client.from('product_colorways').delete().eq('product_id', productId))

  if (payload.sizeRows.length) {
    throwIfError(await client
      .from('product_size_stock')
      .insert(payload.sizeRows.map((row) => ({ ...row, product_id: productId }))))
  }

  if (payload.colorRows.length) {
    throwIfError(await client
      .from('product_colorways')
      .insert(payload.colorRows.map((row) => ({ ...row, product_id: productId }))))
  }

  return productId
}

export async function archiveProduct(productId) {
  if (!supabase && isLocalAdminEnabled) {
    archiveLocalProduct(productId)
    return
  }
  const client = requireSupabase()
  throwIfError(await client.from('products').update({ status: 'archived' }).eq('id', productId))
}

export async function deleteProduct(productId) {
  if (!supabase && isLocalAdminEnabled) {
    deleteLocalProduct(productId)
    return
  }
  const client = requireSupabase()
  throwIfError(await client.from('products').delete().eq('id', productId))
}

export async function uploadProductImage(productId, role, file) {
  if (!supabase && isLocalAdminEnabled) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = () => reject(new Error('Unable to read local image file.'))
      reader.readAsDataURL(file)
    })
  }
  const client = requireSupabase()
  const ext = file.name.split('.').pop() || 'jpg'
  const safeRole = role === 'hover' ? 'hover' : 'primary'
  const path = `products/${productId || 'draft'}/${safeRole}-${Date.now()}.${ext}`
  const upload = await client.storage.from('product-images').upload(path, file, { upsert: true })
  throwIfError(upload)
  const { data } = client.storage.from('product-images').getPublicUrl(path)
  return data.publicUrl
}
