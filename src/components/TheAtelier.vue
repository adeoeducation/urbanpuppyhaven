<script setup>
// The Atelier — the full shop experience.
// Welcoming intro · species toggle · sort · filter rail · product grid with
// hover detail panel · product drawer with size/color picker → bag.

import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue'
import { sizes, categories, colorways, worlds, sortOptions } from '../services/catalog/constants.js'
import { useBag } from '../composables/useBag.js'
import { useCatalog } from '../composables/useCatalog.js'

const bag = useBag()
const catalog = useCatalog()

const filters = reactive({
  species: 'all',
  vibes: [],
  categories: [],
  sizes: [],
  colors: []
})
const sortBy = ref('curator')
const showMobileFilters = ref(false)

function toggle(group, value) {
  const arr = filters[group]
  const i = arr.indexOf(value)
  if (i >= 0) arr.splice(i, 1)
  else arr.push(value)
}

function reset() {
  filters.species = 'all'
  filters.vibes.splice(0)
  filters.categories.splice(0)
  filters.sizes.splice(0)
  filters.colors.splice(0)
  sortBy.value = 'curator'
}

const activeCount = computed(() =>
  (filters.species !== 'all' ? 1 : 0)
  + filters.vibes.length
  + filters.categories.length
  + filters.sizes.length
  + filters.colors.length
)

const visible = computed(() => {
  let list = catalog.products.value.filter((p) => {
    if (filters.species !== 'all' && p.species !== filters.species && p.species !== 'both') return false
    if (filters.vibes.length && !filters.vibes.includes(p.vibe)) return false
    if (filters.categories.length && !filters.categories.includes(p.category)) return false
    if (filters.sizes.length && !filters.sizes.some((s) => p.sizes.includes(s))) return false
    if (filters.colors.length && !filters.colors.some((c) => p.colors.includes(c))) return false
    return true
  })

  switch (sortBy.value) {
    case 'newest':     list = [...list].sort((a, b) => b.drop - a.drop); break
    case 'price-asc':  list = [...list].sort((a, b) => a.price - b.price); break
    case 'price-desc': list = [...list].sort((a, b) => b.price - a.price); break
    case 'rare':       list = [...list].sort((a, b) => a.editionMax - b.editionMax); break
    default: break
  }
  return list
})

// ---- product drawer ----

const open = ref(null)
const drawerSize = ref(null)
const drawerColor = ref(null)
const drawerAdded = ref(false)

function openProduct(p) {
  open.value = p
  drawerSize.value = null
  drawerColor.value = p.colors[0]
  drawerAdded.value = false
  document.body.style.overflow = 'hidden'
}

function closeDrawer() {
  open.value = null
  document.body.style.overflow = ''
}

function chooseSize(p, e) {
  e?.stopPropagation()
  openProduct(p)
}

function addFromDrawer() {
  if (!open.value || !drawerSize.value) return
  bag.add(open.value, { size: drawerSize.value, color: drawerColor.value })
  drawerAdded.value = true
  setTimeout(() => { drawerAdded.value = false }, 1800)
}

function onKey(e) {
  if (e.key === 'Escape') closeDrawer()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

watch(showMobileFilters, (v) => {
  document.body.style.overflow = v ? 'hidden' : (open.value ? 'hidden' : '')
})
</script>

<template>
  <section id="atelier" class="at section-pad">
    <!-- ==================== HEADER ==================== -->
    <div class="container at__head">
      <span class="eyebrow reveal">The Atelier · Open Now</span>
      <h2 class="section-title reveal" data-d="1">
        Welcome in.<br/>
        <span class="ital">Stay a while.</span>
      </h2>
      <p class="lede reveal" data-d="2">
        Every piece below is hand-cut, hand-numbered, and built for a body that wags.
        Filter, sort, hover, choose — and we'll wrap it like a love letter.
      </p>
    </div>

    <!-- ==================== TOOLBAR ==================== -->
    <div class="container at__bar reveal" data-d="3">
      <div class="at__species" role="tablist" aria-label="Species">
        <button
          v-for="s in ['all', 'dog', 'cat']"
          :key="s"
          role="tab"
          :class="{ 'is-on': filters.species === s }"
          :aria-selected="filters.species === s"
          @click="filters.species = s"
        >
          <span class="at__species-ico" v-if="s !== 'all'">{{ s === 'dog' ? '◐' : '◑' }}</span>
          {{ s === 'all' ? 'All' : s === 'dog' ? 'Dogs' : 'Cats' }}
        </button>
      </div>

      <div class="at__meta">
        <span class="at__count numeral">{{ String(visible.length).padStart(2, '0') }} pieces</span>
        <span v-if="activeCount > 0" class="at__active">
          · {{ activeCount }} filter{{ activeCount === 1 ? '' : 's' }} on
          <button class="at__clear" @click="reset">clear</button>
        </span>
      </div>

      <div class="at__tools">
        <button class="at__filter-btn" @click="showMobileFilters = true" aria-label="Open filters">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <path d="M4 6h16M7 12h10M10 18h4"/>
          </svg>
          Filters <span v-if="activeCount > 0" class="at__filter-badge">{{ activeCount }}</span>
        </button>
        <div class="at__sort">
          <label class="at__sort-k">Sort</label>
          <div class="at__sort-wrap">
            <select v-model="sortBy" class="at__sort-sel">
              <option v-for="o in sortOptions" :key="o.id" :value="o.id">{{ o.label }}</option>
            </select>
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" class="at__sort-caret">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== BODY (RAIL + GRID) ==================== -->
    <div class="container at__body">
      <!-- FILTER RAIL -->
      <aside
        class="at__rail"
        :class="{ 'is-open': showMobileFilters }"
        aria-label="Filters"
      >
        <header class="at__rail-head">
          <span class="eyebrow">Filters</span>
          <button class="at__rail-close" @click="showMobileFilters = false" aria-label="Close filters">×</button>
        </header>

        <div class="at__fg">
          <h4 class="at__fg-k">World</h4>
          <div class="at__chips">
            <button
              v-for="w in worlds"
              :key="w.id"
              :class="['at__chip', { 'is-on': filters.vibes.includes(w.id) }]"
              @click="toggle('vibes', w.id)"
            >
              {{ w.name }}
            </button>
          </div>
        </div>

        <div class="at__fg">
          <h4 class="at__fg-k">Category</h4>
          <div class="at__chips">
            <button
              v-for="c in categories"
              :key="c"
              :class="['at__chip', { 'is-on': filters.categories.includes(c) }]"
              @click="toggle('categories', c)"
            >
              {{ c }}
            </button>
          </div>
        </div>

        <div class="at__fg">
          <h4 class="at__fg-k">Size</h4>
          <div class="at__sz-row">
            <button
              v-for="s in sizes"
              :key="s"
              :class="['at__sz-btn', { 'is-on': filters.sizes.includes(s) }]"
              @click="toggle('sizes', s)"
            >
              {{ s }}
            </button>
          </div>
        </div>

        <div class="at__fg">
          <h4 class="at__fg-k">Colorway</h4>
          <div class="at__sw-row">
            <button
              v-for="(c, key) in colorways"
              :key="key"
              :class="['at__sw', { 'is-on': filters.colors.includes(key) }]"
              :style="{ '--c': c.hex }"
              :aria-label="c.name"
              :title="c.name"
              @click="toggle('colors', key)"
            >
              <span class="at__sw-dot"></span>
              <span class="at__sw-name">{{ c.name }}</span>
            </button>
          </div>
        </div>

        <button class="at__reset" @click="reset" v-if="activeCount > 0">
          ↺ Reset all filters
        </button>

        <div class="at__notes">
          <span class="numeral">N.B.</span>
          <p>Free shipping over $80. Every piece comes with a hand-pressed edition tag and a complimentary fit-finder card.</p>
        </div>
      </aside>

      <!-- GRID -->
      <div class="at__grid-wrap">
        <div v-if="visible.length === 0" class="at__empty">
          <h3 class="editorial">No pieces match — yet.</h3>
          <p>Try widening the filter, or <button class="at__empty-link" @click="reset">reset everything</button>.</p>
        </div>

        <div v-else class="at__grid">
          <article
            v-for="(p) in visible"
            :key="p.id"
            class="ap"
            @click="openProduct(p)"
            tabindex="0"
            :aria-label="`${p.name} — view details`"
          >
            <div class="ap__media">
              <img class="ap__img ap__img--a" :src="p.image" :alt="p.name" loading="lazy" decoding="async" />
              <img class="ap__img ap__img--b" :src="p.altImage" alt="" loading="lazy" decoding="async" />
              <span class="ap__badge">{{ p.badge }}</span>
              <span class="ap__edition numeral">{{ p.edition }}</span>
            </div>

            <!-- panel: static base + hover expansion -->
            <div class="ap__panel">
              <div class="ap__static">
                <div class="ap__row">
                  <h3 class="ap__name">{{ p.name }}</h3>
                  <span class="ap__price numeral">${{ p.price }}</span>
                </div>
                <p class="ap__line">{{ p.line }}</p>
              </div>

              <div class="ap__expand">
                <p class="ap__desc">{{ p.description }}</p>

                <div class="ap__attr">
                  <span class="ap__attr-k">Sizes</span>
                  <div class="ap__sz-list">
                    <span
                      v-for="s in sizes"
                      :key="s"
                      v-show="p.sizes.includes(s)"
                      :class="['ap__sz', { 'is-low': p.sizeStock[s] === 'low', 'is-sold': p.sizeStock[s] === 'sold' }]"
                      :title="p.sizeStock[s] === 'sold' ? `${s} — sold out` : p.sizeStock[s] === 'low' ? `${s} — low stock` : `${s} — in stock`"
                    >
                      {{ s }}
                    </span>
                  </div>
                </div>

                <div class="ap__attr">
                  <span class="ap__attr-k">{{ p.colors.length }} colorway{{ p.colors.length > 1 ? 's' : '' }}</span>
                  <div class="ap__sw-list">
                    <span
                      v-for="c in p.colors"
                      :key="c"
                      class="ap__color"
                      :style="{ background: colorways[c].hex }"
                      :title="colorways[c].name"
                    ></span>
                    <span class="ap__color-names">
                      {{ p.colors.map(c => colorways[c].name).join(' · ') }}
                    </span>
                  </div>
                </div>

                <div class="ap__attr">
                  <span class="ap__attr-k">Material</span>
                  <span class="ap__material">{{ p.material }}</span>
                </div>

                <button class="ap__add" @click="chooseSize(p, $event)">
                  <span class="ap__add-default">Choose size <span class="arr">→</span></span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- ==================== DRAWER ==================== -->
    <Teleport to="body">
      <transition name="dr">
        <div v-if="open" class="dr" role="dialog" aria-modal="true">
          <div class="dr__back" @click="closeDrawer"></div>
          <aside class="dr__pane" @click.stop>
            <button class="dr__close" @click="closeDrawer" aria-label="Close">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>
            </button>

            <div class="dr__media">
              <img :src="open.image" :alt="open.name" />
              <span class="dr__badge">{{ open.badge }}</span>
              <span class="dr__edition numeral">{{ open.edition }}</span>
            </div>

            <div class="dr__body">
              <span class="dr__eye">{{ worlds.find(w => w.id === open.vibe)?.name }} · {{ open.category }}</span>
              <h3 class="dr__name">{{ open.name }}</h3>
              <p class="dr__line">{{ open.line }}</p>
              <p class="dr__desc">{{ open.description }}</p>

              <div class="dr__price">
                <span class="dr__price-v numeral">${{ open.price }}</span>
                <span class="dr__price-k">Numbered piece of {{ open.editionMax }}</span>
              </div>

              <div class="dr__group">
                <div class="dr__group-head">
                  <span class="dr__group-k">Size</span>
                  <span class="dr__group-v">{{ drawerSize || 'Select one' }}</span>
                </div>
                <div class="dr__sz">
                  <button
                    v-for="s in sizes"
                    :key="s"
                    v-show="open.sizes.includes(s)"
                    :class="[
                      'dr__sz-btn',
                      { 'is-on': drawerSize === s, 'is-low': open.sizeStock[s] === 'low', 'is-sold': open.sizeStock[s] === 'sold' }
                    ]"
                    :disabled="open.sizeStock[s] === 'sold'"
                    @click="open.sizeStock[s] !== 'sold' && (drawerSize = s)"
                  >
                    {{ s }}
                    <span v-if="open.sizeStock[s] === 'low'" class="dr__sz-tag">low</span>
                  </button>
                </div>
              </div>

              <div class="dr__group">
                <div class="dr__group-head">
                  <span class="dr__group-k">Colorway</span>
                  <span class="dr__group-v">{{ colorways[drawerColor]?.name }}</span>
                </div>
                <div class="dr__sw">
                  <button
                    v-for="c in open.colors"
                    :key="c"
                    :class="['dr__sw-btn', { 'is-on': drawerColor === c }]"
                    :style="{ '--c': colorways[c].hex }"
                    :aria-label="colorways[c].name"
                    @click="drawerColor = c"
                  ></button>
                </div>
              </div>

              <div class="dr__meta">
                <div><span>Material</span><strong>{{ open.material }}</strong></div>
                <div><span>Edition</span><strong>{{ open.edition }}</strong></div>
                <div><span>Made for</span><strong>{{ open.species === 'both' ? 'Dogs & Cats' : open.species === 'dog' ? 'Dogs' : 'Cats' }}</strong></div>
              </div>

              <button class="dr__add" :class="{ 'is-done': drawerAdded }" :disabled="!drawerSize" @click="addFromDrawer">
                <span class="dr__add-default">
                  {{ drawerSize ? 'Add to bag' : 'Select a size' }} <span class="arr">→</span>
                </span>
                <span class="dr__add-done">
                  ✓ In your bag
                </span>
              </button>

              <p class="dr__fine">
                Vet-reviewed fit · Free shipping over $80 · 30-day exchanges
              </p>
            </div>
          </aside>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<style scoped>
.at {
  background: var(--bg-soft);
  transition: background 0.7s;
  position: relative;
}
[data-theme="dark"] .at { background: var(--bg-2); }

/* ==================== HEADER ==================== */
.at__head {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-width: 760px;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

/* ==================== TOOLBAR ==================== */
.at__bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.4rem;
  padding-bottom: 1.6rem;
  margin-bottom: 1.8rem;
  border-bottom: 1px solid var(--rule);
}

.at__species {
  display: inline-flex;
  background: var(--surface);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 4px;
}
.at__species button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.95rem;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  border-radius: 999px;
  color: var(--t-3);
  transition: background 0.4s, color 0.4s;
}
.at__species button.is-on {
  background: var(--t);
  color: var(--bg-soft);
}
.at__species-ico {
  font-size: 0.75rem;
  color: var(--accent);
}
.at__species .is-on .at__species-ico { color: var(--gold); }

.at__meta {
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--t-3);
}
.at__count { color: var(--t); }
.at__active { color: var(--accent); }
.at__clear {
  margin-left: 0.4rem;
  text-decoration: underline;
  text-underline-offset: 3px;
  color: var(--t-2);
  font: inherit;
}
.at__clear:hover { color: var(--accent); }

.at__tools {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

.at__filter-btn {
  display: none;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.95rem;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  border: 1px solid var(--rule-2);
  border-radius: 999px;
  background: var(--surface);
  color: var(--t);
}
.at__filter-badge {
  background: var(--accent);
  color: var(--t-on-accent);
  font-size: 0.6rem;
  width: 18px; height: 18px;
  border-radius: 50%;
  display: inline-grid;
  place-items: center;
}

.at__sort {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
}
.at__sort-k {
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--t-3);
}
.at__sort-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.at__sort-sel {
  appearance: none;
  border: 1px solid var(--rule-2);
  background: var(--surface);
  color: var(--t);
  font-family: var(--f-mono);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.55rem 2.2rem 0.55rem 0.95rem;
  border-radius: 999px;
  cursor: pointer;
}
.at__sort-sel:focus { outline: 0; border-color: var(--accent); }
.at__sort-caret {
  position: absolute;
  right: 0.9rem;
  pointer-events: none;
  color: var(--t-3);
}

/* ==================== BODY ==================== */
.at__body {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: start;
}

/* ==================== FILTER RAIL ==================== */
.at__rail {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding-bottom: 2rem;
}
.at__rail-head {
  display: none;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--rule);
  margin-bottom: 0.4rem;
}
.at__rail-close {
  font-size: 1.5rem;
  line-height: 1;
  color: var(--t);
  width: 32px; height: 32px;
  border-radius: 50%;
  display: grid; place-items: center;
  border: 1px solid var(--rule-2);
}

.at__fg { display: flex; flex-direction: column; gap: 0.7rem; }
.at__fg-k {
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold-2);
}
[data-theme="dark"] .at__fg-k { color: var(--gold); }

.at__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.at__chip {
  padding: 0.45rem 0.8rem;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: 1px solid var(--rule-2);
  border-radius: 999px;
  background: transparent;
  color: var(--t-2);
  transition: background 0.35s, color 0.35s, border-color 0.35s;
}
.at__chip:hover { border-color: var(--accent); color: var(--accent); }
.at__chip.is-on {
  background: var(--t);
  color: var(--bg-soft);
  border-color: transparent;
}

.at__sz-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.at__sz-btn {
  min-width: 38px;
  padding: 0.4rem 0.55rem;
  font-family: var(--f-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  border: 1px solid var(--rule-2);
  border-radius: 6px;
  background: transparent;
  color: var(--t-2);
  transition: background 0.35s, color 0.35s, border-color 0.35s;
}
.at__sz-btn:hover { border-color: var(--accent); }
.at__sz-btn.is-on {
  background: var(--t);
  color: var(--bg-soft);
  border-color: transparent;
}

.at__sw-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 0.7rem;
}
.at__sw {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  color: var(--t-2);
  background: transparent;
  text-align: left;
  padding: 0.25rem 0;
  transition: color 0.3s;
}
.at__sw-dot {
  display: inline-block;
  width: 16px; height: 16px;
  border-radius: 50%;
  background: var(--c);
  box-shadow: 0 0 0 1px var(--rule-2);
  transition: box-shadow 0.3s, transform 0.4s var(--ease-spring);
}
.at__sw:hover .at__sw-dot { transform: scale(1.12); box-shadow: 0 0 0 1px var(--accent); }
.at__sw.is-on .at__sw-dot { box-shadow: 0 0 0 2px var(--accent); }
.at__sw.is-on { color: var(--t); }

.at__reset {
  align-self: flex-start;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  padding: 0.5rem 0;
}
.at__reset:hover { text-decoration: underline; text-underline-offset: 3px; }

.at__notes {
  display: flex;
  gap: 0.7rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--rule);
  font-family: var(--f-body);
  font-size: 0.82rem;
  color: var(--t-3);
  line-height: 1.55;
}
.at__notes span {
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  color: var(--gold-2);
  flex-shrink: 0;
  padding-top: 0.2rem;
}
[data-theme="dark"] .at__notes span { color: var(--gold); }

/* ==================== GRID ==================== */
.at__grid-wrap { min-width: 0; }
.at__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 2vw, 1.6rem);
}
@media (max-width: 1200px) { .at__grid { grid-template-columns: repeat(2, 1fr); } }

.at__empty {
  padding: 4rem 0;
  text-align: center;
  color: var(--t-3);
}
.at__empty h3 {
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 96, 'WONK' 1;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: var(--t);
  margin-bottom: 0.8rem;
}
.at__empty-link {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ==================== PRODUCT CARD ==================== */
.ap {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--rule);
  background: var(--surface);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: box-shadow 0.5s, border-color 0.5s, transform 0.5s var(--ease-luxe);
  outline: 0;
}
.ap:focus-visible { box-shadow: 0 0 0 2px var(--accent); border-color: transparent; }
.ap:hover {
  box-shadow: var(--shadow), 0 0 0 1px var(--accent);
  border-color: transparent;
  transform: translateY(-3px);
}

.ap__media {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: var(--bg-tonal);
  isolation: isolate;
}
.ap__img {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: opacity 0.7s var(--ease-soft), transform 1s var(--ease-soft);
}
.ap__img--a { opacity: 1; }
.ap__img--b { opacity: 0; }
.ap:hover .ap__img--a { opacity: 0; transform: scale(1.03); }
.ap:hover .ap__img--b { opacity: 1; transform: scale(1.06); }

.ap__badge {
  position: absolute;
  top: 0.85rem; left: 0.85rem;
  z-index: 3;
  font-family: var(--f-mono);
  font-size: 0.6rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  background: var(--accent);
  color: var(--t-on-accent);
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  font-weight: 600;
}
.ap__edition {
  position: absolute;
  top: 0.95rem; right: 0.95rem;
  z-index: 3;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  color: var(--bg-soft);
  background: color-mix(in oklab, #0E0905 50%, transparent);
  backdrop-filter: blur(8px);
  padding: 0.32rem 0.55rem;
  border-radius: 999px;
}

/* panel — slides up on hover */
.ap__panel {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  z-index: 4;
  background: color-mix(in oklab, var(--bg-soft) 92%, transparent);
  backdrop-filter: blur(14px);
  border-top: 1px solid var(--rule);
  padding: 0.95rem 1.1rem 1.05rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.ap__static { display: flex; flex-direction: column; gap: 0.3rem; }
.ap__row {
  display: flex;
  align-items: baseline;
  gap: 1rem;
}
.ap__name {
  font-family: var(--f-display);
  font-weight: 600;
  font-variation-settings: 'opsz' 96, 'SOFT' 80, 'WONK' 0;
  font-size: 1.05rem;
  letter-spacing: -0.005em;
  color: var(--t);
  flex: 1;
  line-height: 1.1;
}
.ap__price {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 500;
}
.ap__line {
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 36, 'WONK' 1;
  font-size: 0.85rem;
  color: var(--t-3);
}

.ap__expand {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s var(--ease-luxe), opacity 0.35s 0.05s var(--ease-soft);
}
.ap:hover .ap__expand, .ap:focus-visible .ap__expand {
  max-height: 360px;
  opacity: 1;
}
.ap__expand::before {
  content: '';
  display: block;
  height: 1px;
  background: var(--rule);
  margin-top: 0.2rem;
}
.ap__desc {
  font-family: var(--f-body);
  font-size: 0.83rem;
  color: var(--t-2);
  line-height: 1.5;
}

.ap__attr {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.ap__attr-k {
  font-family: var(--f-mono);
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold-2);
}
[data-theme="dark"] .ap__attr-k { color: var(--gold); }

.ap__sz-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
.ap__sz {
  position: relative;
  min-width: 30px;
  padding: 0.25rem 0.45rem;
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  border: 1px solid var(--rule-2);
  border-radius: 4px;
  color: var(--t);
  text-align: center;
}
.ap__sz.is-low::after {
  content: '';
  position: absolute;
  top: -2px; right: -2px;
  width: 6px; height: 6px;
  background: var(--accent);
  border-radius: 50%;
}
.ap__sz.is-sold {
  color: var(--t-mute);
  text-decoration: line-through;
  border-style: dashed;
}

.ap__sw-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 0.65rem;
}
.ap__color {
  width: 14px; height: 14px;
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--rule-2);
  display: inline-block;
}
.ap__color-names {
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 36, 'WONK' 1;
  font-size: 0.78rem;
  color: var(--t-3);
}

.ap__material {
  font-family: var(--f-body);
  font-size: 0.78rem;
  color: var(--t-3);
  font-style: italic;
}

.ap__add {
  margin-top: 0.2rem;
  align-self: flex-start;
  padding: 0.55rem 0.95rem;
  background: var(--t);
  color: var(--bg-soft);
  font-family: var(--f-mono);
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  transition: background 0.4s, transform 0.4s var(--ease-spring);
  position: relative;
}
.ap__add:hover { background: var(--accent); color: var(--t-on-accent); transform: translateY(-1px); }
.ap__add .arr {
  font-family: var(--f-display);
  font-style: italic;
  font-size: 0.85rem;
  transition: transform 0.3s;
}
.ap__add:hover .arr { transform: translateX(3px); }
.ap__add-default { display: inline-flex; align-items: center; gap: 0.4rem; }
.ap__add-done {
  position: absolute;
  inset: 0;
  display: grid; place-items: center;
  background: var(--accent);
  color: var(--t-on-accent);
  border-radius: 999px;
  opacity: 0;
  transition: opacity 0.3s;
}
.ap__add.is-added .ap__add-done { opacity: 1; }

/* ==================== DRAWER ==================== */
.dr {
  position: fixed;
  inset: 0;
  z-index: 600;
  display: flex;
  justify-content: flex-end;
  font-family: var(--f-body);
}
.dr__back {
  position: absolute;
  inset: 0;
  background: color-mix(in oklab, var(--ink, #0B0907) 45%, transparent);
  backdrop-filter: blur(6px);
}
.dr__pane {
  position: relative;
  width: min(560px, 100vw);
  max-width: 100vw;
  height: 100vh;
  background: var(--bg-soft);
  color: var(--t);
  overflow-y: auto;
  box-shadow: -40px 0 100px -30px rgba(0,0,0,0.35);
  display: flex;
  flex-direction: column;
}

.dr__close {
  position: absolute;
  top: 1rem; right: 1rem;
  z-index: 4;
  width: 40px; height: 40px;
  border-radius: 50%;
  display: grid; place-items: center;
  background: color-mix(in oklab, var(--bg-soft) 80%, transparent);
  border: 1px solid var(--rule);
  backdrop-filter: blur(8px);
  color: var(--t);
}
.dr__close:hover { background: var(--accent); color: var(--t-on-accent); border-color: transparent; }

.dr__media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--bg-tonal);
  flex-shrink: 0;
}
.dr__media img { width: 100%; height: 100%; object-fit: cover; }
.dr__badge {
  position: absolute;
  top: 1rem; left: 1rem;
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  background: var(--accent);
  color: var(--t-on-accent);
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
}
.dr__edition {
  position: absolute;
  bottom: 1rem; left: 1rem;
  font-size: 0.66rem;
  letter-spacing: 0.22em;
  color: var(--bg-soft);
  background: color-mix(in oklab, #0E0905 55%, transparent);
  backdrop-filter: blur(8px);
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
}

.dr__body {
  padding: clamp(1.4rem, 2.5vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.dr__eye {
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold-2);
}
[data-theme="dark"] .dr__eye { color: var(--gold); }

.dr__name {
  font-family: var(--f-display);
  font-weight: 600;
  font-variation-settings: 'opsz' 144, 'SOFT' 80, 'WONK' 0;
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  letter-spacing: -0.02em;
  line-height: 0.98;
  color: var(--t);
}
.dr__line {
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 36, 'WONK' 1;
  font-size: 1.05rem;
  color: var(--accent);
}
.dr__desc {
  font-size: 0.95rem;
  color: var(--t-2);
  line-height: 1.6;
}

.dr__price {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 1rem;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.dr__price-v {
  font-family: var(--f-display);
  font-weight: 500;
  font-variation-settings: 'opsz' 96, 'SOFT' 80, 'WONK' 0;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  color: var(--t);
}
.dr__price-k {
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--t-3);
}

.dr__group { display: flex; flex-direction: column; gap: 0.6rem; }
.dr__group-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.dr__group-k { color: var(--gold-2); }
[data-theme="dark"] .dr__group-k { color: var(--gold); }
.dr__group-v { color: var(--t); letter-spacing: 0.06em; }

.dr__sz {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.dr__sz-btn {
  position: relative;
  min-width: 48px;
  padding: 0.7rem 0.9rem;
  font-family: var(--f-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  border: 1px solid var(--rule-2);
  border-radius: 6px;
  color: var(--t);
  background: transparent;
  transition: background 0.35s, color 0.35s, border-color 0.35s;
}
.dr__sz-btn:hover:not(:disabled) { border-color: var(--accent); }
.dr__sz-btn.is-on {
  background: var(--t);
  color: var(--bg-soft);
  border-color: transparent;
}
.dr__sz-btn.is-low { border-style: dashed; }
.dr__sz-btn.is-sold {
  color: var(--t-mute);
  text-decoration: line-through;
  cursor: not-allowed;
  border-style: dashed;
}
.dr__sz-tag {
  position: absolute;
  top: -7px; right: -7px;
  background: var(--accent);
  color: var(--t-on-accent);
  font-size: 0.55rem;
  letter-spacing: 0.18em;
  padding: 0.15rem 0.35rem;
  border-radius: 999px;
  text-transform: uppercase;
}

.dr__sw {
  display: flex;
  gap: 0.5rem;
}
.dr__sw-btn {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: var(--c);
  box-shadow: 0 0 0 1px var(--rule-2);
  transition: box-shadow 0.35s, transform 0.35s var(--ease-spring);
}
.dr__sw-btn:hover { transform: scale(1.1); }
.dr__sw-btn.is-on { box-shadow: 0 0 0 2px var(--accent); transform: scale(1.05); }

.dr__meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding-block: 1rem;
  border-top: 1px solid var(--rule);
}
.dr__meta > div { display: flex; flex-direction: column; gap: 0.25rem; }
.dr__meta span {
  font-family: var(--f-mono);
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold-2);
}
[data-theme="dark"] .dr__meta span { color: var(--gold); }
.dr__meta strong {
  font-family: var(--f-body);
  font-weight: 500;
  font-size: 0.85rem;
  color: var(--t);
}

.dr__add {
  position: relative;
  margin-top: 0.4rem;
  padding: 1.1rem 1.4rem;
  background: var(--t);
  color: var(--bg-soft);
  font-family: var(--f-mono);
  font-size: 0.78rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  transition: background 0.45s, transform 0.5s var(--ease-spring);
  overflow: hidden;
}
.dr__add:hover:not(:disabled) { background: var(--accent); color: var(--t-on-accent); transform: translateY(-2px); }
.dr__add:disabled {
  opacity: 0.58;
  cursor: not-allowed;
}
.dr__add .arr {
  font-family: var(--f-display);
  font-style: italic;
  font-size: 1.1rem;
  transition: transform 0.3s;
}
.dr__add:hover .arr { transform: translateX(4px); }
.dr__add-default { display: inline-flex; align-items: center; gap: 0.6rem; }
.dr__add-done {
  position: absolute;
  inset: 0;
  display: grid; place-items: center;
  background: var(--accent);
  color: var(--t-on-accent);
  opacity: 0;
  transition: opacity 0.35s;
}
.dr__add.is-done .dr__add-done { opacity: 1; }

.dr__fine {
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--t-mute);
  text-align: center;
  margin-top: 0.3rem;
}

/* drawer transition */
.dr-enter-active, .dr-leave-active { transition: opacity 0.35s; }
.dr-enter-active .dr__pane, .dr-leave-active .dr__pane {
  transition: transform 0.45s var(--ease-luxe);
}
.dr-enter-from { opacity: 0; }
.dr-enter-from .dr__pane { transform: translateX(20%); }
.dr-leave-to { opacity: 0; }
.dr-leave-to .dr__pane { transform: translateX(20%); }

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1024px) {
  .at__body { grid-template-columns: 1fr; }
  .at__filter-btn { display: inline-flex; }
  .at__rail {
    position: fixed;
    inset: 0 auto 0 0;
    width: min(360px, 90vw);
    background: var(--bg-soft);
    z-index: 500;
    padding: 1.6rem;
    overflow-y: auto;
    transform: translateX(-100%);
    transition: transform 0.45s var(--ease-luxe);
    box-shadow: 30px 0 80px -20px rgba(0,0,0,0.25);
    gap: 1.6rem;
  }
  .at__rail.is-open { transform: translateX(0); }
  .at__rail-head { display: flex; }
}
@media (max-width: 720px) {
  .at__grid { grid-template-columns: 1fr; }
  .at__bar { gap: 0.8rem; }
  .at__tools { width: 100%; justify-content: space-between; }
  .ap__expand {
    /* On small screens reveal the panel always (no hover) */
    max-height: 360px;
    opacity: 1;
  }
}
</style>
