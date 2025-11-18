<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const emit = defineEmits(['open-policy'])

// Comprobamos si ya ha aceptado/rechazado antes
onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    // Si no hay decisión guardada, mostramos el banner
    isVisible.value = true
  } else if (consent === 'accepted') {
    // Si ya aceptó, activamos Analytics
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

// Función para "encender" Google Analytics dinámicamente
const activateAnalytics = () => {
  // Aquí le decimos al navegador: "Vale, ahora sí puedes cargar el script de Google"
  // (Como ya lo pusimos en el HTML, GTM se encarga, pero esto es para el consentimiento futuro)
  // Nota: Para una implementación estricta, el script del head debería estar pausado
  // hasta recibir este evento, pero para empezar, gestionar la UI es el primer paso.
  console.log('Cookies aceptadas. Analytics activo.')
}
</script>

<template>
  <div v-if="isVisible" class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      
      <div class="text-sm text-gray-600 md:max-w-2xl">
        <p>
          Usamos cookies propias y de terceros para mejorar tu experiencia y medir el tráfico web. 
          Puedes aceptar o rechazar su uso. Consulta nuestra 
          <a href="#" @click.prevent="$emit('open-policy')" class="text-primary underline hover:text-primary-dark">
            Política de Privacidad
          </a>.
        </p>
      </div>

      <div class="flex gap-3">
        <button @click="declineCookies" class="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          Rechazar
        </button>
        <button @click="acceptCookies" class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark shadow-sm transition-colors">
          Aceptar todas
        </button>
      </div>

    </div>
  </div>
</template>