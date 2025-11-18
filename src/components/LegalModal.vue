<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  isOpen: boolean
  initialTab?: 'privacy' | 'legal'
}>()

const emit = defineEmits(['close'])

const activeTab = ref(props.initialTab || 'privacy')

// Función para cambiar de pestaña
const setTab = (tab: 'privacy' | 'legal') => {
  activeTab.value = tab
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
    <div class="absolute inset-0 bg-gray-900/70 backdrop-blur-sm transition-opacity" @click="$emit('close')"></div>

    <div class="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-fade-in-up">
      
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
        <div class="flex space-x-4">
          <button 
            @click="setTab('privacy')"
            class="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
            :class="activeTab === 'privacy' ? 'bg-white text-primary shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:text-gray-700'"
          >
            Política de Privacidad
          </button>
          <button 
            @click="setTab('legal')"
            class="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
            :class="activeTab === 'legal' ? 'bg-white text-primary shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:text-gray-700'"
          >
            Aviso Legal
          </button>
        </div>
        
        <button @click="$emit('close')" class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <div class="p-6 sm:p-10 overflow-y-auto text-gray-600 text-sm leading-relaxed space-y-6">
        
        <div v-if="activeTab === 'privacy'">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Política de Privacidad</h2>
          <p>En <strong>Syncro Digital</strong>, nos comprometemos a proteger tu privacidad y cumplir con el RGPD.</p>
          
          <h3 class="text-lg font-semibold text-gray-800 mt-6">1. Responsable del Tratamiento</h3>
          <p><strong>Identidad:</strong> Pau Monedero Roigé</p>
          <p><strong>NIF/DNI:</strong> 49724453V</p>
          <p><strong>Email:</strong> info@syncrodigital.es</p>

          <h3 class="text-lg font-semibold text-gray-800 mt-6">2. Finalidad</h3>
          <p>Tratamos la información que nos facilitas con el fin de gestionar las consultas realizadas a través de nuestro formulario de contacto y enviarte la información solicitada sobre nuestros servicios de desarrollo web y automatización.</p>

          <h3 class="text-lg font-semibold text-gray-800 mt-6">3. Legitimación</h3>
          <p>La base legal para el tratamiento de tus datos es el consentimiento que nos das al marcar la casilla de aceptación en nuestro formulario de contacto.</p>

          <h3 class="text-lg font-semibold text-gray-800 mt-6">4. Destinatarios</h3>
          <p>Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal. Utilizamos proveedores de servicios (como hosting y correo electrónico) que cumplen con la normativa europea de protección de datos.</p>

          <h3 class="text-lg font-semibold text-gray-800 mt-6">5. Derechos</h3>
          <p>Tienes derecho a acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional. Puedes ejercer tus derechos enviando un email a info@syncrodigital.es.</p>
        </div>

        <div v-if="activeTab === 'legal'">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Aviso Legal</h2>
          <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), a continuación se exponen los datos identificativos de la empresa.</p>

          <h3 class="text-lg font-semibold text-gray-800 mt-6">1. Datos Identificativos</h3>
          <p><strong>Nombre Comercial:</strong> Syncro Digital</p>
          <p><strong>Titular:</strong> Pau Monedero Roige</p>
          <p><strong>NIF:</strong> 49724453V</p>
          <p><strong>Domicilio:</strong> Sabadell, Barcelona</p>
          <p><strong>Email:</strong> info@syncrodigital.es</p>

          <h3 class="text-lg font-semibold text-gray-800 mt-6">2. Propiedad Intelectual</h3>
          <p>El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en https://syncrodigital.es están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial.</p>

          <h3 class="text-lg font-semibold text-gray-800 mt-6">3. Exclusión de garantías y responsabilidad</h3>
          <p>El prestador no se hace responsable de la información y contenidos almacenados en foros, redes sociales o cualesquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del prestador.</p>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
</style>