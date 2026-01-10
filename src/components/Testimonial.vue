<script setup lang="ts">
import { TrendingUp, Cpu } from 'lucide-vue-next';

const values = [
  {
    title: "Resultados Reales",
    description: "No nos obsesionamos con las métricas vanidosas. Diseñamos para mejorar tu ROI, optimizar tus procesos y liberar tu tiempo. Tu crecimiento es nuestro único KPI que importa.",
    icon: TrendingUp,
    color: "from-blue-400 to-cyan-300"
  },
  {
    title: "Tecnología con Sentido",
    description: "No usamos código por usar. Elegimos las herramientas más robustas y escalables (Vue, Supabase, Integraciones) para que tu negocio corra sobre cimientos sólidos hoy y mañana.",
    icon: Cpu,
    color: "from-purple-400 to-pink-300"
  }
]
</script>

<template>
  <section class="py-20 md:py-32 bg-primary-dark text-white overflow-hidden relative">
      <!-- Background pattern decoration -->
      <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              El efecto <span class="text-blue-300">Syncro</span>
            </h2>
          </div>

          <div class="grid md:grid-cols-2 gap-8 md:gap-12">
            <div 
              v-for="(value, index) in values" 
              :key="index"
              class="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              data-aos="fade-up"
              :data-aos-delay="index * 200"
            >
              <div class="inline-flex items-center justify-center p-3 rounded-lg bg-white/10 mb-6">
                <component :is="value.icon" class="w-8 h-8 text-blue-300" />
              </div>
              
              <h3 class="text-2xl font-bold mb-4 text-white">
                {{ value.title }}
              </h3>
              
              <p class="text-lg text-blue-100 leading-relaxed opacity-90">
                  {{ value.description }}
              </p>
            </div>
          </div>
      </div>
  </section>
</template>