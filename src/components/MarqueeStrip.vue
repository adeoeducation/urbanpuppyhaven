<script setup>
defineProps({ items: { type: Array, required: true } })
</script>

<template>
  <div class="ms" aria-hidden="true">
    <div class="ms__rule"></div>
    <div class="marquee">
      <div class="marquee__track">
        <template v-for="loop in 2" :key="loop">
          <span v-for="(item, i) in items" :key="loop + '-' + i" class="ms__item">
            <span class="ms__star">✦</span>
            <span class="ms__text">{{ item }}</span>
          </span>
        </template>
      </div>
    </div>
    <div class="ms__rule"></div>
  </div>
</template>

<style scoped>
.ms { background: var(--bg-deep); transition: background 0.7s; }
.ms__rule {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--rule-2), transparent);
}
.marquee {
  background: transparent;
  border-block: 0;
  padding-block: 1.4rem;
}
.ms__item {
  display: inline-flex;
  align-items: center;
  gap: 1.6rem;
  flex-shrink: 0;
}
.ms__star {
  color: var(--accent);
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 144, 'WONK' 1;
  font-size: 1.2rem;
}
.ms__text {
  font-family: var(--f-display);
  font-style: italic;
  font-variation-settings: 'opsz' 96, 'SOFT' 100, 'WONK' 1;
  font-weight: 500;
  font-size: clamp(1.4rem, 3vw, 2.4rem);
  letter-spacing: -0.01em;
  color: var(--t);
  white-space: nowrap;
}
</style>
