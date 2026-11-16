<script setup lang="ts">
const faqs = [
  {
    q: '¿Qué incluye la web de 600 €?',
    a: 'Diseño a medida con tus textos y fotos, versión para móvil, formulario de contacto, mapa y horarios, aviso legal y de cookies, SEO técnico y alta en Google Search Console. También reviso y completo tu ficha de Google Business. El dominio se paga aparte, a precio de coste.',
  },
  {
    q: '¿Y si luego quiero cambiar algo?',
    a: 'El mantenimiento incluye hasta seis cambios de contenido al año: precios, horarios, servicios, textos o fotos. Me lo pides por email y lo cambio yo. Las secciones nuevas o las funciones nuevas, como reservas online, se presupuestan aparte.',
  },
  {
    q: '¿Cuánto se tarda?',
    a: 'Unas tres semanas desde que tengo tus textos y tus fotos. Lo que más alarga una web es esperar el material, así que te digo desde el primer día qué necesito.',
  },
  {
    q: '¿Y si no tengo fotos buenas?',
    a: 'Las fotos son lo que más se nota. Si no tienes, te aconsejo cómo hacerlas con el móvil o te recomiendo a un fotógrafo. Lo que no hago es rellenar tu web con fotos de banco que no son tuyas.',
  },
  {
    q: '¿Para qué sirve la ficha de Google?',
    a: 'Es lo primero que aparece cuando alguien busca tu negocio o «peluquería cerca de mí»: el mapa, el horario, las reseñas y el botón de llamar. La dejo verificada, con las categorías bien puestas y enlazada a tu web.',
  },
  {
    q: '¿Trabajas fuera de Sabadell?',
    a: 'Sí. La mayoría de lo que hago es a distancia, y ya tengo clientes en Andorra y en Barcelona. Si hace falta vernos, nos vemos.',
  },
]
</script>

<template>
  <section id="preguntas" class="faq wrap" aria-labelledby="faq-title">
    <div class="row">
      <h2 id="faq-title" class="q heading">Preguntas frecuentes</h2>
      <span></span>
    </div>
    <div v-for="(f, i) in faqs" :key="f.q" class="row" v-reveal="i % 2">
      <h3 class="q">{{ f.q }}</h3>
      <p class="a">{{ f.a }}</p>
    </div>
  </section>
</template>

<style scoped>
.faq {
  padding-block: var(--section);
  background: var(--black);
  color: var(--paper);
  display: grid;
  gap: clamp(56px, 6vw, 84px);
}
.row {
  display: grid;
  grid-template-columns: 6fr 1fr 5fr;
  align-items: baseline;
}
.q {
  grid-column: 1;
  margin: 0;
  font: 400 var(--step-head)/1.05 var(--display);
  letter-spacing: -0.02em;
  max-width: 18ch;
  text-wrap: balance;
}
.heading { color: var(--muted); }
.a { grid-column: 3; margin: 0; max-width: 40ch; line-height: 1.55; }

@media (max-width: 860px) {
  .row { grid-template-columns: 1fr; gap: 12px; }
  .q { font-size: var(--step-lead); }
  .a { grid-column: 1; }
}
</style>
