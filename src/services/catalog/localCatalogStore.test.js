import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

async function loadStore() {
  vi.resetModules()
  return import('./localCatalogStore.js')
}

describe('localCatalogStore admin auth', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_LOCAL_ADMIN_EMAIL', 'owner@example.com')
    vi.stubEnv('VITE_LOCAL_ADMIN_USERNAME', 'storeowner')
    vi.stubEnv('VITE_LOCAL_ADMIN_PASSWORD', 'Secret18!')
  })

  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('accepts the configured local username as a login identifier', async () => {
    const { signInLocalAdmin } = await loadStore()

    expect(signInLocalAdmin('storeowner', 'Secret18!')).toMatchObject({
      user: { email: 'owner@example.com', role: 'owner' },
      access_token: 'local-development-session'
    })
  })
})
