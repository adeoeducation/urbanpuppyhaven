// Stitch the Vite production build into a single self-contained HTML file.
// Inlines the CSS in <style>, the JS in <script type="module">, and the
// favicon SVG as a data URI. Unsplash images + Google Fonts stay remote.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const dist = join(root, 'dist')

// Locate hashed assets
const assetsDir = join(dist, 'assets')
const assetFiles = readdirSync(assetsDir)
const cssName = assetFiles.find((f) => f.endsWith('.css'))
const jsName  = assetFiles.find((f) => f.endsWith('.js'))

if (!cssName || !jsName) {
  console.error('Could not find built css/js in dist/assets')
  process.exit(1)
}

const html = readFileSync(join(dist, 'index.html'), 'utf8')
const css  = readFileSync(join(assetsDir, cssName), 'utf8')
const rawJs = readFileSync(join(assetsDir, jsName),  'utf8')
const favicon = readFileSync(join(dist, 'favicon.svg'), 'utf8')

// CRITICAL: Vue's runtime contains the literal string "</script>" (used in
// its HTML parser). If we inline the bundle raw, the browser's HTML parser
// closes the <script> tag early and renders the rest of the bundle as text.
// Escape every </script> to <\/script> — JS treats them identically, HTML
// parser does not see a closing tag. Same defense for </style>.
const js = rawJs.replace(/<\/script>/gi, '<\\/script>')
const safeCss = css.replace(/<\/style>/gi, '<\\/style>')

const faviconDataUri =
  'data:image/svg+xml;utf8,' + encodeURIComponent(favicon)

// IMPORTANT: pass replacements as functions, NOT strings.
//
// String.prototype.replace treats "$&", "$1", "$$" etc. as backreferences
// inside the replacement string. The Vue bundle contains 28+ occurrences of
// "$<digit>" plus one "$&", and CSS may contain "$" characters too. If we
// pass replacements as strings, those dollar-sequences silently rewrite to
// the *matched* HTML — corrupting the output (it was inserting the original
// <script src=...></script> tag inside the bundle body). The function form
// is treated as the literal replacement, no backreference expansion.
let out = html
  .replace(/<link rel="icon"[^>]*href="\/favicon\.svg"[^>]*>/,
    () => `<link rel="icon" type="image/svg+xml" href="${faviconDataUri}">`)
  .replace(new RegExp(`<link rel="stylesheet"[^>]*href="\\/assets\\/${cssName}"[^>]*>`),
    () => `<style>${safeCss}</style>`)
  .replace(new RegExp(`<script type="module"[^>]*src="\\/assets\\/${jsName}"[^>]*><\\/script>`),
    () => `<script type="module">${js}</script>`)

const outPath = join(root, 'urbanpuppyhaven.html')
writeFileSync(outPath, out, 'utf8')

const size = Buffer.byteLength(out, 'utf8')
console.log(`✓ wrote ${outPath}`)
console.log(`  size: ${(size / 1024).toFixed(1)} KB`)
console.log(`  css inlined: ${cssName} (${(css.length/1024).toFixed(1)} KB)`)
console.log(`  js  inlined: ${jsName} (${(js.length/1024).toFixed(1)} KB)`)
