<script setup lang="ts">
import { Share2, Monitor, Zap, ArrowUpRight } from 'lucide-vue-next';

const services = [
  {
    title: 'Sincro-Social',
    category: 'Estrategia Digital',
    description: 'Transformamos el ruido de las redes en una narrativa coherente. Estrategias de contenido que no solo generan interacción, sino que cualifican leads y se sincronizan con tus objetivos de venta.',
    icon: Share2,
    color: 'from-blue-500 to-indigo-500',
    number: '01'
  },
  {
    title: 'Sincro-Web',
    category: 'Ingeniería Visual',
    description: 'Desarrollamos ecosistemas web en Vue.js que actúan como el centro de mando de tu negocio. Velocidad extrema, diseño inmersivo y una arquitectura pensada para la conversión.',
    icon: Monitor,
    color: 'from-indigo-500 to-purple-500',
    number: '02'
  },
  {
    title: 'Sincro-Flow',
    category: 'Automatización Inteligente',
    description: 'Conectamos los puntos invisibles de tu negocio. Automatizamos flujos de trabajo entre tus apps favoritas para que tú te centres en decidir, mientras el sistema se encarga de ejecutar.',
    icon: Zap,
    color: 'from-emerald-500 to-teal-400',
    number: '03'
  }
]
</script>

<template>
  <section id="servicios" class="py-24 md:py-32 bg-white dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
    <!-- Ambient glows -->
    <div class="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none transition-colors duration-500"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-32">
        <div data-aos="fade-down" class="flex items-center justify-center gap-3 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-primary dark:text-primary-light transition-colors duration-500">
          Capacidades
        </div>
        <h2 data-aos="fade-up" class="text-4xl md:text-7xl font-black tracking-tighter text-black dark:text-white mb-8 leading-none transition-colors duration-500">
          Ecosistema de <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-800 to-primary dark:from-primary-light dark:via-white dark:to-primary-light">Soluciones.</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" class="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed transition-colors duration-500">
           No son servicios aislados. Son engranajes de un mismo sistema diseñado para impulsar tu marca.
        </p>
      </div>

      <div class="space-y-40">
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          class="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
          :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
          data-aos="fade-up"
        >
          <!-- Visual Column -->
          <div class="flex-1 w-full group relative">
            <div class="absolute inset-0 bg-gradient-to-br opacity-10 dark:opacity-20 blur-3xl transform group-hover:scale-110 transition-transform duration-1000" :class="service.color"></div>
            
            <div class="relative aspect-square md:aspect-video lg:aspect-square bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl flex items-center justify-center p-12 transition-all duration-700 group-hover:bg-white dark:group-hover:bg-white/[0.08] group-hover:border-black/10 dark:group-hover:border-white/20">
              <div class="relative">
                <!-- Icon with massive shadow -->
                <div class="absolute inset-0 blur-3xl opacity-30 dark:opacity-50 bg-current scale-150" :class="service.color.split(' ')[0]"></div>
                <component 
                  :is="service.icon" 
                  class="w-32 h-32 md:w-48 md:h-48 text-black dark:text-white relative z-10 transition-colors duration-500" 
                  stroke-width="0.5" 
                />
              </div>
              
              <!-- Floating number -->
              <div class="absolute top-8 left-8 text-8xl font-black text-black/5 dark:text-white/5 select-none leading-none transition-colors duration-500">
                {{ service.number }}
              </div>
            </div>
          </div>

          <!-- Content Column -->
          <div class="flex-1 space-y-8" :class="index % 2 !== 0 ? 'lg:pl-8' : 'lg:pr-8'">
            <div class="space-y-4">
              <span class="text-primary text-xs font-black tracking-widest uppercase">{{ service.category }}</span>
              <h3 class="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tighter transition-colors duration-500">{{ service.title }}</h3>
            </div>
            
            <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed transition-colors duration-500">
              {{ service.description }}
            </p>

            <div class="pt-6">
              <a href="#contacto" class="group inline-flex items-center gap-4 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold tracking-widest uppercase text-xs transition-all duration-500 hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white">
                Ver Detalles
                <ArrowUpRight class="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>