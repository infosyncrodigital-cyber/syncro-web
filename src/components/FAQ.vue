<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Minus } from 'lucide-vue-next'

const faqs = [
  {
    question: '¿Qué diferencia a Syncro Digital de una agencia tradicional?',
    answer: 'No somos solo diseñadores o programadores; somos socios estratégicos. Nos enfocamos en la "Sincronización Total": unimos tu web, tus redes y tus procesos internos para que todo fluya hacia el mismo objetivo (vender más y trabajar menos).'
  },
  {
    question: '¿Cuánto tiempo tarda un proyecto de página web?',
    answer: 'Depende de la complejidad. Una Landing Page de alta conversión puede estar lista en 2 semanas. Un ecosistema completo (Web + Automatizaciones + Branding) suele tomar entre 4 y 8 semanas. Siempre definimos un cronograma claro antes de empezar.'
  },
  {
    question: '¿Qué tecnologías utilizáis?',
    answer: 'Apostamos por el rendimiento y la escalabilidad. Usamos Vue.js y Vite para webs ultrarrápidas, Tailwind CSS para diseños a medida y Supabase para bases de datos robustas. Para automatizaciones, integramos herramientas como Make, n8n o Zapier.'
  },
  {
    question: '¿Ofrecéis mantenimiento después del lanzamiento?',
    answer: 'Sí, absolutamente. No te dejamos solo. Ofrecemos planes de "Sincronización Continua" que incluyen actualizaciones, copias de seguridad, mejoras de seguridad y soporte prioritario para que tu negocio nunca se detenga.'
  }
]

const openIndex = ref<number | null>(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tighter text-dark mb-4">
          Preguntas <span class="text-primary">Frecuentes</span>
        </h2>
        <p class="text-lg text-gray-600">
          Resolvemos tus dudas antes de que te las plantees.
        </p>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
          :class="openIndex === index ? 'bg-gray-50 border-primary shadow-md' : 'bg-white hover:border-blue-300'"
        >
          <button 
            @click="toggle(index)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none"
          >
            <span class="text-lg font-bold text-dark" :class="openIndex === index ? 'text-primary' : ''">
              {{ faq.question }}
            </span>
            <div 
              class="flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
              :class="openIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'"
            >
              <Minus v-if="openIndex === index" class="w-5 h-5" />
              <Plus v-else class="w-5 h-5" />
            </div>
          </button>
          
          <div 
            v-show="openIndex === index"
            class="px-6 pb-6 text-gray-600 leading-relaxed animate-fade-in-down"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-down {
  animation: fadeInDown 0.3s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
