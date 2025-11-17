<script setup lang="ts">
import ProblemCard from './ProblemCard.vue'

const problems = [
  {
    title: 'Redes que gritan al vacío',
    description: 'Publicas contenido, pero no genera ventas ni conecta con tu web.',
    iconPath: 'M15.536 8.464a5 5 0 010 7.072M20 4v.01M4 20v.01M18.364 5.636a9 9 0 010 12.728M5.636 18.364a9 9 0 010-12.728'
  },
  {
    title: 'Una web que no habla con ventas',
    description: 'Atraes tráfico, pero tu web no habla con tu CRM ni cualifica los leads.',
    iconPath: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6'
  },
  {
    title: 'Horas perdidas en tareas manuales',
    description: 'Copias y pegas datos entre 5 apps diferentes. Cada día.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]
</script>

<template>
  <section id="problema" class="py-20 md:py-24 bg-light border-t border-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tighter text-dark mb-4">
          ¿Sientes la desincronización?
        </h2>
        <p class="text-lg text-gray-600">
          El "ruido" digital ocurre cuando tus herramientas y equipos trabajan por separado.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <ProblemCard
          v-for="problem in problems"
          :key="problem.title"
          :title="problem.title"
          :description="problem.description"
          :icon-path="problem.iconPath"
        />
      </div>
    </div>
  </section>
</template>