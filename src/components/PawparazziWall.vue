<script setup>
import { wall } from '../data/wall.js'

// Subtle imperfection — each tile gets a tiny random-but-stable rotation
function tiltFor(i) {
  const seeds = [-1.2, 0.8, -0.6, 1.5, -1.8, 0.4, -0.9, 1.1]
  return seeds[i % seeds.length]
}
</script>

<template>
  <section id="wall" class="pw section-pad">
    <div class="container">
      <header class="pw__head">
        <span class="eyebrow reveal">The Pawparazzi Wall · Weekly</span>
        <h2 class="section-title reveal" data-d="1">
          Seen in the wild.<br/>
          <span class="ital">Tagged with love.</span>
        </h2>
        <p class="lede reveal" data-d="2">
          Real pets, real fits. Tag <strong class="pw__hash">#urbanpuppyhaven</strong>
          and we feature the freshest looks on the wall every Friday.
        </p>
      </header>

      <div class="pw__grid">
        <a
          v-for="(w, i) in wall"
          :key="w.handle"
          href="#"
          class="pw__tile reveal"
          :class="'pw__tile--' + w.span"
          :data-d="(i % 4) + 1"
          :style="{ '--tilt': tiltFor(i) + 'deg' }"
        >
          <div class="pw__photo media media--zoom media__noise media__veil">
            <img :src="w.image" :alt="w.handle" loading="lazy" decoding="async" />
            <span class="pw__handle">{{ w.handle }}</span>
            <span class="pw__heart">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/>
              </svg>
            </span>
            <span class="pw__caption">{{ w.caption }}</span>
          </div>
        </a>
      </div>

      <footer class="pw__cta">
        <a href="#" class="btn btn-ghost magnetic">Submit your fit <span class="arr">→</span></a>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.pw {
  background: var(--bg);
  transition: background 0.7s;
}

.pw__head {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-width: 760px;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}
.pw__hash {
  color: var(--accent);
  font-weight: 600;
}

.pw__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 180px;
  gap: 1rem;
}
@media (max-width: 900px) { .pw__grid { grid-template-columns: repeat(3, 1fr); grid-auto-rows: 160px; } }
@media (max-width: 600px) { .pw__grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 150px; } }

.pw__tile {
  display: block;
  transform: rotate(var(--tilt, 0)) translateY(0);
  transition: transform 0.6s var(--ease-luxe);
}
.pw__tile:hover {
  transform: rotate(0) translateY(-6px) scale(1.02);
  z-index: 2;
}
.pw__tile--tall   { grid-row: span 2; }
.pw__tile--wide   { grid-column: span 2; }
.pw__tile--square { /* default */ }

.pw__photo {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--rule);
  background: var(--bg-tonal);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.5s, border-color 0.5s;
}
.pw__tile:hover .pw__photo {
  box-shadow: var(--shadow), 0 0 0 1px var(--accent);
  border-color: transparent;
}
.pw__photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pw__handle {
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  z-index: 3;
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  color: #FFFAEE;
  background: color-mix(in oklab, #0E0905 50%, transparent);
  backdrop-filter: blur(8px);
  padding: 0.32rem 0.55rem;
  border-radius: 999px;
}

.pw__heart {
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  z-index: 3;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: color-mix(in oklab, #0E0905 50%, transparent);
  backdrop-filter: blur(8px);
  color: #FFFAEE;
  opacity: 0;
  transform: scale(0.6);
  transition: opacity 0.4s, transform 0.4s var(--ease-spring), color 0.3s;
}
.pw__tile:hover .pw__heart {
  opacity: 1;
  transform: scale(1);
}
.pw__tile:hover .pw__heart:hover { color: var(--accent-2); }

.pw__caption {
  position: absolute;
  left: 0.8rem;
  right: 0.8rem;
  bottom: 0.85rem;
  z-index: 3;
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 36, 'WONK' 1;
  font-size: 0.92rem;
  color: #FFFAEE;
  line-height: 1.3;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.4s, transform 0.4s var(--ease-soft);
}
.pw__tile:hover .pw__caption {
  opacity: 1;
  transform: none;
}

.pw__cta {
  display: flex;
  justify-content: center;
  margin-top: clamp(2.5rem, 5vw, 3.5rem);
}
</style>
