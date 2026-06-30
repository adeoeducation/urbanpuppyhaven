<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import AccordionCarousel from './components/AccordionCarousel.vue'
import MarqueeStrip from './components/MarqueeStrip.vue'
import ShopByVibe from './components/ShopByVibe.vue'
import LatestDrop from './components/LatestDrop.vue'
import TheAtelier from './components/TheAtelier.vue'
import Lookbook from './components/Lookbook.vue'
import ComfortPromise from './components/ComfortPromise.vue'
import PawparazziWall from './components/PawparazziWall.vue'
import Newsletter from './components/Newsletter.vue'
import SiteFooter from './components/SiteFooter.vue'
import { theme } from './composables/useTheme.js'

const progress = ref(0)
const sweep = ref(null)

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? window.scrollY / max : 0
}

function onMagnetic(e) {
  const els = document.querySelectorAll('.magnetic')
  els.forEach((el) => {
    const r = el.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.hypot(dx, dy)
    const radius = Math.max(r.width, r.height) * 0.9
    if (dist < radius) {
      el.style.setProperty('--mx', dx * 0.25)
      el.style.setProperty('--my', dy * 0.25)
    } else {
      el.style.setProperty('--mx', 0)
      el.style.setProperty('--my', 0)
    }
  })
}

function onTilt(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width
  const py = (e.clientY - r.top) / r.height
  const ry = (px - 0.5) * 14
  const rx = (0.5 - py) * 14
  el.style.setProperty('--ry', ry + 'deg')
  el.style.setProperty('--rx', rx + 'deg')
  el.style.setProperty('--gx', (px * 100) + '%')
  el.style.setProperty('--gy', (py * 100) + '%')
}
function resetTilt(e) {
  const el = e.currentTarget
  el.style.setProperty('--ry', '0deg')
  el.style.setProperty('--rx', '0deg')
}

function attachTilts() {
  document.querySelectorAll('.tilt').forEach((el) => {
    if (el.__tiltBound) return
    el.__tiltBound = true
    el.addEventListener('mousemove', onTilt)
    el.addEventListener('mouseleave', resetTilt)
  })
}

function splitTitles() {
  document.querySelectorAll('[data-split]').forEach((el) => {
    if (el.__split) return
    el.__split = true
    const text = el.textContent
    el.innerHTML = ''
    let delay = 0
    for (const ch of text) {
      if (ch === '\n') { el.appendChild(document.createElement('br')); continue }
      if (ch === ' ') {
        // Keep spaces as real text nodes so CSS word-spacing applies.
        el.appendChild(document.createTextNode(' '))
        continue
      }
      const span = document.createElement('span')
      span.className = 'split-char'
      span.textContent = ch
      span.style.transitionDelay = (delay * 28) + 'ms'
      delay++
      el.appendChild(span)
    }
  })
}

let revealObserver = null
let splitObserver = null
let sweepBusy = false

function onSweep(e) {
  if (sweepBusy || !sweep.value) {
    theme.value = e.detail.next
    return
  }
  sweepBusy = true
  const next = e.detail.next
  const el = sweep.value
  el.classList.remove('is-out')
  el.classList.add('is-on')
  setTimeout(() => {
    theme.value = next
    el.classList.remove('is-on')
    el.classList.add('is-out')
    setTimeout(() => { el.classList.remove('is-out'); sweepBusy = false }, 750)
  }, 420)
}

onMounted(() => {
  splitTitles()
  attachTilts()
  window.addEventListener('mousemove', onMagnetic, { passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('uph:theme-sweep', onSweep)

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in')
        revealObserver.unobserve(e.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' })
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

  splitObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.split-char').forEach((c) => c.classList.add('is-in'))
        splitObserver.unobserve(e.target)
      }
    })
  }, { threshold: 0.2 })
  document.querySelectorAll('[data-split]').forEach((el) => splitObserver.observe(el))

  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMagnetic)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('uph:theme-sweep', onSweep)
  revealObserver?.disconnect()
  splitObserver?.disconnect()
})
</script>

<template>
  <div class="progress" aria-hidden="true">
    <div class="progress__bar" :style="{ '--p': progress }"></div>
  </div>

  <div class="theme-sweep" ref="sweep" aria-hidden="true"></div>

  <SiteHeader />
  <main>
    <AccordionCarousel />
    <MarqueeStrip
      :items="[
        'Couture for the four-legged',
        'Born famous · Dressed accordingly',
        'Every walk is a runway',
        'Drop 001 · Live now',
        'Numbered. Limited. Yours.'
      ]"
    />
    <ShopByVibe />
    <LatestDrop />
    <TheAtelier />
    <Lookbook />
    <ComfortPromise />
    <PawparazziWall />
    <Newsletter />
  </main>
  <SiteFooter />
</template>
