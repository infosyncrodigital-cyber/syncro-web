<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const emit = defineEmits(['open-policy'])

onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    isVisible.value = true
  } else if (consent === 'accepted') {
    activateAnalytics()
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookie-consent', 'accepted')
  isVisible.value = false
  activateAnalytics()
}

const declineCookies = () => {
  localStorage.setItem('cookie-consent', 'declined')
  isVisible.value = false
}

const activateAnalytics = () => {
  console.log('Cookies aceptadas. Analytics activo.')
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-full"
    enter-to-class="translate-y-0"
  >
    <div v-if="isVisible" class="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-[#020617]/90 backdrop-blur-2xl border-t border-black/5 dark:border-white/10 p-6 z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div class="text-sm text-slate-600 dark:text-slate-400 md:max-w-3xl font-light leading-relaxed transition-colors duration-500">
          <p>
            Utilizamos cookies para optimizar tu experiencia y sincronizar nuestro contenido con tus intereses. 
            Puedes personalizar tu elección aquí o consultar nuestra 
            <a href="#" @click.prevent="$emit('open-policy')" class="text-black dark:text-white underline font-bold hover:text-primary transition-colors">
              Política de Privacidad
            </a>.
          </p>
        </div>

        <div class="flex gap-4 w-full md:w-auto">
          <button @click="declineCookies" class="flex-1 md:flex-none px-6 py-3 text-xs font-black tracking-widest uppercase text-slate-400 border border-black/10 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
            Rechazar
          </button>
          <button @click="acceptCookies" class="flex-1 md:flex-none px-6 py-3 text-xs font-black tracking-widest uppercase text-white dark:text-black bg-black dark:bg-white hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all">
            Aceptar Sincronización
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>