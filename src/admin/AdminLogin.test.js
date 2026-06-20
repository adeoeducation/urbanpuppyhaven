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
})
