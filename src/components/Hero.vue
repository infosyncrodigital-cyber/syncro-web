<script setup lang="ts">
// The masthead is a mosaic of real websites built by Syncro Digital.
const tiles = [
  { kind: 'img', src: '/trabajos/adriryan-d1.webp', alt: 'Portada de la web de Adri Ryan Salon, peluquería en Andorra', cls: 't-a' },
  { kind: 'color', cls: 't-yellow' },
  { kind: 'img', src: '/trabajos/arlegal-d1.webp', alt: 'Portada de la web de AR Legal, despacho jurídico en Andorra', cls: 't-b' },
  { kind: 'color', cls: 't-black' },
  { kind: 'img', src: '/trabajos/nudo-d1.webp', alt: 'Portada de la tienda online de Nudō', cls: 't-c' },
  { kind: 'color', cls: 't-pink' },
  { kind: 'img', src: '/trabajos/andrea-d2.webp', alt: 'Sección de trabajos del portfolio de Andrea Sáez Montero', cls: 't-d' },
  { kind: 'color', cls: 't-surface' },
  { kind: 'color', cls: 't-black2' },
]
</script>

<template>
  <section id="inicio" class="hero" aria-labelledby="hero-title">
    <div class="band">
      <div
        v-for="(t, i) in tiles"
        :key="i"
        class="tile"
        :class="t.cls"
      >
        <img
          v-if="t.kind === 'img'"
          :src="t.src"
          :alt="t.alt"
          width="1200"
          height="750"
          :fetchpriority="i === 0 ? 'high' : undefined"
          :loading="i === 0 ? undefined : 'eager'"
        />
      </div>
    </div>

    <div class="below wrap">
      <div class="aside">
        <p class="lead stand">
          Syncro Digital: diseño, programo y mantengo la web de tu negocio, y dejo lista tu ficha de Google. Desde 600&nbsp;€.
        </p>
        <div class="actions">
          <a href="#contacto" class="btn btn-yellow">Pedir presupuesto <span class="arrow" aria-hidden="true">→</span></a>
          <a href="#trabajos" class="link">Ver trabajos</a>
        </div>
      </div>

      <h1 id="hero-title" class="display title">
        <span class="line"><span>Webs que salen </span></span>
        <span class="line"><span>en Google.</span></span>
      </h1>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: var(--blue);
}

/* ---- masthead band: gutterless 6 x 2 mosaic ---- */
.band {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: max(46svh, 320px);
}
.tile { overflow: hidden; position: relative; }
.tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  animation: drift 24s var(--ease-out) both;
}
.t-a { grid-column: 1 / 3; grid-row: 1; }
.t-yellow { grid-column: 3; grid-row: 1 / 3; background: var(--yellow); }
.t-b { grid-column: 4 / 6; grid-row: 1; }
.t-black { grid-column: 6; grid-row: 1; background: var(--black); }
.t-c { grid-column: 4; grid-row: 2; }
.t-pink { grid-column: 1; grid-row: 2; background: var(--pink); }
.t-d { grid-column: 2; grid-row: 2; }
.t-surface { grid-column: 5; grid-row: 2; background: var(--blue-2); }
.t-black2 { grid-column: 6; grid-row: 2; background: var(--black); }
.t-c img { object-position: 30% top; }

@keyframes drift {
  from { transform: scale(1.08); }
  to { transform: scale(1); }
}

/* ---- under the band: standfirst on the margin, title on the axis ---- */
.below {
  flex: 1;
  display: grid;
  grid-template-columns: 42fr 58fr;
  align-items: start;
  padding-top: clamp(32px, 4vw, 56px);
  padding-bottom: clamp(48px, 6vw, 96px);
}
.aside { padding-right: var(--gap); padding-top: 0.6em; }
.stand { max-width: 30ch; margin: 0 0 28px; }
.actions { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
.title {
  font-size: clamp(64px, 8.3vw, 128px);
  letter-spacing: -0.03em;
  line-height: 0.9;
  margin: 0;
  text-wrap: initial;
}
.line { display: block; overflow: hidden; white-space: nowrap; padding-bottom: 0.08em; margin-bottom: -0.08em; }
.line > span {
  display: block;
  animation: rise 0.9s var(--ease-out) both;
}
.line:nth-child(2) > span { animation-delay: 110ms; }
.aside { animation: fade 0.7s var(--ease-out) 0.45s both; }

@keyframes rise { from { transform: translateY(105%); } to { transform: none; } }
@keyframes fade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }

@media (max-width: 860px) {
  .band {
    grid-template-columns: repeat(3, 1fr);
    height: 38svh;
    min-height: 260px;
  }
  .t-a { grid-column: 1 / 3; grid-row: 1; }
  .t-yellow { grid-column: 3; grid-row: 1; }
  .t-black { grid-column: 1; grid-row: 2; }
  .t-c { grid-column: 2; grid-row: 2; }
  .t-pink { grid-column: 3; grid-row: 2; }
  .t-b, .t-d, .t-surface, .t-black2 { display: none; }

  .below {
    grid-template-columns: 1fr;
    align-content: start;
    padding-top: 36px;
    gap: 24px;
  }
  .title { order: -1; font-size: 13vw; max-width: none; }
  .aside { padding: 0; }
  .stand { font-size: var(--step-body); max-width: 34ch; margin-bottom: 24px; }
}
</style>
