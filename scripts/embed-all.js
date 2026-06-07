// Take urbanpuppyhaven.html and embed EVERY remote asset (Unsplash photos +
// Google Fonts) as base64 data URIs.  Output: urbanpuppyhaven-standalone.html.
//
// The Vite bundle builds Unsplash URLs at runtime via a template literal
// (`...photo-${id}?w=${w}&q=80...`), so we can't just string-replace the URLs.
// Instead, we extract every photo ID present in the JS bundle, fetch each at
// a single fixed width, build an { id → data:URI } map, and inject a tiny
// runtime patch that intercepts HTMLImageElement.src and
// CSSStyleDeclaration.backgroundImage. Whenever Vue sets either of those to
// an Unsplash URL, we redirect to the embedded base64.

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import https from 'node:https'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// Width to fetch each photo at. Higher = sharper but bigger file.
const PHOTO_WIDTH = 1400
const PHOTO_QUALITY = 75

// ---- low-level fetch (binary, with redirect + UA) ----

function fetchBinary(url, depth = 0) {
  if (depth > 5) return Promise.reject(new Error('too many redirects'))
  return new Promise((resolveP, rejectP) => {
    const req = https.get(url, { headers: { 'User-Agent': UA, 'Accept': '*/*' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const next = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).toString()
        res.resume()
        return fetchBinary(next, depth + 1).then(resolveP, rejectP)
      }
      if (res.statusCode !== 200) {
        res.resume()
        return rejectP(new Error(`HTTP ${res.statusCode} for ${url}`))
      }
      const chunks = []
      res.on('data', (c) => chunks.push(c))
      res.on('end', () => resolveP(Buffer.concat(chunks)))
      res.on('error', rejectP)
    })
    req.on('error', rejectP)
  })
}

function dataUri(buf, mime) {
  return `data:${mime};base64,${buf.toString('base64')}`
}

function mimeFromUrl(url) {
  if (url.endsWith('.woff2')) return 'font/woff2'
  if (url.endsWith('.woff'))  return 'font/woff'
  if (url.endsWith('.ttf'))   return 'font/ttf'
  return 'image/jpeg'
}

async function mapPool(items, limit, worker) {
  const results = new Array(items.length)
  let i = 0
  const runners = Array.from({ length: limit }, async () => {
    while (true) {
      const idx = i++
      if (idx >= items.length) return
      try { results[idx] = await worker(items[idx], idx) }
      catch (e) { results[idx] = { error: e } }
    }
  })
  await Promise.all(runners)
  return results
}

// ---- main ----

async function main() {
  const inputPath = resolve(root, 'urbanpuppyhaven.html')
  let html = readFileSync(inputPath, 'utf8')

  // ---- 1. Inline Google Fonts ----
  const fontLinkRe = /<link href="(https:\/\/fonts\.googleapis\.com\/css2[^"]+)" rel="stylesheet"[^>]*>/
  const fontMatch = html.match(fontLinkRe)
  if (fontMatch) {
    const fontCssUrl = fontMatch[1]
    process.stdout.write('• fetching Google Fonts CSS …\n')
    const cssBuf = await fetchBinary(fontCssUrl)
    let fontCss = cssBuf.toString('utf8')

    const fontUrls = [...new Set(fontCss.match(/https:\/\/fonts\.gstatic\.com\/[^)\s]+/g) || [])]
    process.stdout.write(`  found ${fontUrls.length} font files\n`)

    const fontResults = await mapPool(fontUrls, 4, async (url, idx) => {
      const buf = await fetchBinary(url)
      const mime = mimeFromUrl(url)
      process.stdout.write(`  ✓ font ${String(idx + 1).padStart(2)}/${fontUrls.length}  (${(buf.length/1024).toFixed(0)} KB)\n`)
      return { url, dataUri: dataUri(buf, mime) }
    })
    for (const r of fontResults) {
      if (r.error) { console.warn(`  ! font failed: ${r.error.message}`); continue }
      fontCss = fontCss.split(r.url).join(r.dataUri)
    }

    // Function-form replace so any "$" inside fontCss is treated literally.
    html = html.replace(fontLinkRe, () => `<style>${fontCss}</style>`)
    html = html.replace(/<link rel="preconnect"[^>]*>/g, '')
  } else {
    console.warn('! no Google Fonts link found')
  }

  // ---- 2. Discover all photo IDs in the JS bundle + fetch each ----
  //
  // IDs look like  <digits>-<hex>  with the digit run 10–16 chars and the
  // hex run 12–16 chars. Match them inside JS string literals.
  const idRe = /['"](\d{10,16}-[0-9a-f]{12,16})['"]/g
  const ids = [...new Set([...html.matchAll(idRe)].map((m) => m[1]))]
  process.stdout.write(`• fetching ${ids.length} photos at w=${PHOTO_WIDTH} …\n`)

  const photoResults = await mapPool(ids, 5, async (id, idx) => {
    const url = `https://images.unsplash.com/photo-${id}?w=${PHOTO_WIDTH}&q=${PHOTO_QUALITY}&auto=format&fit=crop`
    const buf = await fetchBinary(url)
    process.stdout.write(`  ✓ photo ${String(idx + 1).padStart(2)}/${ids.length}  (${(buf.length/1024).toFixed(0)} KB)  ${id}\n`)
    return { id, dataUri: dataUri(buf, 'image/jpeg') }
  })

  const embedded = {}
  let success = 0, failed = 0
  for (const r of photoResults) {
    if (r.error) { failed++; console.warn(`  ! photo failed: ${r.error.message}`); continue }
    embedded[r.id] = r.dataUri
    success++
  }

  // ---- 3. Inject the runtime URL rewriter ----
  //
  // We intercept HTMLImageElement.src + CSSStyleDeclaration.backgroundImage
  // setters. Whenever Vue/the bundle sets either to an Unsplash photo URL,
  // we rewrite to the embedded base64.

  const patch = `
<script>
window.__EMBEDDED_PHOTOS = ${JSON.stringify(embedded)};
(function () {
  function pickId(url) {
    if (typeof url !== 'string') return null;
    var m = url.match(/photo-([0-9a-f-]+)(?:\\?|$)/i);
    return m ? m[1] : null;
  }
  function rewrite(url) {
    var id = pickId(url);
    if (id && window.__EMBEDDED_PHOTOS[id]) return window.__EMBEDDED_PHOTOS[id];
    return url;
  }

  // ---- HTMLImageElement.src ----
  var imgDesc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  if (imgDesc && imgDesc.set) {
    Object.defineProperty(HTMLImageElement.prototype, 'src', {
      configurable: true,
      enumerable: true,
      get: function () { return imgDesc.get.call(this); },
      set: function (v) { imgDesc.set.call(this, rewrite(v)); }
    });
  }

  // ---- setAttribute for src ----
  var origSet = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, value) {
    if (this instanceof HTMLImageElement && String(name).toLowerCase() === 'src') {
      return origSet.call(this, name, rewrite(value));
    }
    return origSet.call(this, name, value);
  };

  // ---- CSSStyleDeclaration.backgroundImage (used by the hero atmosphere) ----
  var bgDesc = Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype, 'backgroundImage');
  if (bgDesc && bgDesc.set) {
    Object.defineProperty(CSSStyleDeclaration.prototype, 'backgroundImage', {
      configurable: true,
      enumerable: true,
      get: function () { return bgDesc.get.call(this); },
      set: function (v) {
        if (typeof v === 'string') {
          v = v.replace(/url\\((['"]?)([^)]+?)\\1\\)/g, function (_, q, u) {
            return 'url(' + q + rewrite(u) + q + ')';
          });
        }
        bgDesc.set.call(this, v);
      }
    });
  }

  // ---- CSSStyleDeclaration.setProperty (Vue sometimes uses this) ----
  var origProp = CSSStyleDeclaration.prototype.setProperty;
  CSSStyleDeclaration.prototype.setProperty = function (name, value, priority) {
    if (typeof value === 'string' && /background-image|background/i.test(name)) {
      value = value.replace(/url\\((['"]?)([^)]+?)\\1\\)/g, function (_, q, u) {
        return 'url(' + q + rewrite(u) + q + ')';
      });
    }
    return origProp.call(this, name, value, priority);
  };
})();
</script>`

  // Place the patch right before the <script type="module"> (so the patch
  // installs before the app bundle starts). Function-form replace so the
  // patch body's "$" sequences are treated literally.
  html = html.replace(/(<script type="module">)/, (match) => patch + '\n' + match)

  // ---- 4. Strip dns-prefetch / preconnect to fonts.gstatic (we have fonts inline) ----
  html = html.replace(/<link rel="preconnect"[^>]*>/g, '')

  // ---- 5. Write output ----
  const outPath = resolve(root, 'urbanpuppyhaven-standalone.html')
  writeFileSync(outPath, html, 'utf8')

  const size = Buffer.byteLength(html, 'utf8')
  console.log('')
  console.log(`✓ wrote ${outPath}`)
  console.log(`  photos:  ${success}/${ids.length} embedded${failed ? `, ${failed} failed` : ''}`)
  console.log(`  size:    ${(size / (1024 * 1024)).toFixed(2)} MB`)
}

main().catch((e) => {
  console.error('embed failed:', e)
  process.exit(1)
})
