<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const links = [
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#precios', label: 'Precios' },
  { href: '#como-trabajo', label: 'Cómo trabajo' },
]
</script>

<template>
  <header class="bar">
    <a href="#inicio" class="mark" @click="open = false">Syncro Digital</a>

    <nav class="tab" aria-label="Principal">
      <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
    </nav>

    <a href="#contacto" class="btn btn-yellow cta">Pedir presupuesto</a>

    <button
      class="menu"
      type="button"
      :aria-expanded="open"
      aria-controls="menu-movil"
      @click="open = !open"
    >{{ open ? 'Cerrar' : 'Menú' }}</button>

    <nav v-show="open" id="menu-movil" class="sheet" aria-label="Menú">
      <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false">{{ l.label }}</a>
      <a href="#contacto" class="btn btn-yellow" @click="open = false">Pedir presupuesto</a>
    </nav>
  </header>
</template>

<style scoped>
.bar {
  position: absolute;
  inset: 0 0 auto 0;
  z-index: 20;
  display: flex;
  align-items: stretch;
  height: 56px;
}
.mark {
  display: flex;
  align-items: center;
  padding-inline: var(--m) 24px;
  background: var(--black);
  color: var(--paper);
  font: 500 var(--step-body)/1 var(--text);
  letter-spacing: -0.01em;
  text-decoration: none;
  white-space: nowrap;
}
.tab {
  display: flex;
  align-items: center;
  gap: clamp(16px, 2vw, 32px);
  width: calc(42% - 1px);
  padding-inline: 24px;
  background: var(--yellow);
  color: var(--black);
}
.tab a {
  color: inherit;
  text-decoration: none;
  font-size: var(--step-small);
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  padding-block: 4px;
}
.tab a::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s var(--ease-out);
}
.tab a:hover::after { transform: scaleX(1); }
.cta {
  margin-left: auto;
  min-height: 56px;
  margin-right: 0;
}
.menu, .sheet { display: none; }

@media (max-width: 860px) {
  .tab, .cta { display: none; }
  .menu {
    display: block;
    margin-left: auto;
    padding-inline: var(--m);
    background: var(--yellow);
    color: var(--black);
    font: 500 var(--step-body)/1 var(--text);
    border: 0;
    cursor: pointer;
  }
  .sheet {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 20px;
    padding: 28px var(--m) 32px;
    background: var(--black);
    box-shadow: 0 24px 48px rgb(0 0 0 / 0.35); /* taste-skill-ignore: open menu floats */
  }
  .sheet[style*='display: none'] { display: none; }
  .sheet:not([style*='display: none']) { display: flex; }
  .sheet a:not(.btn) {
    color: var(--paper);
    font: 400 var(--step-head)/1.05 var(--display);
    text-decoration: none;
  }
}
</style>
