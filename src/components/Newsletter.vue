<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const email = ref('')
const submitted = ref(false)
const focused = ref(false)
const ph = ref('you@thehaven.com')
const phWords = ['you@thehaven.com', 'main.character@haven.co', 'little.legend@uph.studio', 'numbered@thedrop.io']
let phIdx = 0
let phTimer = null

function onSubmit(e) {
  e.preventDefault()
  if (!email.value) return
  submitted.value = true
}

onMounted(() => {
  phTimer = setInterval(() => {
    phIdx = (phIdx + 1) % phWords.length
    ph.value = phWords[phIdx]
  }, 2800)
})
onUnmounted(() => { if (phTimer) clearInterval(phTimer) })
</script>

<template>
  <section class="nl section-pad">
    <div class="container nl__shell">
      <div class="nl__copy">
        <span class="eyebrow reveal">The List · No Spam</span>
        <h2 class="section-title reveal" data-d="1">
          The next drop<br/>
          <span class="ital">lands in your inbox first.</span>
        </h2>
        <p class="lede reveal" data-d="2">
          Early access to limited runs, hand-numbered tags, studio dispatches and
          the occasional treat code. One email per drop. Never more.
        </p>
        <ul class="nl__bullets reveal" data-d="3">
          <li><span class="nl__dot"></span> First look at every numbered piece</li>
          <li><span class="nl__dot"></span> Studio dispatches & behind-the-frame</li>
          <li><span class="nl__dot"></span> Subscriber-only restock keys</li>
        </ul>
      </div>

      <form class="nl__form reveal" data-d="2" @submit="onSubmit">
        <div class="nl__card">
          <div class="nl__corner nl__corner--tl"></div>
          <div class="nl__corner nl__corner--tr"></div>
          <div class="nl__corner nl__corner--bl"></div>
          <div class="nl__corner nl__corner--br"></div>

          <transition name="nl-swap" mode="out-in">
            <div v-if="!submitted" key="form" class="nl__form-inner">
              <span class="eyebrow nl__eye">Drop 002 — waitlist</span>

              <label class="nl__field" :class="{ 'is-focus': focused }">
                <span class="nl__label">Email</span>
                <input
                  v-model="email"
                  type="email"
                  required
                  autocomplete="email"
                  :placeholder="ph"
                  @focus="focused = true"
                  @blur="focused = false"
                />
                <span class="nl__underline"></span>
              </label>

              <button type="submit" class="btn btn-primary nl__submit magnetic">
                Hold my piece <span class="arr">→</span>
              </button>

              <p class="nl__fine">By signing up you agree to receive marketing emails. Unsubscribe anytime.</p>
            </div>

            <div v-else key="done" class="nl__done">
              <span class="nl__seal">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 12l5 5L20 6"/>
                </svg>
              </span>
              <h3 class="nl__done-t">You're on the list.</h3>
              <p class="nl__done-d">
                Drop 002 is loading. Watch your inbox — and your sidewalk.
              </p>
              <span class="nl__done-num numeral">N° 0461 / 1200</span>
            </div>
          </transition>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.nl {
  background: var(--bg-deep);
  transition: background 0.7s;
}

.nl__shell {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}
@media (max-width: 900px) { .nl__shell { grid-template-columns: 1fr; } }

.nl__copy { display: flex; flex-direction: column; gap: 1.2rem; }

.nl__bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 0.4rem;
  padding-top: 1.4rem;
  border-top: 1px solid var(--rule);
}
.nl__bullets li {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: var(--f-mono);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--t-3);
}
.nl__dot {
  width: 6px;
  height: 6px;
  background: var(--accent);
  border-radius: 50%;
}

/* form card */
.nl__form { position: relative; }
.nl__card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: clamp(1.6rem, 3vw, 2.4rem);
  box-shadow: var(--shadow);
  isolation: isolate;
  overflow: hidden;
}
.nl__card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(50% 60% at 100% 0%, color-mix(in oklab, var(--accent) 12%, transparent), transparent 70%),
    radial-gradient(60% 70% at 0% 100%, color-mix(in oklab, var(--gold) 10%, transparent), transparent 70%);
  z-index: -1;
}
.nl__corner {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 1px solid var(--gold-2);
  opacity: 0.7;
}
[data-theme="dark"] .nl__corner { border-color: var(--gold); }
.nl__corner--tl { top: 8px; left: 8px; border-right: 0; border-bottom: 0; }
.nl__corner--tr { top: 8px; right: 8px; border-left: 0; border-bottom: 0; }
.nl__corner--bl { bottom: 8px; left: 8px; border-right: 0; border-top: 0; }
.nl__corner--br { bottom: 8px; right: 8px; border-left: 0; border-top: 0; }

.nl__form-inner {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.nl__eye { color: var(--accent); }
.nl__eye::before { background: var(--accent); opacity: 1; }

.nl__field {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-top: 0.5rem;
}
.nl__label {
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--t-3);
  transition: color 0.4s;
}
.nl__field.is-focus .nl__label { color: var(--accent); }
.nl__field input {
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--t);
  font-family: var(--f-display);
  font-weight: 500;
  font-variation-settings: 'opsz' 60, 'SOFT' 70, 'WONK' 0;
  font-size: clamp(1.5rem, 2.6vw, 2rem);
  letter-spacing: -0.01em;
  padding: 0.5rem 0;
  width: 100%;
}
.nl__field input::placeholder {
  color: var(--t-mute);
  font-style: italic;
  font-variation-settings: 'opsz' 60, 'WONK' 1;
  font-weight: 400;
  transition: color 0.5s;
}
.nl__underline {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1px;
  background: var(--rule-2);
  overflow: hidden;
}
.nl__underline::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, var(--gold), var(--accent));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s var(--ease-luxe);
}
.nl__field.is-focus .nl__underline::after { transform: scaleX(1); }

.nl__submit { align-self: flex-start; }
.nl__fine {
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  color: var(--t-mute);
  line-height: 1.5;
}

/* done state */
.nl__done {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;
}
.nl__seal {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--t-on-accent);
  display: grid;
  place-items: center;
  margin-bottom: 0.6rem;
}
.nl__done-t {
  font-family: var(--f-display);
  font-weight: 600;
  font-variation-settings: 'opsz' 96, 'SOFT' 90, 'WONK' 0;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: var(--t);
  letter-spacing: -0.015em;
}
.nl__done-d {
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 36, 'WONK' 1;
  font-size: 1.05rem;
  color: var(--t-3);
  max-width: 32ch;
}
.nl__done-num {
  margin-top: 0.6rem;
  font-size: 0.7rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold-2);
}
[data-theme="dark"] .nl__done-num { color: var(--gold); }

/* transition */
.nl-swap-enter-active, .nl-swap-leave-active {
  transition: opacity 0.4s var(--ease-soft), transform 0.5s var(--ease-soft);
}
.nl-swap-enter-from { opacity: 0; transform: translateY(8px); }
.nl-swap-leave-to   { opacity: 0; transform: translateY(-8px); }
</style>
