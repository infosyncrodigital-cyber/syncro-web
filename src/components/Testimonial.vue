<script setup lang="ts">
import { TrendingUp, Cpu, ArrowUpRight } from 'lucide-vue-next';

const values = [
  {
    title: "Resultados Tangibles",
    label: "Impacto Real",
    description: "No perseguimos métricas de vanidad. Diseñamos para maximizar tu ROI, optimizar tus procesos operativos y liberar tu tiempo. Tu crecimiento es la única métrica que validamos.",
    icon: TrendingUp,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Tecnología con Propósito",
    label: "Arquitectura",
    description: "No usamos código por inercia. Seleccionamos las herramientas más robustas y escalables (Vue.js, Supabase, APIs) para que tu negocio crezca sobre cimientos digitales indestructibles.",
    icon: Cpu,
    color: "from-indigo-500 to-purple-500"
  }
]
</script>

<template>
  <section class="py-24 md:py-32 bg-white dark:bg-[#020617] overflow-hidden relative transition-colors duration-500">
      <!-- Background pattern decoration -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-testimonial" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" class="stroke-black dark:stroke-white" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-testimonial)" />
        </svg>
      </div>

      <!-- Glowing accents -->
      <div class="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-500"></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div data-aos="fade-right">
              <div class="flex items-center gap-3 mb-6">
                <div class="h-[1px] w-12 bg-primary"></div>
                <span class="text-xs font-bold tracking-[0.3em] uppercase text-primary dark:text-primary-light transition-colors duration-500">Nuestra Filosofía</span>
              </div>
              <h2 class="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter leading-none transition-colors duration-500">
                El Efecto <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-800 to-primary dark:from-primary dark:via-white dark:to-primary">Syncro.</span>
              </h2>
            </div>
            <p data-aos="fade-left" class="text-xl text-slate-600 dark:text-slate-400 font-light max-w-sm mb-2 transition-colors duration-500">
              Donde la innovación se encuentra con la precisión técnica.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div 
              v-for="(value, index) in values" 
              :key="index"
              class="group relative bg-slate-50 dark:bg-white/5 backdrop-blur-xl p-10 md:p-14 border border-black/5 dark:border-white/10 transition-all duration-700 hover:bg-white dark:hover:bg-white/[0.08] hover:border-black/10 dark:hover:border-white/20"
              data-aos="fade-up"
              :data-aos-delay="index * 200"
            >
              <!-- Number highlight -->
              <div class="absolute top-8 right-8 text-6xl font-black text-black/[0.03] dark:text-white/[0.03] select-none group-hover:text-primary/10 transition-colors duration-500">
                {{ index + 1 }}
              </div>

              <div class="inline-flex items-center justify-center p-5 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <component :is="value.icon" class="w-10 h-10 transition-transform duration-500 group-hover:scale-110" />
              </div>
              
              <div class="space-y-6">
                <span class="text-primary text-xs font-black tracking-widest uppercase">{{ value.label }}</span>
                <h3 class="text-3xl font-bold text-black dark:text-white tracking-tight transition-colors duration-500">
                  {{ value.title }}
                </h3>
                <p class="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed transition-colors duration-500">
                    {{ value.description }}
                </p>
              </div>

              <!-- Animated accent -->
              <div class="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight class="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
      </div>
  </section>
</template>