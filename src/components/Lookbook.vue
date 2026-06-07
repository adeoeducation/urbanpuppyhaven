<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const u = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

const frames = [
  { id: 'f1', size: 'tall',  image: u('1619980296991-5c0d64b23950'), caption: 'Midnight Puffer — Brooklyn, 03:14', model: 'Bruno King' },
  { id: 'f2', size: 'wide',  image: u('1650219874896-ad17fb6b2788'), caption: 'Velvet Letterman — Studio Session', model: 'Theo TheFrenchie' },
  { id: 'f3', size: 'tall',  image: u('1676484606502-3f1837111e64'), caption: 'Brownstone Vest — Uptown Walk', model: 'Miss Miso' },
  { id: 'f4', size: 'square',image: u('1706745262357-5ecaa3154433'), caption: 'Cottage Heir — Country House', model: 'Sir Biscuit' },
  { id: 'f5', size: 'tall',  image: u('1724367236214-e4f50691c27c'), caption: 'Soft Life Knit — Sunday Sofa', model: 'Pearl Paws' },
  { id: 'f6', size: 'wide',  image: u('1724367281416-cf18867ad712'), caption: 'Paparazzi Slick — Rain Check', model: 'Onyx Officiall' },
  { id: 'f7', size: 'tall',  image: u('1597671455179-b2064449599f'), caption: 'Mini Mogul Set — Boardroom', model: 'Cocoa Couture' }
]

const trackEl = ref(null)
const dragX = ref(0)
const idx = ref(0)

let isDown = false
let startX = 0
let startTrans = 0
let pointerId = null

function clamp(v, min, max) { return Math.min(Math.max(v, min), max) }

function maxTrans() {
  if (!trackEl.value) return 0
  const parent = trackEl.value.parentElement
  return Math.max(0, trackEl.value.scrollWidth - parent.clientWidth)
}

function setTrans(v) {
  dragX.value = clamp(v, -maxTrans(), 0)
  if (trackEl.value) trackEl.value.style.transform = `translate3d(${dragX.value}px, 0, 0)`
}

function frameWidth() {
  const f = trackEl.value?.querySelector('.lb__frame')
  if (!f) return 380
  return f.getBoundingClientRect().width + parseFloat(getComputedStyle(trackEl.value).columnGap || 24)
}

function snap() {
  const w = frameWidth()
  const target = Math.round(dragX.value / w) * w
  setTrans(target)
  idx.value = clamp(-Math.round(target / w), 0, frames.length - 1)
}

function go(dir) {
  const w = frameWidth()
  setTrans(dragX.value - dir * w)
  idx.value = clamp(-Math.round(dragX.value / w), 0, frames.length - 1)
}

function onDown(e) {
  isDown = true
  pointerId = e.pointerId
  startX = e.clientX
  startTrans = dragX.value
  trackEl.value?.setPointerCapture?.(pointerId)
  trackEl.value?.classList.add('is-dragging')
}
function onMove(e) {
  if (!isDown) return
  setTrans(startTrans + (e.clientX - startX))
}
function onUp() {
  if (!isDown) return
  isDown = false
  trackEl.value?.classList.remove('is-dragging')
  snap()
}
function onWheel(e) {
  if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return
  e.preventDefault()
  setTrans(dragX.value - e.deltaX)
  clearTimeout(onWheel._t)
  onWheel._t = setTimeout(snap, 140)
}
function onKey(e) {
  if (e.key === 'ArrowRight') go(1)
  if (e.key === 'ArrowLeft') go(-1)
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
})

const total = computed(() => frames.length)
</script>

<template>
  <section id="lookbook" class="lb section-pad">
    <div class="container lb__head">
      <span class="eyebrow reveal">The Lookbook · Vol. 01</span>
      <h2 class="section-title reveal" data-d="1">
        A pet in the right fit<br/>
        <span class="ital">becomes the photograph.</span>
      </h2>
      <p class="lede reveal" data-d="2">
        Shot through the lens of paparazzi flash, studio quiet, and
        the soft theatre of Sunday afternoons. Drag, scroll, or arrow your way through.
      </p>
    </div>

    <div class="lb__exhibit">
      <div
        class="lb__viewport"
        @pointerdown="onDown"
        @pointermove="onMove"
        @pointerup="onUp"
        @pointercancel="onUp"
        @pointerleave="onUp"
        @wheel="onWheel"
      >
        <div class="lb__track" ref="trackEl">
          <figure
            v-for="(f, i) in frames"
            :key="f.id"
            class="lb__frame"
            :class="'lb__frame--' + f.size"
          >
            <div class="lb__media media media--zoom media__noise media__veil">
              <img :src="f.image" :alt="f.caption" loading="lazy" decoding="async" draggable="false" />
              <span class="lb__plate numeral">N° {{ String(i + 1).padStart(2, '0') }} / {{ String(total).padStart(2, '0') }}</span>
            </div>
            <figcaption class="lb__cap">
              <span class="lb__dot"></span>
              <span class="lb__cap-text">{{ f.caption }}</span>
              <span class="lb__cap-model">— {{ f.model }}</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div class="container lb__bar">
        <div class="lb__counter numeral">
          <span class="lb__counter-now">{{ String(idx + 1).padStart(2, '0') }}</span>
          <span class="lb__counter-sep">/</span>
          <span class="lb__counter-of">{{ String(total).padStart(2, '0') }}</span>
        </div>
        <div class="lb__nav">
          <button class="lb__btn magnetic" @click="go(-1)" aria-label="Previous">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14 6l-6 6 6 6"/></svg>
          </button>
          <button class="lb__btn magnetic" @click="go(1)" aria-label="Next">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M10 6l6 6-6 6"/></svg>
          </button>
        </div>
        <div class="lb__hint numeral">drag · wheel · arrow keys</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lb {
  background: var(--bg-deep);
  transition: background 0.7s;
}
.lb__head {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-width: 760px;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.lb__exhibit { position: relative; }

.lb__viewport {
  overflow: hidden;
  cursor: grab;
  user-select: none;
  padding-block: 1rem;
  padding-inline: var(--pad-x);
}
.lb__track {
  display: flex;
  gap: clamp(1.2rem, 2vw, 2rem);
  width: max-content;
  transform: translate3d(0, 0, 0);
  transition: transform 0.7s var(--ease-luxe);
  align-items: stretch;
}
.lb__track.is-dragging {
  transition: none;
  cursor: grabbing;
}

.lb__frame {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
.lb__frame--tall   { width: clamp(280px, 28vw, 420px); }
.lb__frame--wide   { width: clamp(420px, 42vw, 620px); }
.lb__frame--square { width: clamp(320px, 30vw, 460px); }

.lb__media {
  position: relative;
  border-radius: 4px;
  border: 1px solid var(--rule);
  box-shadow: var(--shadow);
  background: var(--bg-tonal);
}
.lb__frame--tall   .lb__media { aspect-ratio: 4 / 5; }
.lb__frame--wide   .lb__media { aspect-ratio: 4 / 3; }
.lb__frame--square .lb__media { aspect-ratio: 1 / 1; }

.lb__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lb__plate {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 3;
  font-size: 0.6rem;
  color: var(--bg-soft);
  background: color-mix(in oklab, #0E0905 50%, transparent);
  backdrop-filter: blur(8px);
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.lb__cap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--t-3);
}
.lb__dot {
  width: 6px;
  height: 6px;
  background: var(--accent);
  border-radius: 50%;
  flex-shrink: 0;
}
.lb__cap-text { color: var(--t); }
.lb__cap-model {
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 36, 'WONK' 1;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  color: var(--gold-2);
}
[data-theme="dark"] .lb__cap-model { color: var(--gold); }

.lb__bar {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-top: 1.6rem;
  padding-block: 1rem 0;
  border-top: 1px solid var(--rule);
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--t-3);
}
.lb__counter {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  font-family: var(--f-display);
  font-weight: 500;
  font-variation-settings: 'opsz' 96, 'SOFT' 80, 'WONK' 0;
  font-size: clamp(1.4rem, 2.5vw, 2.1rem);
  color: var(--t);
  letter-spacing: -0.01em;
}
.lb__counter-now { color: var(--accent); }
.lb__counter-sep {
  font-style: italic;
  font-variation-settings: 'opsz' 144, 'WONK' 1;
  color: var(--gold-2);
}
[data-theme="dark"] .lb__counter-sep { color: var(--gold); }
.lb__counter-of { color: var(--t-3); font-size: 0.7em; }

.lb__nav {
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
}
.lb__btn {
  width: 44px; height: 44px;
  border: 1px solid var(--rule-2);
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--t);
  background: transparent;
  transition: border-color 0.4s, color 0.4s, background 0.4s;
}
.lb__btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: color-mix(in oklab, var(--accent) 8%, transparent);
}

.lb__hint { color: var(--t-mute); }

@media (max-width: 900px) {
  .lb__hint { display: none; }
  .lb__frame--tall   { width: 80vw; }
  .lb__frame--wide   { width: 88vw; }
  .lb__frame--square { width: 80vw; }
}
</style>
