<script setup lang="ts">
import { ui, openLegal } from '../store'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="cols wrap">
      <div>
        <p class="first">Contacto</p>
        <ul>
          <li><a href="mailto:info@syncrodigital.es" class="link">info@syncrodigital.es</a></li>
          <li>Sabadell, Barcelona</li>
        </ul>
      </div>
      <div>
        <p class="first">En esta página</p>
        <ul>
          <li><a href="#trabajos" class="link">Trabajos</a></li>
          <li><a href="#precios" class="link">Precios</a></li>
          <li><a href="#como-trabajo" class="link">Cómo trabajo</a></li>
          <li><a href="#preguntas" class="link">Preguntas</a></li>
        </ul>
      </div>
      <div>
        <p class="first">Redes</p>
        <ul>
          <li><a href="https://www.instagram.com/syncrodigital_" target="_blank" rel="noopener" class="link">Instagram</a></li>
          <li><a href="https://www.linkedin.com/company/syncro-digital-es/" target="_blank" rel="noopener" class="link">LinkedIn</a></li>
        </ul>
      </div>
      <div>
        <p class="first">Legal</p>
        <ul>
          <li><a href="#" class="link" @click.prevent="openLegal('legal')">Aviso legal</a></li>
          <li><a href="#" class="link" @click.prevent="openLegal('privacy')">Privacidad</a></li>
          <li><a href="#" class="link" @click.prevent="openLegal('cookies')">Cookies</a></li>
          <li><button type="button" class="link as-link" @click="ui.cookiesOpen = true">Cambiar mis cookies</button></li>
        </ul>
      </div>
    </div>

    <div class="bottom wrap">
      <svg class="word" viewBox="0 0 1000 132" role="img" aria-label="Syncro Digital">
        <text x="0" y="112" textLength="1000" lengthAdjust="spacing">Syncro Digital</text>
      </svg>
      <p class="small legal">
        © {{ year }} Syncro Digital · Pau Monedero Roigé.
        Foto de Sabadell: «Sabadell - Eix Macià», de Xavigivax,
        <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener" class="link">CC BY-SA 3.0</a>,
        vía <a href="https://commons.wikimedia.org/w/index.php?curid=2782047" target="_blank" rel="noopener" class="link">Wikimedia Commons</a>.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: sticky;
  bottom: 0;
  z-index: 0;
  min-height: 100svh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: var(--paper);
  color: var(--blue);
}
.cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px var(--gap);
  padding-top: 40px;
}
.first { margin: 0 0 8px; color: var(--black); font-weight: 500; }
ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 4px; }
.as-link { background: none; border: 0; padding: 0; font: inherit; cursor: pointer; text-align: left; }

.bottom { grid-row: 3; padding-bottom: 20px; }
.word { display: block; width: 100%; height: auto; overflow: visible; }
.word text { font-family: var(--display); font-size: 150px; fill: var(--blue); letter-spacing: -0.02em; }
.legal { margin: 20px 0 0; color: var(--blue); max-width: 90ch; }

@media (max-width: 860px) {
  .cols { grid-template-columns: 1fr 1fr; gap: 32px 16px; }
  .footer { min-height: auto; grid-template-rows: auto auto auto; }
  .bottom { padding-top: 20svh; }
}
</style>
