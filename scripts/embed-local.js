// Final bundling step: take urbanpuppyhaven-standalone.html (JS/CSS/fonts +
// remote Unsplash photos already embedded) and inline the LOCAL images from
// public/images/ as base64 data URIs, so the result has zero external
// dependencies. Output: urbanpuppyhaven-bundle.html.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { dirname, resolve, join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' }

const inputPath = resolve(root, 'urbanpuppyhaven-standalone.html')
let html = readFileSync(inputPath, 'utf8')

const imagesDir = join(root, 'public', 'images')
let count = 0
for (const file of readdirSync(imagesDir)) {
  const ext = extname(file).toLowerCase()
  const mime = MIME[ext]
  if (!mime) continue
  const ref = `/images/${file}`
  if (!html.includes(ref)) continue
  const buf = readFileSync(join(imagesDir, file))
  const dataUri = `data:${mime};base64,${buf.toString('base64')}`
  // split/join: literal replace, no regex `$` pitfalls
  html = html.split(ref).join(dataUri)
  count++
  console.log(`  ✓ inlined ${ref}  (${(buf.length / 1024).toFixed(0)} KB)`)
}

const outPath = resolve(root, 'urbanpuppyhaven-bundle.html')
writeFileSync(outPath, html, 'utf8')

const size = Buffer.byteLength(html, 'utf8')
console.log(`\n✓ wrote ${outPath}`)
console.log(`  local images inlined: ${count}`)
console.log(`  size: ${(size / (1024 * 1024)).toFixed(2)} MB`)
