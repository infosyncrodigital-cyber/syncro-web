<script setup lang="ts">
import ProcessStep from './ProcessStep.vue'

const steps = [
  { number: 1, title: 'Auditoría', description: 'Analizamos tu ecosistema actual identificando fugas de eficiencia.' },
  { number: 2, title: 'Estrategia', description: "Diseñamos tu 'Plan de Sincronización' único y escalable." },
  { number: 3, title: 'Implementación', description: 'Construimos las conexiones y lanzamos tu nuevo motor digital.' },
  { number: 4, title: 'Sintonía', description: 'Optimizamos en tiempo real para un crecimiento sin límites.', isLast: true }
]
</script>

<template>
  <section id="proceso" class="py-24 md:py-32 bg-white dark:bg-[#020617] relative transition-colors duration-500">
    <!-- Top accent line -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/10 to-transparent"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl mx-auto text-center mb-24">
        <div data-aos="fade-down" class="flex items-center justify-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-primary dark:text-primary-light transition-colors duration-500">
          El Método
        </div>
        <h2 data-aos="fade-up" class="text-4xl md:text-6xl font-black tracking-tighter text-black dark:text-white mb-6 leading-none transition-colors duration-500">
          Plan de <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-800 to-primary dark:from-primary dark:via-white dark:to-primary">Sincronización.</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" class="text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto transition-colors duration-500">
          Un proceso transparente y riguroso diseñado para llevar tu negocio del ruido al equilibrio digital.
        </p>
      </div>

      <div class="relative grid md:grid-cols-4 gap-8 md:gap-4">
        <!-- Connecting line desktop -->
        <div class="hidden md:block absolute top-12 left-[10%] w-[80%] h-px bg-gradient-to-r from-primary/5 via-primary/20 dark:via-primary/40 to-primary/5 z-0"></div>
        
        <ProcessStep
          v-for="(step, index) in steps"
          :key="step.number"
          :number="step.number"
          :title="step.title"
          :description="step.description"
          :is-last="step.isLast"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
        />
      </div>
    </div>
  </section>
</template>