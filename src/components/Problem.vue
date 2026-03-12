<script setup lang="ts">
import ProblemCard from './ProblemCard.vue'

const problems = [
  {
    title: 'Redes que gritan al vacío',
    description: 'Publicas contenido con esfuerzo, pero no genera conversiones ni conecta con tu ecosistema digital.',
    iconPath: 'M15.536 8.464a5 5 0 010 7.072M20 4v.01M4 20v.01M18.364 5.636a9 9 0 010 12.728M5.636 18.364a9 9 0 010-12.728',
    color: 'rose'
  },
  {
    title: 'Web desincronizada',
    description: 'Atraes tráfico cualificado, pero tu plataforma no sincroniza con tu CRM ni automatiza la captura de leads.',
    iconPath: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6',
    color: 'blue'
  },
  {
    title: 'Caos en procesos manuales',
    description: 'Tu equipo pierde horas críticas moviendo datos manualmente entre aplicaciones que no se hablan entre sí.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'emerald'
  }
]
</script>

<template>
  <section id="problema" class="py-24 md:py-32 bg-white dark:bg-[#020617] relative transition-colors duration-500">
    <!-- Glow transition from top -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/10 to-transparent"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl mx-auto text-center mb-20">
        <div data-aos="fade-down" class="flex items-center justify-center gap-2 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold text-primary dark:text-primary-light">
          El Problema
        </div>
        <h2 data-aos="fade-up" class="text-4xl md:text-6xl font-black tracking-tighter text-black dark:text-white mb-6 leading-none transition-colors duration-500">
          ¿Sientes la <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-800 to-primary dark:via-white">desincronización?</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" class="text-xl text-slate-600 dark:text-slate-400 font-light transition-colors duration-500">
          El "ruido" digital ocurre cuando tus herramientas y estrategias trabajan de forma aislada. Nosotros eliminamos la fricción.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 md:gap-12">
        <ProblemCard
          v-for="(problem, index) in problems"
          :key="problem.title"
          :title="problem.title"
          :description="problem.description"
          :icon-path="problem.iconPath"
          :color="problem.color"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
        />
      </div>
    </div>
  </section>
</template>