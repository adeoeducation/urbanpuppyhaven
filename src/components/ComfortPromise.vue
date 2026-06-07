<script setup>
const promises = [
  { num: '01', t: 'Breathable Fabrics',  d: 'Cotton-blend and bamboo linings keep them cool through every flex.' },
  { num: '02', t: 'Movement First',       d: 'Cut to follow tails, shoulders and stride — no pulling, no fighting.' },
  { num: '03', t: 'Soft Seams',           d: 'Flat-locked seams and rolled hems so nothing rubs the wrong way.' },
  { num: '04', t: 'Easy On / Easy Off',   d: 'Magnetic snaps and stretch openings. Dressing time stays calm.' },
  { num: '05', t: 'Vet-Reviewed Fit',     d: 'Every silhouette tested for breathing, vision and bathroom comfort.' },
  { num: '06', t: 'Zero Choke Hardware',  d: 'No loose buttons, no swallowable parts. Bullion-tone, brushed soft.' }
]
</script>

<template>
  <section id="promise" class="cp section-pad">
    <div class="container cp__shell">
      <aside class="cp__aside">
        <span class="eyebrow reveal">The Comfort Promise</span>
        <h2 class="section-title reveal" data-d="1">
          Style first.<br/>
          <span class="ital">Comfort always.</span>
        </h2>
        <p class="lede reveal" data-d="2">
          A photo only matters if your pet is happy in the frame. Every piece is
          engineered for a body that wags, jumps, naps and demands snacks — built
          to be worn, not endured.
        </p>

        <div class="cp__seal reveal" data-d="3" aria-hidden="true">
          <svg class="cp__seal-svg" viewBox="0 0 200 200">
            <defs>
              <path id="cpCircle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
            </defs>
            <text fill="currentColor" class="cp__seal-text">
              <textPath href="#cpCircle" startOffset="0">
                VET REVIEWED ✦ MADE FOR REAL PETS ✦ UPH ATELIER MMXXVI ✦
              </textPath>
            </text>
            <circle cx="100" cy="100" r="56" fill="none" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 4"/>
          </svg>
          <div class="cp__seal-core">
            <span class="cp__seal-mark">✦</span>
            <span class="cp__seal-line">Made for</span>
            <span class="cp__seal-bold">Real Pets</span>
          </div>
        </div>
      </aside>

      <ul class="cp__list">
        <li v-for="(p, i) in promises" :key="p.num" class="cp__row reveal" :data-d="(i % 4) + 1">
          <span class="cp__num numeral">{{ p.num }}</span>
          <div class="cp__body">
            <h3 class="cp__t">{{ p.t }}</h3>
            <p class="cp__d">{{ p.d }}</p>
          </div>
          <span class="cp__arr" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M5 12h14M14 6l5 6-5 6"/></svg>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.cp {
  background: var(--bg-2);
  transition: background 0.7s;
}

.cp__shell {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 6vw, 6rem);
  align-items: start;
}
@media (max-width: 1000px) { .cp__shell { grid-template-columns: 1fr; gap: 3rem; } }

.cp__aside {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  position: sticky;
  top: 110px;
}
@media (max-width: 1000px) { .cp__aside { position: static; } }

/* Aged-gold spinning seal */
.cp__seal {
  position: relative;
  width: 200px;
  height: 200px;
  margin-top: 1rem;
  color: var(--gold-2);
}
[data-theme="dark"] .cp__seal { color: var(--gold); }
.cp__seal-svg {
  width: 100%;
  height: 100%;
  animation: cpSpin 28s linear infinite;
}
@keyframes cpSpin { to { transform: rotate(360deg); } }
.cp__seal-text {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.cp__seal-core {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
}
.cp__seal-mark {
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 144, 'WONK' 1;
  color: var(--accent);
  font-size: 1.4rem;
  line-height: 1;
}
.cp__seal-line {
  font-family: var(--f-mono);
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--t-3);
  margin-top: 0.2rem;
}
.cp__seal-bold {
  font-family: var(--f-display);
  font-weight: 600;
  font-variation-settings: 'opsz' 96, 'SOFT' 90, 'WONK' 0;
  font-size: 1.05rem;
  color: var(--t);
  line-height: 1;
  letter-spacing: -0.01em;
}

/* Promise list */
.cp__list {
  list-style: none;
  display: flex;
  flex-direction: column;
}
.cp__row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.4rem;
  padding: 1.4rem 0;
  border-top: 1px solid var(--rule);
  position: relative;
  transition: padding-left 0.5s var(--ease-luxe);
}
.cp__row:last-child { border-bottom: 1px solid var(--rule); }
.cp__row::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, color-mix(in oklab, var(--accent) 8%, transparent), transparent);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s;
}
.cp__row:hover { padding-left: 0.6rem; }
.cp__row:hover::before { opacity: 1; }

.cp__num {
  font-size: 0.7rem;
  color: var(--gold-2);
  letter-spacing: 0.28em;
  text-transform: uppercase;
}
[data-theme="dark"] .cp__num { color: var(--gold); }

.cp__t {
  font-family: var(--f-display);
  font-weight: 600;
  font-variation-settings: 'opsz' 96, 'SOFT' 80, 'WONK' 0;
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  letter-spacing: -0.01em;
  color: var(--t);
  margin-bottom: 0.3rem;
}
.cp__d {
  font-family: var(--f-body);
  font-size: 0.95rem;
  color: var(--t-3);
  line-height: 1.55;
}

.cp__arr {
  color: var(--gold-2);
  opacity: 0.4;
  transition: opacity 0.5s, transform 0.5s var(--ease-luxe), color 0.5s;
}
[data-theme="dark"] .cp__arr { color: var(--gold); }
.cp__row:hover .cp__arr {
  opacity: 1;
  transform: translateX(6px);
  color: var(--accent);
}
</style>
