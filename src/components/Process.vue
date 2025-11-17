<script setup lang="ts">
import ProcessStep from './ProcessStep.vue'

const steps = [
  { number: 1, title: '1. Auditoría', description: 'Analizamos tu ecosistema digital actual.' },
  { number: 2, title: '2. Estrategia', description: "Diseñamos tu 'Plan de Sincronización' personalizado." },
  { number: 3, title: '3. Implementación', description: 'Construimos las conexiones y lanzamos.' },
  { number: 4, title: '4. Optimización', description: 'Ajustamos y medimos la sintonía en tiempo real.', isLast: true }
]
</script>

<template>
  <section id="proceso" class="py-20 md:py-32 bg-light border-t border-b border-gray-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tighter text-dark mb-4">
          El Plan de Sincronización
        </h2>
        <p class="text-lg text-gray-600">
          Un método transparente en 4 pasos para pasar del caos al control.
        </p>
      </div>

      <div class="relative grid md:grid-cols-4 gap-x-8">
        <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300" style="margin-top: -1.75rem; z-index: 0;"></div>
        
        <ProcessStep
          v-for="step in steps"
          :key="step.number"
          :number="step.number"
          :title="step.title"
          :description="step.description"
          :is-last="step.isLast"
        />
      </div>
    </div>
  </section>
</template>