<script setup>
import { useCatalog } from '../composables/useCatalog.js'

const catalog = useCatalog()
const products = catalog.latestDropProducts
</script>

<template>
  <section id="drop" class="drop section-pad">
    <div class="container drop__shell">
      <aside class="drop__rail">
        <div class="drop__rail-inner">
          <span class="eyebrow reveal">Drop 001 · Live now</span>
          <h2 class="section-title reveal" data-d="1">
            Numbered.<br/>
            <span class="ital">Limited.</span><br/>
            Yours.
          </h2>
          <p class="lede reveal" data-d="2">
            Each piece is hand-numbered and capped at a small run.
            When a number sells out it is retired from the press.
          </p>
          <div class="drop__rail-stats reveal" data-d="3">
            <div>
              <span class="drop__stat-k">Pieces</span>
              <span class="drop__stat-v numeral">460</span>
            </div>
            <div>
              <span class="drop__stat-k">Studios</span>
              <span class="drop__stat-v numeral">02</span>
            </div>
            <div>
              <span class="drop__stat-k">Days left</span>
              <span class="drop__stat-v numeral">14</span>
            </div>
          </div>
          <a href="#atelier" class="btn btn-ghost magnetic reveal" data-d="4">
            Shop the full atelier <span class="arr">→</span>
          </a>
        </div>
      </aside>

      <ol class="drop__list">
        <li
          v-for="(p, i) in products"
          :key="p.id"
          class="prod reveal"
          :data-d="(i % 4) + 1"
        >
          <a href="#atelier" class="prod__inner">
            <div class="prod__media media media--zoom">
              <img class="prod__img prod__img--a" :src="p.image" :alt="p.name" loading="lazy" decoding="async" />
              <img class="prod__img prod__img--b" :src="p.altImage" :alt="''" loading="lazy" decoding="async" />
              <span class="prod__badge">{{ p.badge }}</span>
              <span class="prod__tag tag-num">{{ p.tag }}</span>
              <span class="prod__quick">
                <span class="dot"></span> Add to bag
              </span>
            </div>
            <div class="prod__meta">
              <span class="prod__idx numeral">{{ String(i + 1).padStart(2, '0') }} —</span>
              <h3 class="prod__name">{{ p.name }}</h3>
              <p class="prod__line">{{ p.line }}</p>
              <span class="prod__price numeral">${{ p.price }}</span>
            </div>
          </a>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.drop {
  background: var(--bg);
  transition: background 0.7s;
}

.drop__shell {
  display: grid;
  grid-template-columns: 0.85fr 1.3fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: flex-start;
}
@media (max-width: 1024px) {
  .drop__shell { grid-template-columns: 1fr; gap: 2.5rem; }
}

/* sticky rail */
.drop__rail {
  position: relative;
}
.drop__rail-inner {
  position: sticky;
  top: 110px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding-block: 0.5rem;
}
@media (max-width: 1024px) {
  .drop__rail-inner { position: static; }
}

.drop__rail-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 0.4rem;
  padding-top: 1.4rem;
  border-top: 1px solid var(--rule);
}
.drop__rail-stats > div { display: flex; flex-direction: column; gap: 0.3rem; }
.drop__stat-k {
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold-2);
}
[data-theme="dark"] .drop__stat-k { color: var(--gold); }
.drop__stat-v {
  font-family: var(--f-display);
  font-weight: 500;
  font-variation-settings: 'opsz' 96, 'SOFT' 80, 'WONK' 0;
  font-size: clamp(1.4rem, 2vw, 1.9rem);
  color: var(--t);
}

/* product list — alternating asymmetry */
.drop__list {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(1rem, 2.5vw, 2rem) clamp(1rem, 2.5vw, 2rem);
}
@media (max-width: 720px) { .drop__list { grid-template-columns: 1fr; } }

.prod { position: relative; }
.prod:nth-child(1) { transform: translateY(0); }
.prod:nth-child(2) { transform: translateY(3vw); }
.prod:nth-child(3) { transform: translateY(-1vw); }
.prod:nth-child(4) { transform: translateY(2vw); }
@media (max-width: 720px) {
  .prod:nth-child(n) { transform: none; }
}

.prod__inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--t);
}

.prod__media {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 4px;
  overflow: hidden;
  background: var(--bg-tonal);
  border: 1px solid var(--rule);
  isolation: isolate;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.5s, border-color 0.5s;
}
.prod:hover .prod__media {
  box-shadow: var(--shadow), 0 0 0 1px var(--accent);
  border-color: transparent;
}

.prod__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.7s var(--ease-soft), transform 1s var(--ease-soft);
}
.prod__img--a { opacity: 1; }
.prod__img--b { opacity: 0; }
.prod:hover .prod__img--a { opacity: 0; transform: scale(1.04); }
.prod:hover .prod__img--b { opacity: 1; transform: scale(1.06); }

.prod__badge {
  position: absolute;
  top: 0.9rem; left: 0.9rem;
  z-index: 3;
  font-family: var(--f-mono);
  font-size: 0.6rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  background: var(--accent);
  color: var(--t-on-accent);
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  font-weight: 600;
}
.prod__tag {
  position: absolute;
  top: 1rem; right: 1rem;
  z-index: 3;
  color: var(--bg-soft);
  background: color-mix(in oklab, #0E0905 50%, transparent);
  backdrop-filter: blur(8px);
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  font-size: 0.62rem;
}

.prod__quick {
  position: absolute;
  bottom: 0.9rem; left: 0.9rem; right: 0.9rem;
  z-index: 3;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  background: var(--bg-soft);
  color: var(--t);
  padding: 0.7rem 0.9rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.45s, transform 0.5s var(--ease-soft), background 0.4s, color 0.4s;
}
.prod__quick .dot {
  width: 7px; height: 7px;
  background: var(--accent);
  border-radius: 50%;
}
.prod:hover .prod__quick { opacity: 1; transform: none; }
.prod__quick:hover { background: var(--t); color: var(--bg-soft); }

.prod__meta {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: baseline;
  column-gap: 0.7rem;
  row-gap: 0.2rem;
}
.prod__idx {
  font-size: 0.7rem;
  color: var(--gold-2);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  grid-row: 1;
}
[data-theme="dark"] .prod__idx { color: var(--gold); }
.prod__name {
  font-family: var(--f-display);
  font-weight: 600;
  font-variation-settings: 'opsz' 96, 'SOFT' 80, 'WONK' 0;
  font-size: clamp(1.2rem, 1.5vw, 1.55rem);
  letter-spacing: -0.01em;
  color: var(--t);
  grid-row: 1;
}
.prod__price {
  font-size: 0.95rem;
  color: var(--accent);
  font-weight: 500;
  grid-row: 1;
}
.prod__line {
  grid-column: 1 / -1;
  grid-row: 2;
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 36, 'SOFT' 100, 'WONK' 1;
  font-size: 0.95rem;
  color: var(--t-3);
}
</style>
