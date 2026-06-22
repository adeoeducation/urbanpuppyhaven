import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const source = readFileSync(new URL('./TheAtelier.vue', import.meta.url), 'utf8')

describe('TheAtelier size selection', () => {
  it('requires a shopper to choose a size before adding an item to the bag', () => {
    expect(source).toContain('drawerSize.value = null')
    expect(source).toContain(':disabled="!drawerSize"')
    expect(source).toContain('Choose size')
    expect(source).not.toContain('bag.add(p, { size')
  })
})
