import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const source = readFileSync(new URL('./AdminLogin.vue', import.meta.url), 'utf8')

describe('AdminLogin', () => {
  it('accepts either an email address or local admin username', () => {
    expect(source).toContain('Email or username')
    expect(source).toContain('type="text"')
    expect(source).toContain('autocomplete="username"')
    expect(source).not.toContain('type="email"')
  })

  it('offers a local-only admin sign in button when the fallback is configured', () => {
    expect(source).toContain('continueLocalAdmin')
    expect(source).toContain('localAdminConfig.username || localAdminConfig.email')
    expect(source).toContain('Continue as local admin')
  })
})
