<script setup lang="ts">
import { onMounted } from 'vue'
import { ui, openLegal } from '../store'
import { readConsent, saveConsent, loadAnalytics } from '../analytics'

onMounted(() => {
  const c = readConsent()
  if (c === 'accepted') loadAnalytics()
  else if (c === null) ui.cookiesOpen = true
})

function choose(v: 'accepted' | 'declined') {
  saveConsent(v)
  ui.cookiesOpen = false
  if (v === 'declined' && document.cookie.includes('_ga')) {
    // analytics was on before: reload so it stops running
    location.reload()
  }
}
</script>

<template>
  <Transition name="up">
    <div v-if="ui.cookiesOpen" class="cookies" role="dialog" aria-live="polite" aria-labelledby="cookies-text">
      <p id="cookies-text" class="text">
        Uso cookies de Google Analytics para saber cuánta gente visita la web, solo si las aceptas.
        <a href="#" class="link" @click.prevent="openLegal('cookies')">Más información</a>
      </p>
      <div class="buttons">
        <button type="button" class="btn btn-black" @click="choose('declined')">Rechazar</button>
        <button type="button" class="btn btn-black" @click="choose('accepted')">Aceptar</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookies {
  position: fixed;
  right: var(--m);
  bottom: var(--m);
  width: min(30rem, calc(100% - 2 * var(--m)));
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px 32px;
  flex-wrap: wrap;
  padding: 20px 24px;
  background: var(--yellow);
  color: var(--black);
  box-shadow: 0 16px 48px rgb(0 0 0 / 0.3); /* taste-skill-ignore: consent overlay floats */
}
.text { margin: 0; max-width: 60ch; }
.buttons { display: flex; gap: 12px; }
.up-enter-active, .up-leave-active { transition: transform 0.4s var(--ease-out), opacity 0.3s; }
.up-enter-from, .up-leave-to { transform: translateY(24px); opacity: 0; }

@media (max-width: 600px) {
  .cookies { padding: 14px 16px; gap: 12px; bottom: 12px; }
  .text { font-size: var(--step-small); }
  .buttons { width: 100%; }
  .buttons .btn { flex: 1; min-height: 44px; padding-block: 0.6em; }
}
</style>
