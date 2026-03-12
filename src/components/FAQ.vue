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
  <section id="faq" class="py-24 md:py-32 bg-white dark:bg-[#020617] relative transition-colors duration-500">
    <!-- Top accent line -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/10 to-transparent transition-colors duration-500"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-20">
        <div data-aos="fade-down" class="flex items-center justify-center gap-3 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-primary dark:text-primary-light transition-colors duration-500">
          Claridad Total
        </div>
        <h2 data-aos="fade-up" class="text-4xl md:text-6xl font-black tracking-tighter text-black dark:text-white mb-6 leading-none transition-colors duration-500">
          Preguntas <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-800 to-primary dark:from-primary dark:via-white dark:to-primary">Frecuentes.</span>
        </h2>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-black/5 dark:border-white/10 overflow-hidden transition-all duration-500"
          :class="openIndex === index ? 'bg-slate-50 dark:bg-white/5 shadow-2xl shadow-primary/5' : 'bg-transparent hover:border-primary/50'"
        >
          <button 
            @click="toggle(index)"
            class="w-full flex items-center justify-between p-8 text-left focus:outline-none group"
          >
            <span class="text-xl font-bold transition-colors duration-300" :class="openIndex === index ? 'text-primary dark:text-primary-light' : 'text-black dark:text-white'">
              {{ faq.question }}
            </span>
            <div 
              class="flex-shrink-0 ml-4 w-10 h-10 flex items-center justify-center transition-all duration-300"
              :class="openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-black/5 dark:bg-white/5 text-slate-400 dark:text-slate-500'"
            >
              <Minus v-if="openIndex === index" class="w-5 h-5" />
              <Plus v-else class="w-5 h-5" />
            </div>
          </button>
          
          <div 
            v-show="openIndex === index"
            class="px-8 pb-8 text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed animate-fade-in-down transition-colors duration-500"
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
  animation: fadeInDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
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
