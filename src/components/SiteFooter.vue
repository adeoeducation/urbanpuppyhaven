<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="ftr">
    <div class="container ftr__top">
      <div class="ftr__brand">
        <div class="ftr__seal">
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" stroke-width="0.6"/>
            <circle cx="20" cy="20" r="14.5" fill="none" stroke="currentColor" stroke-width="0.4" stroke-dasharray="1.5 2"/>
            <text x="20" y="24" text-anchor="middle" font-family="Fraunces, serif" font-size="14" font-style="italic" fill="currentColor">u</text>
          </svg>
        </div>
        <h3 class="ftr__word">Urban Puppy Haven</h3>
        <p class="ftr__tag">An editorial atelier for the four-legged.<br/>Numbered runs. Born famous.</p>
        <div class="ftr__social">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="TikTok">TT</a>
          <a href="#" aria-label="Pinterest">PN</a>
          <a href="#" aria-label="YouTube">YT</a>
        </div>
      </div>

      <div class="ftr__cols">
        <div>
          <h4>Shop</h4>
          <a href="#atelier">The Atelier</a>
          <a href="#drop">Drop 001</a>
          <a href="#vibes">Shop by Vibe</a>
          <a href="#atelier">Dogs</a>
          <a href="#atelier">Cats</a>
        </div>
        <div>
          <h4>Haven</h4>
          <a href="#lookbook">Lookbook</a>
          <a href="#wall">Pawparazzi Wall</a>
          <a href="#promise">Comfort Promise</a>
          <a href="#">Fit Finder</a>
          <a href="#">Our Story</a>
        </div>
        <div>
          <h4>Care</h4>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Sizing</a>
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
        </div>
        <div>
          <h4>Colophon</h4>
          <a href="#">Type by Fraunces & Bricolage</a>
          <a href="#">Studio · Brooklyn</a>
          <a href="#">Press kit</a>
          <a href="#">Wholesale</a>
        </div>
      </div>
    </div>

    <div class="ftr__giant">
      <span aria-hidden="true">URBAN</span>
      <span class="ftr__giant-dot" aria-hidden="true">·</span>
      <span class="italic" aria-hidden="true">puppy</span>
      <a
        href="/admin"
        class="ftr__giant-dot ftr__giant-dot--key"
        aria-label="Staff access"
      >·</a>
      <span aria-hidden="true">HAVEN</span>
    </div>

    <div class="container ftr__bottom">
      <span class="ftr__copy numeral">© {{ year }} UPH ATELIER · MADE FOR PETS WITH MOTION</span>
      <span class="ftr__legal">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Accessibility</a>
        <a href="#">Sitemap</a>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.ftr {
  background: var(--bg);
  border-top: 1px solid var(--rule);
  padding-top: clamp(3rem, 6vw, 5rem);
  position: relative;
  overflow: hidden;
  transition: background 0.7s, border-color 0.7s;
}

.ftr__top {
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  gap: 3rem;
  padding-bottom: 3rem;
}
@media (max-width: 900px) { .ftr__top { grid-template-columns: 1fr; gap: 2.5rem; } }

.ftr__brand {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.ftr__seal {
  width: 44px;
  height: 44px;
  color: var(--gold-2);
  margin-bottom: 0.4rem;
}
[data-theme="dark"] .ftr__seal { color: var(--gold); }
.ftr__seal svg { width: 100%; height: 100%; }

.ftr__word {
  font-family: var(--f-display);
  font-weight: 600;
  font-variation-settings: 'opsz' 96, 'SOFT' 80, 'WONK' 0;
  font-size: 1.4rem;
  letter-spacing: -0.005em;
  color: var(--t);
}
.ftr__tag {
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 36, 'WONK' 1;
  color: var(--t-3);
  line-height: 1.5;
  max-width: 32ch;
}

.ftr__social {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.6rem;
}
.ftr__social a {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border: 1px solid var(--rule-2);
  border-radius: 50%;
  font-family: var(--f-mono);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--t);
  transition: border-color 0.4s, background 0.4s, color 0.4s;
}
.ftr__social a:hover {
  background: var(--accent);
  border-color: transparent;
  color: var(--t-on-accent);
}

.ftr__cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
@media (max-width: 700px) { .ftr__cols { grid-template-columns: repeat(2, 1fr); gap: 2rem 1.5rem; } }

.ftr__cols > div { display: flex; flex-direction: column; gap: 0.55rem; }
.ftr__cols h4 {
  font-family: var(--f-mono);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold-2);
  margin-bottom: 0.6rem;
}
[data-theme="dark"] .ftr__cols h4 { color: var(--gold); }
.ftr__cols a {
  font-family: var(--f-body);
  font-size: 0.95rem;
  color: var(--t-2);
  transition: color 0.3s, padding-left 0.4s var(--ease-luxe);
}
.ftr__cols a:hover { color: var(--accent); padding-left: 0.3rem; }

/* GIANT brand name — the show-stopper sign-off */
.ftr__giant {
  font-family: var(--f-display);
  font-weight: 600;
  font-variation-settings: 'opsz' 144, 'SOFT' 100, 'WONK' 0;
  font-size: clamp(3.5rem, 16vw, 14rem);
  line-height: 0.85;
  letter-spacing: -0.045em;
  text-align: center;
  color: var(--t);
  padding-block: 1rem 1.6rem;
  user-select: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: clamp(0.4rem, 1vw, 1rem);
  background: linear-gradient(180deg,
    color-mix(in oklab, var(--accent) 0%, transparent) 0%,
    color-mix(in oklab, var(--accent) 60%, var(--t)) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}
.ftr__giant .italic {
  font-style: italic;
  font-variation-settings: 'opsz' 144, 'SOFT' 100, 'WONK' 1;
  font-weight: 400;
  color: var(--accent);
  -webkit-text-fill-color: var(--accent);
  font-size: 0.85em;
}
.ftr__giant-dot {
  color: var(--gold-2);
  -webkit-text-fill-color: var(--gold-2);
  font-size: 0.5em;
  vertical-align: middle;
}
[data-theme="dark"] .ftr__giant-dot { color: var(--gold); -webkit-text-fill-color: var(--gold); }
/* The second dot is a quiet staff door — visually identical, no link tells. */
.ftr__giant-dot--key {
  text-decoration: none;
  cursor: inherit;
  -webkit-text-fill-color: var(--gold-2);
}
[data-theme="dark"] .ftr__giant-dot--key { -webkit-text-fill-color: var(--gold); }

.ftr__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.4rem;
  padding-block: 1.5rem 2.5rem;
  border-top: 1px solid var(--rule);
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--t-3);
}
.ftr__legal { display: flex; gap: 1.6rem; }
.ftr__legal a:hover { color: var(--accent); }

@media (max-width: 700px) {
  .ftr__bottom { flex-direction: column; text-align: center; gap: 1rem; padding-block: 1.5rem 2rem; }
  .ftr__legal { flex-wrap: wrap; justify-content: center; }
}
</style>
