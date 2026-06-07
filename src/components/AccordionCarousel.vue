<script setup>
// AuraHero — full-bleed cinematic photo carousel + scroll-pinned chapter storyboard.
// The hero's background IS the carousel — real photos, cross-dissolve, Ken Burns alive.
// Filename preserved per the no-delete rule.

import { ref, onMounted, onUnmounted, computed } from 'vue'
import { slides, heroSlides } from '../data/slides.js'

const heroEl = ref(null)
const stage = ref(null)
const decoL = ref(null)
const decoR = ref(null)
const hud = ref(null)

const storyEl = ref(null)
const storyTrack = ref(null)
const storyIndex = ref(0)

const active = ref(0)
const paused = ref(false)
const ROTATE_MS = 5400

let rotateTimer = null
let raf = 0
let scrollY = 0
const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 }

function next() { active.value = (active.value + 1) % heroSlides.length }
function go(i) {
  active.value = i
  reset()
}
function reset() {
  if (rotateTimer) clearInterval(rotateTimer)
  if (!paused.value) rotateTimer = setInterval(next, ROTATE_MS)
}
function pause() { paused.value = true; if (rotateTimer) { clearInterval(rotateTimer); rotateTimer = null } }
function play() { paused.value = false; reset() }

const activeSlide = computed(() => heroSlides[active.value])

function tick() {
  mouse.x += (mouse.tx - mouse.x) * 0.08
  mouse.y += (mouse.ty - mouse.y) * 0.08
  const dx = (mouse.x - 0.5)
  const dy = (mouse.y - 0.5)

  if (stage.value) stage.value.style.transform = `translate3d(${dx * -18}px, ${dy * -14 + scrollY * 0.12}px, 0) scale(1.04)`
  if (decoL.value) decoL.value.style.transform = `translate3d(${dx * 38}px, ${dy * 28 + scrollY * -0.04}px, 0)`
  if (decoR.value) decoR.value.style.transform = `translate3d(${dx * -38}px, ${dy * -28 + scrollY * 0.06}px, 0)`
  if (hud.value)   hud.value.style.transform   = `translate3d(${dx * 8}px, ${dy * 5}px, 0)`

  raf = requestAnimationFrame(tick)
}

function onMove(e) {
  if (!heroEl.value) return
  const r = heroEl.value.getBoundingClientRect()
  mouse.tx = (e.clientX - r.left) / r.width
  mouse.ty = (e.clientY - r.top) / r.height
}

function onScroll() {
  scrollY = window.scrollY

  if (storyEl.value && storyTrack.value) {
    const rect = storyEl.value.getBoundingClientRect()
    const vh = window.innerHeight
    const total = storyEl.value.offsetHeight - vh
    const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 0))
    const progress = total > 0 ? scrolled / total : 0
    const trackW = storyTrack.value.scrollWidth
    const move = (trackW - window.innerWidth) * progress
    storyTrack.value.style.transform = `translate3d(${-move}px, 0, 0)`
    storyIndex.value = Math.min(slides.length - 1, Math.round(progress * (slides.length - 1)))
  }
}

onMounted(() => {
  reset()
  raf = requestAnimationFrame(tick)
  window.addEventListener('mousemove', onMove, { passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('visibilitychange', onVisibility)
  onScroll()
})
onUnmounted(() => {
  cancelAnimationFrame(raf)
  if (rotateTimer) clearInterval(rotateTimer)
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('visibilitychange', onVisibility)
})

function onVisibility() {
  if (document.hidden) pause()
  else play()
}
</script>

<template>
  <section id="top" class="aura" ref="heroEl">
    <!-- Full-bleed photo stage — the carousel IS the background -->
    <div class="aura__stage" ref="stage">
      <div
        v-for="(s, i) in heroSlides"
        :key="s.id"
        class="aura__plate"
        :class="{ 'is-active': i === active }"
        :style="{ '--pos': s.pos }"
      >
        <img :src="s.image" :alt="s.caption" loading="eager" decoding="async" />
      </div>
    </div>

    <!-- Warm asymmetric veil for type legibility — strong on left, soft on right -->
    <div class="aura__wash"></div>
    <div class="aura__hood"></div>

    <!-- Foreground decoration runes -->
    <div class="aura__deco aura__deco--l" ref="decoL" aria-hidden="true">
      <span class="aura__mark">✦</span>
      <span class="aura__vline"></span>
      <span class="aura__rune">N°<br/>001</span>
    </div>
    <div class="aura__deco aura__deco--r" ref="decoR" aria-hidden="true">
      <span class="aura__rune aura__rune--r">MMXXVI</span>
      <span class="aura__vline"></span>
      <span class="aura__mark aura__mark--r">⌖</span>
    </div>

    <!-- HUD: type + meta over the photo -->
    <div class="aura__hud" ref="hud">
      <div class="container aura__inner">
        <div class="aura__chip">
          <span class="aura__chip-dot"></span>
          <span>Drop 001 — Live now</span>
          <span class="aura__chip-sep">/</span>
          <span class="aura__chip-num">120 numbered pieces</span>
        </div>

        <h1 class="aura__title">
          <span class="aura__title-line" data-split>Where canine</span>
          <span class="aura__title-line aura__title-line--ital" data-split>couture begins.</span>
        </h1>

        <p class="aura__lede reveal" data-d="3">
          Cinematic wardrobe in numbered runs. Hand-finished hardware,
          vet-reviewed cuts, made for pets with motion.
        </p>

        <div class="aura__cta reveal" data-d="4">
          <a href="#atelier" class="btn btn-primary magnetic">
            Shop the Atelier <span class="arr">→</span>
          </a>
          <a href="#lookbook" class="btn btn-ghost magnetic">
            View Lookbook
          </a>
        </div>

        <div class="aura__meta reveal" data-d="5">
          <span class="aura__meta-k">Volume</span>
          <span class="aura__meta-v numeral">N°001</span>
          <span class="aura__meta-rule"></span>
          <span class="aura__meta-k">Edition</span>
          <span class="aura__meta-v numeral">001 / 120</span>
          <span class="aura__meta-rule"></span>
          <span class="aura__meta-k">Studio</span>
          <span class="aura__meta-v">Brooklyn · MMXXVI</span>
        </div>
      </div>
    </div>

    <!-- Carousel control rail (bottom-right) -->
    <div class="aura__rail" @mouseenter="pause" @mouseleave="play">
      <div class="aura__rail-caption">
        <span class="aura__rail-sigil">{{ activeSlide.sigil }}</span>
        <span class="aura__rail-text">{{ activeSlide.caption }}</span>
      </div>
      <div class="aura__dots" role="tablist" aria-label="Hero photos">
        <button
          v-for="(s, i) in heroSlides"
          :key="s.id + '-d'"
          class="aura__dot"
          :class="{ 'is-on': i === active }"
          :aria-selected="i === active"
          :aria-label="`Show photo ${i + 1}`"
          role="tab"
          @click="go(i)"
        >
          <span class="aura__dot-fill" :style="{ animationDuration: ROTATE_MS + 'ms' }"></span>
        </button>
      </div>
    </div>

    <div class="aura__scroll" aria-hidden="true">
      <span class="aura__scroll-num">{{ String(active + 1).padStart(2, '0') }} / {{ String(heroSlides.length).padStart(2, '0') }}</span>
      <span class="aura__scroll-line"></span>
      <span class="aura__scroll-cap">Scroll to enter</span>
    </div>
  </section>

  <!-- ============================================================
       STORYBOARD — sticky horizontal. Replaces the accordion.
       ============================================================ -->
  <section id="manifesto" class="story" ref="storyEl" :style="{ height: (slides.length * 100) + 'vh' }">
    <div class="story__pin">
      <header class="story__head">
        <span class="eyebrow">The Manifesto · 05 Chapters</span>
        <div class="story__progress">
          <span v-for="(s, i) in slides" :key="s.id"
                class="story__tick"
                :class="{ 'is-on': i === storyIndex }">
            <i></i>
            <em class="numeral">{{ String(i + 1).padStart(2, '0') }}</em>
          </span>
        </div>
      </header>

      <div class="story__viewport">
        <div class="story__track" ref="storyTrack">
          <article v-for="(s) in slides" :key="s.id" class="chapter">
            <div class="chapter__media media media--zoom media__noise media__veil">
              <img :src="s.image" :alt="s.title" loading="lazy" decoding="async" />
              <span class="chapter__num">{{ s.chapter }}</span>
            </div>
            <div class="chapter__copy">
              <span class="chapter__eye">{{ s.eyebrow }}</span>
              <h3 class="chapter__title">
                <template v-for="(line, li) in s.title.split('\n')" :key="li">
                  <span>{{ line }}</span><br v-if="li < s.title.split('\n').length - 1"/>
                </template>
              </h3>
              <p class="chapter__body">{{ s.body }}</p>
              <span class="chapter__step numeral">— Chapter {{ s.chapter }} of {{ slides.length }} —</span>
            </div>
          </article>
        </div>
      </div>

      <footer class="story__foot">
        <span class="numeral">drag · scroll · linger</span>
        <span class="story__hint-line"></span>
      </footer>
    </div>
  </section>
</template>

<style scoped>
/* ============================================================
   AURA HERO — full-bleed photo carousel
   ============================================================ */
.aura {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  padding-top: 84px;
  overflow: hidden;
  isolation: isolate;
  background: var(--bg);
  color: var(--bg-soft);
}

/* --- photo stage ---
   Asymmetric overflow: more on the right so the visible subject
   shifts off the title area without stretching or exposing blank edges.
   Stage center ≈ 58% of viewport → subject lands right of the headline. */
.aura__stage {
  position: absolute;
  top: -6%;
  bottom: -6%;
  left: -4%;
  right: -32%;
  z-index: -3;
  transform: translateY(var(--py, 0));
  will-change: transform;
}
@media (max-width: 900px) {
  /* On narrow screens the title sits over the whole photo anyway —
     return to a symmetric overflow so neither edge crowds. */
  .aura__stage { left: -6%; right: -6%; }
}
.aura__plate {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.6s var(--ease-soft);
}
.aura__plate.is-active {
  opacity: 1;
  z-index: 1;
}
.aura__plate img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--pos, center 30%);
  transform: scale(1.04);
  transition: transform 1.4s var(--ease-soft);
}
.aura__plate.is-active img {
  animation: kenburns 12s linear forwards;
}
@keyframes kenburns {
  from { transform: scale(1.04); }
  to   { transform: scale(1.14); }
}

/* --- veils for type legibility (theme-aware) --- */
.aura__wash {
  position: absolute;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  /* In LIGHT mode: warm cream wash heavy on the left where type lives, soft on right */
  background:
    linear-gradient(95deg,
      color-mix(in oklab, var(--bg-2) 85%, transparent) 0%,
      color-mix(in oklab, var(--bg-2) 55%, transparent) 32%,
      color-mix(in oklab, var(--bg) 18%, transparent) 60%,
      transparent 92%),
    radial-gradient(70% 90% at 0% 100%, color-mix(in oklab, var(--bg) 70%, transparent) 0%, transparent 60%),
    radial-gradient(50% 60% at 20% 0%, color-mix(in oklab, var(--accent-2) 28%, transparent) 0%, transparent 60%);
  transition: background 0.8s var(--ease-soft);
}
[data-theme="dark"] .aura__wash {
  background:
    linear-gradient(95deg,
      color-mix(in oklab, var(--bg-deep) 88%, transparent) 0%,
      color-mix(in oklab, var(--bg-deep) 65%, transparent) 32%,
      color-mix(in oklab, var(--bg) 35%, transparent) 60%,
      color-mix(in oklab, var(--bg) 10%, transparent) 90%),
    radial-gradient(70% 90% at 0% 100%, color-mix(in oklab, var(--bg-deep) 80%, transparent) 0%, transparent 60%),
    radial-gradient(50% 60% at 20% 0%, color-mix(in oklab, var(--accent) 35%, transparent) 0%, transparent 60%);
}

/* Soft hood at the bottom — fades photo into the page below */
.aura__hood {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 28vh;
  z-index: -1;
  pointer-events: none;
  background: linear-gradient(180deg, transparent 0%, var(--bg) 90%);
  transition: background 0.7s;
}

/* --- foreground decoration runes --- */
.aura__deco {
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  pointer-events: none;
  color: var(--gold-2);
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  text-align: center;
  transform: translate(var(--px, 0), var(--py, 0));
  will-change: transform;
  transition: color 0.5s;
}
[data-theme="dark"] .aura__deco { color: var(--gold); }
.aura__deco--l { top: 22%; left: clamp(0.5rem, 2.5vw, 2rem); }
.aura__deco--r { bottom: 18%; right: clamp(0.5rem, 2.5vw, 2rem); }
.aura__mark {
  font-family: var(--f-display);
  font-size: 1.4rem;
  color: var(--accent);
  font-style: italic;
  font-variation-settings: 'opsz' 144, 'WONK' 1;
  filter: drop-shadow(0 4px 14px color-mix(in oklab, var(--accent) 60%, transparent));
  animation: rotateSlow 18s linear infinite;
}
.aura__mark--r { color: var(--gold); animation-direction: reverse; }
.aura__vline {
  width: 1px;
  height: 92px;
  background: linear-gradient(180deg, currentColor, transparent);
}
.aura__rune {
  line-height: 1.05;
  color: var(--t);
  opacity: 0.85;
  font-size: 0.7rem;
}
.aura__rune--r { font-size: 0.62rem; }
@keyframes rotateSlow { to { transform: rotate(360deg); } }

/* --- HUD type --- */
.aura__hud {
  position: relative;
  z-index: 3;
  min-height: calc(100vh - 84px);
  min-height: calc(100svh - 84px);
  display: flex;
  align-items: flex-end;
  padding: clamp(2rem, 4vw, 3rem) 0 clamp(6.5rem, 8vw, 8rem);
  will-change: transform;
}
.aura__inner { gap: 1.15rem; }
.aura__inner {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 100%;
}

.aura__chip {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  align-self: flex-start;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--t);
  background: color-mix(in oklab, var(--surface) 78%, transparent);
  border: 1px solid var(--rule);
  backdrop-filter: blur(14px);
  padding: 0.55rem 1rem;
  border-radius: 999px;
}
.aura__chip-dot {
  width: 6px; height: 6px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 0 0 color-mix(in oklab, var(--accent) 70%, transparent);
  animation: livePulse 2.4s var(--ease-soft) infinite;
}
@keyframes livePulse {
  70% { box-shadow: 0 0 0 8px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}
.aura__chip-sep { color: var(--gold-2); opacity: 0.6; }
[data-theme="dark"] .aura__chip-sep { color: var(--gold); }
.aura__chip-num { color: var(--gold-2); }
[data-theme="dark"] .aura__chip-num { color: var(--gold); }

.aura__title {
  font-family: var(--f-display);
  font-weight: 600;
  font-variation-settings: 'opsz' 144, 'SOFT' 100, 'WONK' 0;
  font-size: clamp(3rem, 10.5vw, 9rem);
  line-height: 0.92;
  letter-spacing: -0.015em;
  word-spacing: 0.18em;
  color: var(--t);
  max-width: 20ch;
  display: flex;
  flex-direction: column;
  text-shadow: 0 6px 30px color-mix(in oklab, var(--bg) 30%, transparent);
  opacity: 0.8;
}
.aura__title-line { display: block; }
.aura__title-line--ital {
  font-style: italic;
  font-variation-settings: 'opsz' 144, 'SOFT' 100, 'WONK' 1;
  color: var(--accent);
  font-weight: 400;
  padding-left: clamp(1.5rem, 6vw, 4rem);
  word-spacing: 0.2em;
}

.aura__lede {
  font-family: var(--f-body);
  font-weight: 400;
  font-style: normal;
  font-size: clamp(0.85rem, 1vw, 0.98rem);
  letter-spacing: 0.01em;
  color: var(--t-3);
  max-width: 38ch;
  line-height: 1.65;
  margin-top: 0.4rem;
  opacity: 0.85;
}

.aura__cta { display: flex; flex-wrap: wrap; gap: 0.85rem; margin-top: 0.6rem; }

.aura__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.85rem;
  margin-top: 1.4rem;
  font-family: var(--f-mono);
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--t-mute);
}
.aura__meta-k { color: var(--gold-2); opacity: 0.85; }
[data-theme="dark"] .aura__meta-k { color: var(--gold); }
.aura__meta-v { color: var(--t); }
.aura__meta-rule { width: 32px; height: 1px; background: var(--rule-2); }

/* --- carousel control rail (bottom-right) --- */
.aura__rail {
  position: absolute;
  bottom: clamp(2rem, 5vw, 3.5rem);
  right: clamp(2rem, 4vw, 3.5rem);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.85rem;
  max-width: min(40ch, 50vw);
}
.aura__rail-caption {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  background: color-mix(in oklab, var(--surface) 78%, transparent);
  backdrop-filter: blur(14px);
  border: 1px solid var(--rule);
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  color: var(--t);
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.aura__rail-sigil {
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 96, 'WONK' 1;
  font-size: 0.95rem;
  color: var(--accent);
  letter-spacing: 0;
  text-transform: none;
  line-height: 1;
}
.aura__rail-text { color: var(--t-2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.aura__dots {
  display: flex;
  gap: 0.45rem;
  background: color-mix(in oklab, var(--surface) 60%, transparent);
  backdrop-filter: blur(12px);
  border: 1px solid var(--rule);
  padding: 0.5rem 0.6rem;
  border-radius: 999px;
}
.aura__dot {
  position: relative;
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: color-mix(in oklab, var(--t) 22%, transparent);
  overflow: hidden;
  transition: width 0.5s var(--ease-luxe), background 0.4s;
}
.aura__dot:hover { background: color-mix(in oklab, var(--t) 40%, transparent); }
.aura__dot.is-on { width: 56px; background: color-mix(in oklab, var(--t) 22%, transparent); }
.aura__dot-fill {
  position: absolute;
  inset: 0;
  width: 0;
  background: linear-gradient(90deg, var(--gold), var(--accent));
  transform-origin: left;
}
.aura__dot.is-on .aura__dot-fill {
  animation-name: dotFill;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  width: 100%;
}
@keyframes dotFill {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

/* --- scroll cue (right edge, rotated) --- */
.aura__scroll {
  position: absolute;
  right: var(--pad-x);
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  transform-origin: right center;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--gold-2);
  white-space: nowrap;
}
[data-theme="dark"] .aura__scroll { color: var(--gold); }
.aura__scroll-num { color: var(--accent); }
.aura__scroll-line {
  display: inline-block;
  width: 90px;
  height: 1px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  position: relative;
  overflow: hidden;
}
.aura__scroll-line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--accent);
  transform: translateX(-100%);
  animation: scrollSweep 3.4s var(--ease-luxe) infinite;
}
@keyframes scrollSweep {
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}

@media (max-width: 1100px) {
  .aura__scroll { display: none; }
}
@media (max-width: 900px) {
  .aura__deco { display: none; }
  .aura__title-line--ital { padding-left: 0; }
  .aura__meta { gap: 0.6rem; font-size: 0.58rem; }
  .aura__meta-rule { display: none; }
  .aura__rail {
    left: var(--pad-x);
    right: var(--pad-x);
    bottom: 1.6rem;
    align-items: stretch;
  }
  .aura__rail-text { max-width: 22ch; }
  .aura__wash {
    /* On small screens the type sits over the photo wholly — tint everywhere */
    background:
      linear-gradient(180deg,
        color-mix(in oklab, var(--bg-2) 78%, transparent) 0%,
        color-mix(in oklab, var(--bg-2) 45%, transparent) 35%,
        color-mix(in oklab, var(--bg) 38%, transparent) 70%,
        color-mix(in oklab, var(--bg) 70%, transparent) 100%);
  }
  [data-theme="dark"] .aura__wash {
    background:
      linear-gradient(180deg,
        color-mix(in oklab, var(--bg-deep) 78%, transparent) 0%,
        color-mix(in oklab, var(--bg-deep) 55%, transparent) 35%,
        color-mix(in oklab, var(--bg) 50%, transparent) 70%,
        color-mix(in oklab, var(--bg) 80%, transparent) 100%);
  }
}

/* ============================================================
   STORYBOARD — pinned horizontal scroll, theme-aware
   ============================================================ */
.story {
  position: relative;
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg-deep) 50%, var(--bg-2) 100%);
  transition: background 0.7s;
}
[data-theme="dark"] .story {
  background: linear-gradient(180deg, var(--bg-deep) 0%, var(--bg) 50%, var(--bg-2) 100%);
}

.story__pin {
  position: sticky;
  top: 0;
  height: 100vh;
  height: 100svh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: 84px;
}

.story__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1.4rem var(--pad-x) 1.2rem;
}
.story__progress {
  display: flex;
  gap: 1.2rem;
}
.story__tick {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  color: var(--t-mute);
  transition: color 0.4s;
}
.story__tick i {
  width: 26px;
  height: 1px;
  background: var(--rule-2);
  transition: background 0.4s, width 0.5s var(--ease-luxe);
}
.story__tick.is-on { color: var(--t); }
.story__tick.is-on i { background: var(--accent); width: 60px; }

.story__viewport {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.story__track {
  height: 100%;
  display: flex;
  width: max-content;
  will-change: transform;
}

.chapter {
  width: 100vw;
  height: 100%;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: clamp(2rem, 6vw, 6rem);
  padding: 0 var(--pad-x);
}
.chapter__media {
  position: relative;
  height: clamp(360px, 70vh, 720px);
  border-radius: 4px;
  border: 1px solid var(--rule);
  box-shadow: var(--shadow);
}
.chapter__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.chapter__num {
  position: absolute;
  top: clamp(1rem, 2vw, 1.6rem);
  left: clamp(1rem, 2vw, 1.6rem);
  z-index: 3;
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 144, 'WONK' 1;
  font-weight: 500;
  font-size: clamp(3rem, 6vw, 5rem);
  color: var(--bg-soft);
  line-height: 0.9;
  text-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);
}

.chapter__copy {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  max-width: 540px;
}
.chapter__eye {
  font-family: var(--f-mono);
  font-size: 0.72rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold-2);
}
[data-theme="dark"] .chapter__eye { color: var(--gold); }
.chapter__title {
  font-family: var(--f-display);
  font-weight: 600;
  font-variation-settings: 'opsz' 144, 'SOFT' 90, 'WONK' 0;
  font-size: clamp(2.4rem, 5.2vw, 4.4rem);
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: var(--t);
}
.chapter__title span:nth-child(even) {
  font-style: italic;
  font-variation-settings: 'opsz' 144, 'SOFT' 100, 'WONK' 1;
  color: var(--accent);
}
.chapter__body {
  font-family: var(--f-body);
  font-size: clamp(1rem, 1.2vw, 1.12rem);
  color: var(--t-3);
  max-width: 44ch;
  line-height: 1.6;
}
.chapter__step {
  font-size: 0.66rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--t-mute);
  margin-top: 0.4rem;
}

.story__foot {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem var(--pad-x) 1.6rem;
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--t-mute);
}
.story__hint-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--gold-2), transparent);
}

@media (max-width: 900px) {
  .story { height: auto !important; }
  .story__pin {
    position: static;
    height: auto;
    padding-top: 0;
  }
  .story__viewport { overflow-x: auto; scroll-snap-type: x mandatory; }
  .story__track { transform: none !important; }
  .chapter {
    scroll-snap-align: start;
    grid-template-columns: 1fr;
    gap: 1.4rem;
    padding-block: 2rem 3rem;
    height: auto;
  }
  .chapter__media { height: 56vh; }
  .story__head { flex-direction: column; align-items: flex-start; }
}
</style>
