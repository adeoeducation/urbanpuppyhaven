// Tiny shared theme composable.
// Light is default; dark is a warm candlelight alternate.
// Persists in localStorage. Falls back to prefers-color-scheme on first visit.

import { ref, watch } from 'vue'

const KEY = 'uph-theme'

function read() {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem(KEY)
  if (stored === 'light' || stored === 'dark') return stored
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'light'
}

export const theme = ref(read())

function apply(t) {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', t)
}

apply(theme.value)

watch(theme, (t) => {
  apply(t)
  try { window.localStorage.setItem(KEY, t) } catch {}
})

// Theatrical sweep: caller (App.vue) hosts a .theme-sweep element.
// We dispatch a custom event so the swap is staged in sync with the sweep.
export function toggleTheme() {
  const next = theme.value === 'dark' ? 'light' : 'dark'
  if (typeof window === 'undefined') {
    theme.value = next
    return
  }
  window.dispatchEvent(new CustomEvent('aura:theme-sweep', { detail: { next } }))
}
