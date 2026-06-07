<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { theme, toggleTheme } from '../composables/useTheme.js'
import { useBag } from '../composables/useBag.js'

const bag = useBag()

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() { scrolled.value = window.scrollY > 32 }

onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const isDark = computed(() => theme.value === 'dark')
</script>

<template>
  <header class="hdr" :class="{ 'hdr--scrolled': scrolled }">
    <div class="container hdr__row">
      <a href="#top" class="hdr__brand" aria-label="UrbanPuppyHaven home">
        <span class="hdr__seal">
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" stroke-width="0.6"/>
            <circle cx="20" cy="20" r="14.5" fill="none" stroke="currentColor" stroke-width="0.4" stroke-dasharray="1.5 2"/>
            <text x="20" y="24" text-anchor="middle" font-family="Fraunces, serif" font-size="14" font-style="italic" fill="currentColor">u</text>
          </svg>
        </span>
        <span class="hdr__lockup">
          <span class="hdr__name">Urban Puppy Haven</span>
          <span class="hdr__sub">Atelier — Est. 2026</span>
        </span>
      </a>

      <nav class="hdr__nav" :class="{ 'is-open': menuOpen }" aria-label="Primary">
        <a href="#manifesto" @click="menuOpen = false"><span class="num">01</span>Manifesto</a>
        <a href="#vibes" @click="menuOpen = false"><span class="num">02</span>Worlds</a>
        <a href="#atelier" @click="menuOpen = false"><span class="num">03</span>Atelier</a>
        <a href="#lookbook" @click="menuOpen = false"><span class="num">04</span>Lookbook</a>
        <a href="#aura-physics" @click="menuOpen = false"><span class="num">05</span>AURA</a>
      </nav>

      <div class="hdr__cta">
        <span class="hdr__live"><i></i> Drop live</span>

        <button
          class="hdr__theme"
          :class="{ 'is-dark': isDark }"
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to daylight theme' : 'Switch to candlelight theme'"
          :aria-pressed="isDark"
          data-cursor
        >
          <span class="hdr__theme-track"></span>
          <span class="hdr__theme-thumb">
            <svg class="ico ico-sun" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
              <circle cx="12" cy="12" r="4.2"/>
              <path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"/>
            </svg>
            <svg class="ico ico-moon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
              <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>
            </svg>
          </span>
        </button>

        <a href="#atelier" class="hdr__bag magnetic" :aria-label="`Bag (${bag.count.value} items)`">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
            <path d="M5 8h14l-1.2 11.2A2 2 0 0 1 15.8 21H8.2a2 2 0 0 1-2-1.8L5 8Z"/>
            <path d="M9 8V6a3 3 0 0 1 6 0v2"/>
          </svg>
          <span class="hdr__bag-count" :class="{ 'is-on': bag.count.value > 0 }">{{ bag.count.value }}</span>
        </a>
        <button class="hdr__burger" :aria-expanded="menuOpen" aria-label="Toggle menu" @click="menuOpen = !menuOpen">
          <span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hdr {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  transition: background 0.6s var(--ease-soft), backdrop-filter 0.6s, border-color 0.6s, color 0.6s;
  border-bottom: 1px solid transparent;
  padding-top: 4px;
  color: var(--t);
}
.hdr--scrolled {
  background: color-mix(in oklab, var(--bg) 78%, transparent);
  backdrop-filter: blur(22px) saturate(1.15);
  border-bottom-color: var(--rule);
}

.hdr__row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  height: 84px;
  gap: 2rem;
}

.hdr__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  color: var(--t);
}
.hdr__seal {
  display: inline-block;
  width: 40px; height: 40px;
  color: var(--gold-2);
  transition: color 0.4s, transform 0.6s var(--ease-luxe);
}
[data-theme="dark"] .hdr__seal { color: var(--gold); }
.hdr__brand:hover .hdr__seal { color: var(--accent); transform: rotate(-22deg); }
.hdr__seal svg { width: 100%; height: 100%; }

.hdr__lockup { display: flex; flex-direction: column; line-height: 1; }
.hdr__name {
  font-family: var(--f-display);
  font-weight: 500;
  font-variation-settings: 'opsz' 48, 'SOFT' 50, 'WONK' 0;
  font-size: 1.05rem;
  letter-spacing: -0.005em;
  color: var(--t);
}
.hdr__sub {
  font-family: var(--f-mono);
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--gold-2);
  margin-top: 0.35rem;
  opacity: 0.85;
}
[data-theme="dark"] .hdr__sub { color: var(--gold); }

.hdr__nav {
  display: flex;
  gap: 2rem;
  justify-content: center;
  font-family: var(--f-mono);
  font-size: 0.74rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.hdr__nav a {
  position: relative;
  color: var(--t-3);
  display: inline-flex;
  align-items: baseline;
  gap: 0.4rem;
  transition: color 0.35s;
}
.hdr__nav a .num {
  font-size: 0.58rem;
  color: var(--gold-2);
  letter-spacing: 0.2em;
  opacity: 0.8;
  transition: opacity 0.35s;
}
[data-theme="dark"] .hdr__nav a .num { color: var(--gold); }
.hdr__nav a::after {
  content: '';
  position: absolute;
  left: 0; bottom: -7px;
  height: 1px;
  width: 0;
  background: linear-gradient(90deg, var(--gold), var(--accent));
  transition: width 0.5s var(--ease-luxe);
}
.hdr__nav a:hover { color: var(--t); }
.hdr__nav a:hover .num { opacity: 1; }
.hdr__nav a:hover::after { width: 100%; }

.hdr__cta { display: flex; align-items: center; gap: 0.8rem; justify-self: end; }

.hdr__live {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--f-mono);
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--t-3);
}
.hdr__live i {
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

/* ---- theme toggle ---- */
.hdr__theme {
  position: relative;
  width: 62px;
  height: 32px;
  border-radius: 999px;
  border: 1px solid var(--rule-2);
  background: var(--surface);
  display: flex;
  align-items: center;
  padding: 2px;
  transition: background 0.5s, border-color 0.5s;
  isolation: isolate;
}
.hdr__theme:hover { border-color: var(--accent); }
.hdr__theme-track {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--gold-100), var(--terra-100));
  opacity: 0.5;
  z-index: 0;
  transition: opacity 0.5s, background 0.6s;
}
[data-theme="dark"] .hdr__theme-track {
  background: linear-gradient(90deg, var(--terra-500), var(--gold-700));
  opacity: 0.55;
}
.hdr__theme-thumb {
  position: relative;
  z-index: 1;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--bg-soft);
  display: grid;
  place-items: center;
  color: var(--t);
  box-shadow: 0 4px 14px -4px color-mix(in oklab, var(--t) 30%, transparent);
  transform: translateX(0);
  transition: transform 0.55s var(--ease-spring), background 0.5s, color 0.5s;
}
.hdr__theme.is-dark .hdr__theme-thumb {
  transform: translateX(28px);
  background: var(--bg-deep);
  color: var(--gold);
}
.hdr__theme .ico {
  position: absolute;
  width: 15px; height: 15px;
  transition: opacity 0.45s var(--ease-soft), transform 0.55s var(--ease-spring);
}
.hdr__theme .ico-sun {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
.hdr__theme .ico-moon {
  opacity: 0;
  transform: rotate(-90deg) scale(0.4);
}
.hdr__theme.is-dark .ico-sun {
  opacity: 0;
  transform: rotate(90deg) scale(0.4);
}
.hdr__theme.is-dark .ico-moon {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

.hdr__bag {
  position: relative;
  width: 44px; height: 44px;
  border: 1px solid var(--rule-2);
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: border-color 0.4s, background 0.4s, color 0.4s;
  color: var(--t);
  background: transparent;
}
.hdr__bag:hover { border-color: var(--accent); color: var(--accent); background: color-mix(in oklab, var(--accent) 8%, transparent); }
.hdr__bag-count {
  position: absolute;
  top: -4px; right: -4px;
  background: var(--accent);
  color: var(--t-on-accent);
  font-family: var(--f-mono);
  font-size: 0.58rem;
  font-weight: 600;
  width: 18px; height: 18px;
  border-radius: 50%;
  display: grid; place-items: center;
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 0.35s, transform 0.4s var(--ease-spring);
}
.hdr__bag-count.is-on { opacity: 1; transform: scale(1); }

.hdr__burger {
  display: none;
  flex-direction: column;
  gap: 6px;
  width: 30px;
  padding: 8px 4px;
}
.hdr__burger span { display: block; height: 1.5px; width: 100%; background: var(--t); transition: transform 0.35s; }

@media (max-width: 980px) {
  .hdr__row { gap: 1rem; }
  .hdr__nav {
    position: fixed;
    top: 84px; left: 0; right: 0;
    flex-direction: column;
    background: color-mix(in oklab, var(--bg) 92%, transparent);
    backdrop-filter: blur(22px);
    padding: 2.4rem var(--pad-x) 3rem;
    gap: 1.2rem;
    font-size: 1.4rem;
    letter-spacing: 0.06em;
    transform: translateY(-110%);
    transition: transform 0.55s var(--ease-luxe);
    border-bottom: 1px solid var(--rule);
  }
  .hdr__nav.is-open { transform: translateY(0); }
  .hdr__nav a { padding-block: 0.4rem; }
  .hdr__burger { display: flex; }
  .hdr__live { display: none; }
}

@media (max-width: 640px) {
  .hdr__sub { display: none; }
}
</style>
