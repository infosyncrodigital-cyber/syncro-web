<script setup lang="ts">
// One chapter per project, each on the darkest tone of its own screenshot.
const chapters = [
  {
    id: 'adriryan',
    title: 'Un salón en cuatro idiomas',
    text: 'Català, castellano, français e English, porque en Andorra la clienta puede llegar de cualquier sitio. Con su Instagram dentro de la web.',
    url: 'https://adriryan.syncrodigital.es',
    field: '#2e2a28',
    alt: 'La web de Adri Ryan Salon vista en un móvil',
  },
  {
    id: 'arlegal',
    title: 'Primera en Google',
    text: 'Quien busca «AR Legal Andorra» la encuentra la primera, con la ficha de empresa verificada y el teléfono a un toque.',
    url: 'https://arlegalandorra.com',
    field: '#1e1811',
    alt: 'La web de AR Legal vista en un móvil',
  },
  {
    id: 'nudo',
    title: 'Una tienda sin comisiones',
    text: 'Piezas cosidas a mano en Barcelona. Los pedidos llegan por email a la tienda, sin pagar un porcentaje a ninguna plataforma.',
    url: 'https://nudobcn.com',
    field: '#33282b',
    alt: 'La tienda online de Nudō vista en un móvil',
  },
  {
    id: 'andrea',
    title: 'Un portfolio para el vídeo',
    text: 'Fondo negro, tipografía grande y sus piezas en primer plano. En tres idiomas.',
    url: 'https://andreasaezmontero.es',
    field: '#0b0b0b',
    alt: 'El portfolio de Andrea Sáez Montero visto en un móvil',
  },
]
</script>

<template>
  <section class="showcase" aria-labelledby="ch-adriryan">
    <article
      v-for="(c, i) in chapters"
      :key="c.id"
      class="chapter"
      :style="{ '--field': c.field }"
      v-reveal
    >
      <div class="ground" aria-hidden="true"></div>
      <component :is="i === 0 ? 'h2' : 'h3'" :id="`ch-${c.id}`" class="head ch-title">{{ c.title }}</component>
      <figure class="phone">
        <img
          :src="`/trabajos/${c.id}-m.webp`"
          :alt="c.alt"
          width="640"
          height="853"
          loading="lazy"
          decoding="async"
        />
      </figure>
      <p class="ch-text">{{ c.text }}</p>
      <a :href="c.url" target="_blank" rel="noopener" class="link ch-link">Ver la web <span aria-hidden="true">↗</span></a>
    </article>
  </section>
</template>

<style scoped>
.chapter {
  position: relative;
  min-height: 100svh;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 24px 32px;
  padding: 32px;
  color: var(--paper);
  overflow: hidden;
  isolation: isolate;
}
.ground {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: var(--field);
  transform: scale(0.96);
  transition: transform 0.8s var(--ease-out);
}
.chapter.is-in .ground, html:not(.js) .ground { transform: none; }
.js .chapter[data-reveal] { opacity: 1; transform: none; }

.ch-title { grid-column: 1; grid-row: 1; max-width: 18ch; font-size: var(--step-lead); }
.phone {
  grid-column: 2;
  grid-row: 1 / 4;
  align-self: center;
  margin: 0;
  width: min(506px, calc(75svh * 0.75));
  aspect-ratio: 3 / 4;
  overflow: hidden;
  transform: scale(0.92);
  transition: transform 0.8s var(--ease-out);
}
.chapter.is-in .phone, html:not(.js) .phone { transform: none; }
.phone img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
.ch-text { grid-column: 1; grid-row: 3; align-self: end; max-width: 32ch; margin: 0; }
.ch-link { grid-column: 3; grid-row: 3; align-self: end; justify-self: end; }

@media (max-width: 860px) {
  .chapter {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    padding: 56px var(--m);
    gap: 20px;
    min-height: auto;
  }
  .ch-title { grid-row: 1; }
  .phone { grid-column: 1; grid-row: 2; width: 80%; justify-self: center; }
  .ch-link { grid-column: 1; grid-row: 3; justify-self: start; }
  .ch-text { grid-row: 4; }
}
</style>
