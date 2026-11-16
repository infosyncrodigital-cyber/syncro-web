<script setup lang="ts">
const projects = [
  {
    name: 'Adri Ryan Salon',
    what: 'Peluquería · Andorra',
    year: '2026',
    url: 'https://adriryan.syncrodigital.es',
    shots: ['adriryan-d1', 'adriryan-d2', 'adriryan-d3', 'adriryan-d4'],
  },
  {
    name: 'AR Legal',
    what: 'Despacho jurídico · Andorra',
    year: '2026',
    url: 'https://arlegalandorra.com',
    shots: ['arlegal-d1', 'arlegal-d2', 'arlegal-d3', 'arlegal-d4', 'arlegal-d5'],
  },
  {
    name: 'Nudō',
    what: 'Tienda online · Barcelona',
    year: '2026',
    url: 'https://nudobcn.com',
    shots: ['nudo-d1', 'nudo-d3', 'nudo-d4', 'nudo-d5'],
  },
  {
    name: 'Andrea Sáez Montero',
    what: 'Portfolio audiovisual',
    year: '2026',
    url: 'https://andreasaezmontero.es',
    shots: ['andrea-d1', 'andrea-d2', 'andrea-d3'],
  },
]
</script>

<template>
  <section id="trabajos" class="work" aria-labelledby="trabajos-title">
    <div class="rail">
      <h2 id="trabajos-title" class="name">Trabajos</h2>
      <p class="note small">Cuatro webs publicadas este año. Cada una se abre en su dominio real.</p>
    </div>

    <ul class="list">
      <li v-for="(p, i) in projects" :key="p.name" class="project" v-reveal="i">
        <a :href="p.url" target="_blank" rel="noopener" class="strip" :aria-label="`${p.name}: abrir la web`">
          <img
            v-for="s in p.shots"
            :key="s"
            :src="`/trabajos/${s}.webp`"
            alt=""
            width="1200"
            height="750"
            loading="lazy"
            decoding="async"
          />
        </a>
        <p class="caption small">
          <a :href="p.url" target="_blank" rel="noopener" class="link">{{ p.name }}</a>
          <span class="what">{{ p.what }}</span>
          <span>{{ p.year }}</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.work {
  display: grid;
  grid-template-columns: minmax(150px, 13%) 1fr;
  column-gap: var(--gap);
  padding: var(--section) 0 var(--section) var(--m);
  background: var(--black);
  color: var(--paper);
}
.rail {
  position: sticky;
  top: 32px;
  align-self: start;
  padding-right: 8px;
}
.name {
  font: 400 var(--step-lead)/1.1 var(--display);
  font-size: var(--step-lead);
  margin: 0 0 16px;
}
.note { color: var(--muted); margin: 0; max-width: 18ch; }

.list { list-style: none; margin: 0; padding: 0; display: grid; gap: 45px; }
.strip {
  display: flex;
  gap: 8px;
  height: 190px;
  overflow: hidden;
  cursor: pointer;
}
.strip img {
  height: 190px;
  width: auto;
  flex: none;
  transition: transform 0.6s var(--ease-out);
}
.strip:hover img { transform: translateY(-4px); }
.caption {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: baseline;
  margin: 12px var(--m) 0 0;
}
.caption .what { color: var(--muted); }
.caption > :last-child { text-align: right; color: var(--muted); }

/* hovering one project steps the other pictures back; text stays legible */
.strip { transition: opacity 0.3s; }
.list:hover .project:not(:hover) .strip { opacity: 0.4; }

@media (max-width: 860px) {
  .work {
    grid-template-columns: 1fr;
    padding-left: var(--m);
    row-gap: 32px;
  }
  .rail { position: static; display: flex; justify-content: space-between; align-items: baseline; gap: 16px; padding-right: var(--m); }
  .name { margin: 0; }
  .note { max-width: 24ch; text-align: right; }
  .strip {
    height: 120px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }
  .strip::-webkit-scrollbar { display: none; }
  .strip img { height: 120px; scroll-snap-align: start; }
  .caption { grid-template-columns: 1fr auto; }
  .caption .what { display: none; }
  .list:hover .project:not(:hover) .strip { opacity: 1; }
}
</style>
