<script setup lang="ts">
import { ref } from 'vue'
import { Send } from 'lucide-vue-next'

const name = ref('')
const email = ref('')
const message = ref('')

const formState = ref('idle') // idle | loading | success | error
const formMessage = ref('')

const handleSubmit = async () => {
  formState.value = 'loading'
  formMessage.value = ''

  try {
    const response = await fetch('/api/enviar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })

    if (!response.ok) {
      let errorMessage = 'Error en el servidor'
      try {
        const errorData = await response.json()
        errorMessage = errorData.details || errorMessage
      } catch {
        // Response body is empty or not valid JSON
      }
      throw new Error(errorMessage)
    }

    formState.value = 'success'
    formMessage.value = '¡Sincronización iniciada! Nos pondremos en contacto pronto.'
    name.value = ''
    email.value = ''
    message.value = ''

  } catch (error: any) {
    console.error(error)
    formState.value = 'error'
    formMessage.value = error.message || 'Error al enviar. Por favor, inténtalo de nuevo.'
  }
}
</script>

<template>
  <section id="contacto" class="py-24 md:py-32 bg-white dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
    <!-- Background accents -->
    <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[140px] pointer-events-none transition-colors duration-500"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="bg-slate-50 dark:bg-white/5 backdrop-blur-3xl border border-black/5 dark:border-white/10 p-10 md:p-20 relative overflow-hidden transition-all duration-500">
        
        <!-- Subtle line decoration -->
        <div class="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/20 transition-all duration-700"></div>

        <div class="grid lg:grid-cols-2 gap-20 items-start">
            
            <div data-aos="fade-right">
                <div class="flex items-center gap-3 mb-8">
                  <div class="h-[1px] w-12 bg-primary"></div>
                  <span class="text-xs font-bold tracking-[0.3em] uppercase text-primary dark:text-primary-light transition-colors duration-500">Contacto Directo</span>
                </div>
                <h2 class="text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter leading-none mb-10 transition-colors duration-500">
                    ¿Hablamos de tu <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-800 to-primary dark:from-primary dark:via-white dark:to-primary">proyecto?</span>
                </h2>
                <div class="space-y-8 text-lg text-slate-600 dark:text-slate-400 font-light transition-colors duration-500">
                    <p>Cuéntanos dónde está tu 'ruido' y te diremos cómo podemos sincronizarlo hacia el éxito.</p>
                    <div class="space-y-4 pt-4">
                        <div class="flex items-center gap-4 text-black dark:text-white font-bold transition-colors duration-500">
                            <span class="w-10 h-[1px] bg-primary/40"></span>
                            info@syncrodigital.es
                        </div>
                        <div class="flex items-center gap-4 text-black dark:text-white font-bold transition-colors duration-500">
                            <span class="w-10 h-[1px] bg-primary/40"></span>
                            Barcelona, España
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="200" class="relative">
                <form @submit.prevent="handleSubmit" class="space-y-8">
                    <div class="space-y-2">
                        <label class="text-[10px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-500 ml-1 transition-colors duration-500">Nombre Completo</label>
                        <input type="text" required v-model="name" :disabled="formState === 'loading'"
                               class="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 text-black dark:text-white focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                               placeholder="Tu nombre">
                    </div>
                    
                    <div class="space-y-2">
                        <label class="text-[10px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-500 ml-1 transition-colors duration-500">Email Profesional</label>
                        <input type="email" required v-model="email" :disabled="formState === 'loading'"
                               class="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 text-black dark:text-white focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                               placeholder="email@tuempresa.com">
                    </div>

                    <div class="space-y-2">
                        <label class="text-[10px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-500 ml-1 transition-colors duration-500">Desafío del Proyecto</label>
                        <textarea rows="4" required v-model="message" :disabled="formState === 'loading'"
                                  class="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 text-black dark:text-white focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                                  placeholder="¿Qué necesitas sincronizar?"></textarea>
                    </div>

                    <div>
                        <button type="submit" :disabled="formState === 'loading'"
                                class="w-full group flex items-center justify-center gap-4 px-10 py-6 bg-black dark:bg-white text-white dark:text-black font-black tracking-widest uppercase text-sm transition-all duration-500 hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white disabled:opacity-50">
                            <span v-if="formState === 'loading'">Procesando...</span>
                            <span v-else class="flex items-center gap-3">
                                Enviar Mensaje
                                <Send class="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </span>
                        </button>
                    </div>

                    <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translateY-4">
                      <div v-if="formState === 'success'" class="p-6 bg-primary/10 border border-primary/20 text-primary dark:text-primary-light font-bold text-center">
                          {{ formMessage }}
                      </div>
                    </Transition>
                    
                    <div v-if="formState === 'error'" class="p-6 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-500 font-bold text-center">
                        {{ formMessage }}
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>