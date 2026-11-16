<script setup lang="ts">
const facts = [
  { k: 'Base', v: 'Sabadell' },
  { k: 'Clientes', v: 'Catalunya y Andorra' },
  { k: 'Idiomas', v: 'Castellano y català' },
  { k: 'Herramientas', v: 'Vue, React, Next.js' },
]
</script>

<template>
  <section id="quien" class="about wrap" aria-labelledby="quien-title">
    <h2 id="quien-title" class="head title" v-reveal>Quién hay detrás</h2>
    <p class="lead intro" v-reveal="1">
      Soy Pau Monedero. Diseño, programo y mantengo los servidores yo mismo, así que hablas siempre con la persona que hace tu web.
    </p>

    <div class="tiles">
      <figure class="photo" v-reveal="2">
        <img
          src="/img/sabadell-eix-macia.webp"
          alt="El Eix Macià de Sabadell, con el lago y los edificios de oficinas al fondo"
          width="1600"
          height="1063"
          loading="lazy"
          decoding="async"
        />
        <p class="over">
          Trabajo desde Sabadell para negocios de Catalunya y Andorra. Si te va mejor vernos en persona, nos vemos.
        </p>
      </figure>

      <div class="side" v-reveal="3">
        <div class="map" role="img" aria-label="Mapa de Catalunya con Sabadell marcado">
          <span class="shape" aria-hidden="true"></span>
          <span class="dot" aria-hidden="true"></span>
          <span class="dot-label small" aria-hidden="true">Sabadell</span>
        </div>
        <dl class="facts">
          <div v-for="f in facts" :key="f.k">
            <dt class="small">{{ f.k }}</dt>
            <dd>{{ f.v }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding-block: var(--section);
  background: var(--yellow);
  color: var(--black);
}
.intro { max-width: 40ch; margin: 24px 0 72px; }

.tiles {
  display: grid;
  grid-template-columns: 8fr 4fr;
  gap: 16px;
  align-items: start;
}
.photo { position: relative; margin: 0; aspect-ratio: 16 / 10; overflow: hidden; }
.photo img { width: 100%; height: 100%; object-fit: cover; }
.over {
  position: absolute;
  top: 0;
  right: 0;
  width: 320px;
  margin: 0;
  padding: 20px;
  background: var(--paper);
  color: var(--black);
}

.map {
  position: relative;
  aspect-ratio: 4 / 3.75;
  background: var(--blue);
  overflow: hidden;
}
.shape {
  position: absolute;
  inset: 10%;
  background: var(--paper);
  -webkit-mask: url('/img/catalunya.png') center / contain no-repeat;
  mask: url('/img/catalunya.png') center / contain no-repeat;
}
/* Sabadell sits at 60.5% / 56.1% of the silhouette's box */
.dot, .dot-label { position: absolute; left: calc(10% + 80% * 0.605); top: calc(10% + 80% * 0.561); }
.dot {
  width: 14px; height: 14px;
  margin: -11px 0 0 -11px;
  border-radius: 50%;
  background: var(--yellow);
  border: 4px solid var(--blue);
  box-sizing: content-box;
}
.dot-label { margin: -10px 0 0 18px; color: var(--paper); font-weight: 500; }

.facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 16px;
  margin: 24px 0 0;
}
.facts dt { margin: 0 0 2px; }
.facts dd { margin: 0; font-weight: 500; }

@media (max-width: 860px) {
  .intro { margin-bottom: 40px; }
  .tiles { grid-template-columns: 1fr; gap: 24px; }
  .photo { aspect-ratio: auto; overflow: visible; }
  .photo img { aspect-ratio: 4 / 3; }
  .over { position: static; width: auto; padding: 16px 0 0; background: none; }
  .map { aspect-ratio: 3 / 2; }
}
</style>
