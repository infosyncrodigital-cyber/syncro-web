<script setup lang="ts">
import { Share2, Monitor, Zap, ArrowRight } from 'lucide-vue-next';

const services = [
  {
    title: 'Sincro-Social',
    description: 'No publiques por publicar. Creamos estrategias de contenido que no solo generan "likes", sino que se integran con tu CRM para convertir seguidores en clientes reales.',
    icon: Share2,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Sincro-Web',
    description: 'Tu web no debería ser un folleto estático. Diseñamos plataformas vivas en Vue.js que actúan como el cerebro de tu negocio: rápidas, seguras y conectadas con todas tus herramientas.',
    icon: Monitor,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Sincro-Flow',
    description: 'Olvídate de copiar y pegar datos. Conectamos tus formularios con tu email, tu WhatsApp con tu calendario y tu facturación con tu banco. Automatización real para ganar tiempo.',
    icon: Zap,
    color: 'from-emerald-500 to-teal-400'
  }
]
</script>

<template>
  <section id="servicios" class="py-24 md:py-32 bg-white overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mx-auto text-center mb-24">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tighter text-dark mb-6">
          Más que servicios,<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Soluciones Integradas</span>
        </h2>
        <p class="text-lg text-gray-600">
          Dejamos atrás las soluciones aisladas. Unimos tus pilares digitales en un solo ecosistema inteligente.
        </p>
      </div>

      <div class="space-y-24">
        
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          class="flex flex-col md:flex-row items-center gap-12 md:gap-20"
          :class="{ 'md:flex-row-reverse': index % 2 !== 0 }" 
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="flex-1 w-full relative group">
            <div class="absolute inset-0 bg-gradient-to-r opacity-20 blur-2xl rounded-full transform group-hover:scale-110 transition-transform duration-700" :class="service.color"></div>
            
            <div class="relative bg-white border border-gray-100 p-8 rounded-2xl shadow-xl h-64 flex items-center justify-center transform transition-transform duration-500 hover:-translate-y-2">
              <div class="p-4 rounded-2xl bg-gradient-to-br text-white shadow-lg" :class="service.color">
                <component :is="service.icon" class="w-16 h-16" stroke-width="1.5" />
              </div>
            </div>
          </div>

          <div class="flex-1 text-center md:text-left">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-xl font-bold text-gray-400 mb-6">
              0{{ index + 1 }}
            </div>
            <h3 class="text-3xl font-bold text-dark mb-4">{{ service.title }}</h3>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              {{ service.description }}
            </p>
            <a href="#contacto" class="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors group">
              Saber más
              <ArrowRight class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>