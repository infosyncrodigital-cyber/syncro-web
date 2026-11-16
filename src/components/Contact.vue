<script setup lang="ts">
import { ref, watch } from 'vue'
import { ui } from '../store'

const name = ref('')
const email = ref('')
const message = ref('')
const website = ref('') // honeypot: people never see it, bots fill it
const state = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const feedback = ref('')

const starters = {
  web: 'Hola, quiero una web para mi negocio. Es…',
  software: 'Hola, tengo una idea de software a medida: …',
}

watch(
  () => ui.plan,
  (plan) => {
    if (plan && (!message.value || Object.values(starters).includes(message.value))) {
      message.value = starters[plan]
    }
  },
)

async function send() {
  state.value = 'sending'
  feedback.value = ''
  try {
    const res = await fetch('/api/enviar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.value, email: email.value, message: message.value, website: website.value }),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error || 'No se ha podido enviar.')
    }
    state.value = 'sent'
    feedback.value = 'Recibido. Te contesto al email que me has dejado.'
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (e) {
    state.value = 'error'
    feedback.value = `${(e as Error).message} Si sigue fallando, escríbeme a info@syncrodigital.es.`
  }
}
</script>

<template>
  <section id="contacto" class="contact wrap" aria-labelledby="contacto-title">
    <div class="say">
      <h2 id="contacto-title" class="head" v-reveal>Pide tu presupuesto</h2>
      <p class="lead statement" v-reveal="1">
        Cuéntame qué negocio tienes y qué necesitas. Te respondo con un precio cerrado.
      </p>
      <ul class="direct" v-reveal="2">
        <li><a href="mailto:info@syncrodigital.es" class="link">info@syncrodigital.es</a></li>
        <li><a href="https://www.instagram.com/syncrodigital_" target="_blank" rel="noopener" class="link">Instagram</a></li>
        <li class="small place">Sabadell · Catalunya y Andorra</li>
      </ul>
    </div>

    <form class="form" novalidate @submit.prevent="send" v-reveal="1">
      <div class="field">
        <label for="c-name">Nombre</label>
        <input id="c-name" v-model="name" type="text" name="name" autocomplete="name" required maxlength="100" :disabled="state === 'sending'" />
      </div>
      <div class="field">
        <label for="c-email">Email</label>
        <input id="c-email" v-model="email" type="email" name="email" autocomplete="email" required maxlength="200" :disabled="state === 'sending'" />
      </div>
      <div class="field">
        <label for="c-msg">Qué necesitas</label>
        <textarea id="c-msg" v-model="message" name="message" rows="5" required maxlength="5000" :disabled="state === 'sending'"></textarea>
      </div>
      <div class="hp" aria-hidden="true">
        <label for="c-web">No rellenar</label>
        <input id="c-web" v-model="website" type="text" name="website" tabindex="-1" autocomplete="off" />
      </div>
      <button type="submit" class="btn btn-yellow" :disabled="state === 'sending' || !name || !email || !message">
        {{ state === 'sending' ? 'Enviando…' : 'Enviar' }} <span class="arrow" aria-hidden="true">→</span>
      </button>
      <p class="small legal">
        Uso tus datos solo para contestarte.
        <a href="#" class="link" @click.prevent="ui.legalTab = 'privacy'; ui.legalOpen = true">Privacidad</a>
      </p>
      <p v-if="feedback" class="feedback" :class="state" role="status" aria-live="polite">{{ feedback }}</p>
    </form>
  </section>
</template>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: 5fr 1fr 6fr;
  padding-top: var(--section);
  padding-bottom: clamp(96px, 10vw, 160px);
  background: var(--blue);
}
.say { grid-column: 1; }
.statement { max-width: 30ch; margin: 24px 0 40px; }
.direct { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.place { color: var(--muted); margin-top: 6px; }

.form { grid-column: 3; display: grid; gap: 20px; align-content: start; }
.field { display: grid; gap: 8px; }
.field label { font-size: var(--step-small); font-weight: 500; }
.field input,
.field textarea {
  width: 100%;
  padding: 14px 16px;
  background: var(--blue-2);
  color: var(--paper);
  border: 2px solid transparent;
  border-radius: 0;
  font: inherit;
  transition: border-color 0.15s, background-color 0.15s;
}
.field textarea { resize: vertical; min-height: 140px; }
.field input:hover, .field textarea:hover { border-color: var(--muted); }
.field input:focus, .field textarea:focus { outline: none; border-color: var(--yellow); background: var(--black); }
.hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; } /* taste-skill-ignore: honeypot, never visible */
.form .btn { justify-self: start; }
.legal { color: var(--muted); margin: 0; }
.feedback { margin: 0; padding: 14px 16px; font-weight: 500; }
.feedback.sent { background: var(--yellow); color: var(--black); }
.feedback.error { background: var(--pink); color: var(--black); }

@media (max-width: 860px) {
  .contact { grid-template-columns: 1fr; gap: 48px; }
  .form { grid-column: 1; }
  .form .btn { width: 100%; }
}
</style>
