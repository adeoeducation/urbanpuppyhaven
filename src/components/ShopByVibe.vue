<script setup>
import { vibes } from '../data/vibes.js'
</script>

<template>
  <section id="vibes" class="vibes section-pad">
    <div class="container">
      <header class="vibes__head">
        <span class="eyebrow reveal">Six Worlds · Shop by Vibe</span>
        <h2 class="section-title reveal" data-d="1">
          Identity first.
          <br/>
          <span class="ital">Fit second.</span>
        </h2>
        <p class="lede reveal" data-d="2">
          Six tiny universes. Pick the one your pet already lives in —
          each capsule is hand-built around a personality, not a size chart.
        </p>
      </header>

      <div class="vibes__grid">
        <a
          v-for="(v, i) in vibes"
          :key="v.id"
          href="#drop"
          class="vibe tilt reveal"
          :class="['vibe--' + i, 'vibe--' + v.tone]"
          :data-d="(i % 4) + 1"
        >
          <div class="vibe__face">
            <div class="vibe__photo media media--zoom media__noise media__veil">
              <img :src="v.image" :alt="v.name" loading="lazy" decoding="async" />
            </div>
            <div class="vibe__sheen" aria-hidden="true"></div>
            <span class="vibe__num">N° {{ String(i + 1).padStart(2, '0') }}</span>
            <div class="vibe__meta">
              <h3 class="vibe__name">{{ v.name }}</h3>
              <p class="vibe__line">{{ v.line }}</p>
              <span class="vibe__cta">
                <span class="vibe__cta-rule"></span>
                Enter the world
                <span class="arr">→</span>
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vibes {
  background: var(--bg);
  transition: background 0.7s;
}

.vibes__head {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-width: 720px;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

/* Asymmetric 4-col grid — t1 dominates */
.vibes__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 230px;
  gap: 1.2rem;
  perspective: 1400px;
}

.vibe { display: block; isolation: isolate; transform-style: preserve-3d; }
.vibe--0 { grid-column: span 2; grid-row: span 2; }
.vibe--1 { grid-column: span 1; grid-row: span 1; }
.vibe--2 { grid-column: span 1; grid-row: span 1; }
.vibe--3 { grid-column: span 2; grid-row: span 1; }
.vibe--4 { grid-column: span 2; grid-row: span 1; }
.vibe--5 { grid-column: span 2; grid-row: span 1; }

.vibe__face {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--rule);
  background: var(--surface);
  transform: rotateX(var(--rx, 0)) rotateY(var(--ry, 0));
  transition: transform 0.45s var(--ease-soft), box-shadow 0.5s, border-color 0.5s;
  will-change: transform;
  box-shadow: var(--shadow-sm);
}
.vibe:hover .vibe__face {
  box-shadow: var(--shadow), 0 0 0 1px var(--accent);
  border-color: transparent;
}

.vibe__photo {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.vibe__photo img { transform: scale(1.02); }
.vibe:hover .vibe__photo img { transform: scale(1.1); }

.vibe__sheen {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(40% 40% at var(--gx, 50%) var(--gy, 50%),
    color-mix(in oklab, #FFE9C4 60%, transparent), transparent 70%);
  mix-blend-mode: soft-light;
  opacity: 0;
  transition: opacity 0.5s;
}
[data-theme="dark"] .vibe__sheen {
  background: radial-gradient(40% 40% at var(--gx, 50%) var(--gy, 50%),
    color-mix(in oklab, var(--accent) 50%, transparent), transparent 70%);
  mix-blend-mode: screen;
}
.vibe:hover .vibe__sheen { opacity: 1; }

.vibe__num {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 3;
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #FFFAEE;
  background: color-mix(in oklab, var(--t) 45%, transparent);
  backdrop-filter: blur(8px);
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
}

.vibe__meta {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  z-index: 3;
  padding: 1.3rem 1.4rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  color: #FFFAEE;
  transform: translateY(0);
  transition: transform 0.55s var(--ease-soft);
}

.vibe__name {
  font-family: var(--f-display);
  font-weight: 600;
  font-variation-settings: 'opsz' 96, 'SOFT' 90, 'WONK' 0;
  font-size: clamp(1.4rem, 2vw, 2rem);
  line-height: 1;
  letter-spacing: -0.01em;
  color: #FFFAEE;
}
.vibe--0 .vibe__name { font-size: clamp(2rem, 3.4vw, 3.4rem); }

.vibe__line {
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 36, 'SOFT' 100, 'WONK' 1;
  font-size: 0.95rem;
  color: rgba(255, 250, 238, 0.85);
  line-height: 1.35;
  max-width: 38ch;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.5s, max-height 0.55s var(--ease-soft);
}
.vibe:hover .vibe__line { opacity: 1; max-height: 6rem; }

.vibe__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold-100);
  margin-top: 0.3rem;
}
.vibe__cta-rule {
  width: 18px;
  height: 1px;
  background: var(--gold-100);
  transition: width 0.5s var(--ease-luxe);
}
.vibe:hover .vibe__cta-rule { width: 36px; }
.vibe__cta .arr {
  font-family: var(--f-display);
  font-style: italic;
  transition: transform 0.4s;
}
.vibe:hover .vibe__cta .arr { transform: translateX(4px); }

@media (max-width: 1100px) {
  .vibes__grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 220px; }
  .vibe--0 { grid-column: span 2; grid-row: span 2; }
  .vibe--1, .vibe--2 { grid-column: span 1; grid-row: span 1; }
  .vibe--3, .vibe--4, .vibe--5 { grid-column: span 2; grid-row: span 1; }
}
@media (max-width: 640px) {
  .vibes__grid { grid-template-columns: 1fr; }
  .vibe { grid-column: span 1 !important; grid-row: span 1 !important; }
  .vibe__face { min-height: 280px; }
}
</style>
