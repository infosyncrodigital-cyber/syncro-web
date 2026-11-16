<script setup lang="ts">
// Segment widths follow how long each stage really takes (in working days).
const stages = [
  { time: 'Media hora', grow: 0.1, color: 'var(--yellow)', ink: 'var(--black)', text: 'Primero, una llamada para ver qué necesitas y darte un precio cerrado.' },
  { time: 'Unas dos semanas', grow: 10, color: 'var(--paper)', ink: 'var(--black)', text: 'Después diseño y programo la web con tus textos y tus fotos.' },
  { time: 'Una semana', grow: 5, color: 'var(--pink)', ink: 'var(--black)', text: 'Luego la revisas en una dirección de prueba y ajusto lo que haga falta.' },
  { time: 'Un día', grow: 1, color: 'var(--black)', ink: 'var(--paper)', text: 'Por último la publico, la doy de alta en Google y dejo tu ficha al día.' },
]
</script>

<template>
  <section id="como-trabajo" class="process wrap" aria-labelledby="proceso-title">
    <h2 id="proceso-title" class="display title" v-reveal>De la llamada a Google</h2>

    <ol class="bar" data-ui>
      <li
        v-for="(s, i) in stages"
        :key="s.time"
        class="seg"
        :style="{ flexGrow: s.grow, '--c': s.color, '--k': s.ink }"
        v-reveal="i + 1"
      >
        <span class="block"><span class="time">{{ s.time }}</span></span>
        <span class="clause">{{ s.text }}</span>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.process {
  padding-block: var(--section);
  background: var(--blue);
}
.title {
  font-size: var(--step-display);
  margin: 0 0 64px;
  max-width: 14ch;
}
.bar {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 6px;
}
.seg {
  flex-basis: 0;
  min-width: 12%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.block {
  height: 22vh;
  min-height: 140px;
  background: var(--c);
  color: var(--k);
  padding: 20px;
  transform-origin: left;
}
.time { font: 400 var(--step-lead)/1.05 var(--display); display: block; max-width: 10ch; }
.clause { max-width: 22ch; }

@media (max-width: 860px) {
  .title { margin-bottom: 40px; }
  .bar { flex-direction: column; }
  .seg { min-width: 0; }
  .block { height: auto; min-height: 72px; display: flex; flex-direction: column; gap: 6px; padding: 16px; }
  .seg:nth-child(2) .block { min-height: 200px; }
  .seg:nth-child(3) .block { min-height: 120px; }
  .clause { max-width: none; margin-bottom: 12px; }
}
</style>
