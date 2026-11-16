<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { ui } from '../store'

const tabs = [
  { id: 'legal', label: 'Aviso legal' },
  { id: 'privacy', label: 'Privacidad' },
  { id: 'cookies', label: 'Cookies' },
] as const

const dialog = ref<HTMLDivElement | null>(null)
let lastFocus: Element | null = null

watch(
  () => ui.legalOpen,
  async (open) => {
    if (open) {
      lastFocus = document.activeElement
      document.body.style.overflow = 'hidden'
      await nextTick()
      dialog.value?.focus()
    } else {
      document.body.style.overflow = ''
      ;(lastFocus as HTMLElement | null)?.focus?.()
    }
  },
)

function close() {
  ui.legalOpen = false
}
</script>

<template>
  <div v-if="ui.legalOpen" class="overlay" @click.self="close" @keydown.esc="close">
    <div ref="dialog" class="dialog" role="dialog" aria-modal="true" aria-labelledby="legal-title" tabindex="-1">
      <div class="top">
        <div class="tabs" role="tablist">
          <button
            v-for="t in tabs"
            :key="t.id"
            type="button"
            role="tab"
            :aria-selected="ui.legalTab === t.id"
            class="tab"
            @click="ui.legalTab = t.id"
          >{{ t.label }}</button>
        </div>
        <button type="button" class="close" @click="close">Cerrar</button>
      </div>

      <div class="body">
        <template v-if="ui.legalTab === 'legal'">
          <h2 id="legal-title" class="head">Aviso legal</h2>
          <p>En cumplimiento del artículo 10 de la Ley 34/2002 (LSSI-CE), estos son los datos del titular de syncrodigital.es:</p>
          <p><strong>Titular:</strong> Pau Monedero Roigé (Syncro Digital)<br><strong>NIF:</strong> 49724453V<br><strong>Domicilio:</strong> Sabadell, Barcelona<br><strong>Email:</strong> info@syncrodigital.es</p>
          <h3>Propiedad intelectual</h3>
          <p>El diseño, los textos y el código de esta web son de Syncro Digital. Las capturas de los trabajos muestran webs hechas para sus clientes y se enseñan con fines de portfolio. La foto de Sabadell es de Xavigivax y se usa con licencia CC BY-SA 3.0.</p>
        </template>

        <template v-else-if="ui.legalTab === 'privacy'">
          <h2 id="legal-title" class="head">Privacidad</h2>
          <h3>Quién trata tus datos</h3>
          <p>Pau Monedero Roigé (Syncro Digital), NIF 49724453V, info@syncrodigital.es.</p>
          <h3>Qué datos y para qué</h3>
          <p>El nombre, el email y el mensaje que envías con el formulario de contacto, solo para contestarte y, si llegamos a trabajar juntos, para preparar el presupuesto. La base legal es tu consentimiento al enviar el formulario.</p>
          <h3>Cuánto tiempo</h3>
          <p>Mientras dure la conversación o la relación comercial, y después el tiempo que exija la ley.</p>
          <h3>Con quién se comparten</h3>
          <p>Con nadie. El mensaje llega a mi buzón de correo, alojado en DonDominio (España).</p>
          <h3>Tus derechos</h3>
          <p>Puedes pedir acceso, rectificación, supresión, oposición, limitación o portabilidad escribiendo a info@syncrodigital.es. Si crees que no se respetan, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).</p>
        </template>

        <template v-else>
          <h2 id="legal-title" class="head">Cookies</h2>
          <p>Esta web solo usa cookies de análisis si las aceptas. Si las rechazas, no se carga nada de Google.</p>
          <h3>Qué cookies</h3>
          <p><strong>Google Analytics</strong> (a través de Google Tag Manager): cookies <code>_ga</code> y <code>_ga_*</code>, que duran hasta dos años, para contar visitas y ver qué páginas se leen. Las gestiona Google Ireland Ltd.</p>
          <p><strong>Tu elección</strong> se guarda en el almacenamiento del navegador (<code>cookie-consent</code>), sin caducidad, para no volver a preguntarte.</p>
          <p>Puedes cambiar de opinión cuando quieras con «Cambiar mis cookies», al pie de la página.</p>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: var(--m);
  background: rgb(0 0 0 / 0.6);
}
.dialog {
  width: min(760px, 100%);
  max-height: 85svh;
  display: flex;
  flex-direction: column;
  background: var(--paper);
  color: var(--black);
  box-shadow: 0 24px 64px rgb(0 0 0 / 0.4); /* taste-skill-ignore: dialog */
  outline: none;
}
.top { display: flex; justify-content: space-between; align-items: stretch; background: var(--yellow); }
.tabs { display: flex; flex-wrap: wrap; }
.tab, .close {
  padding: 16px 20px;
  background: none;
  border: 0;
  font: 500 var(--step-small)/1 var(--text);
  cursor: pointer;
  color: var(--black);
}
.tab[aria-selected='true'] { background: var(--black); color: var(--paper); }
.tab:hover:not([aria-selected='true']), .close:hover { background: var(--paper); }
.body { padding: 32px clamp(20px, 4vw, 48px) 40px; overflow-y: auto; line-height: 1.6; }
.body .head { margin-bottom: 20px; }
.body h3 { font: 500 var(--step-body)/1.3 var(--text); margin: 24px 0 6px; }
.body p { margin: 0 0 12px; max-width: 62ch; }
code { font-size: 0.9em; background: var(--yellow); padding: 0 4px; }
</style>
