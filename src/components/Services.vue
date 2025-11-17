<script setup lang="ts">
import ServiceCard from './ServiceCard.vue'

// Aquí están los datos. Si quieres cambiar un texto o un icono, lo haces aquí.
// Es mucho más limpio que buscar entre etiquetas HTML.
const services = [
  {
    title: '1. Sincro-Social',
    description: 'Creamos y gestionamos contenido que resuena y se sincroniza con tus objetivos de venta.',
    // Este es el código 'd' del SVG de la primera tarjeta original
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.084-1.284-.24-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.084-1.284.24-1.857m10.8-2.309A5 5 0 0017 13c0-2.21-1.343-4-3-4s-3 1.79-3 4c0 .63.148 1.22.408 1.741M11 13c0-2.21-1.343-4-3-4S5 10.79 5 13c0 .63.148 1.22.408 1.741'
  },
  {
    title: '2. Sincro-Web',
    description: 'Diseñamos plataformas web que son el núcleo sincronizado de tu ecosistema digital.',
    // Código 'd' de la segunda tarjeta
    iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: '3. Sincro-Flow',
    description: 'Automatizamos tus flujos de trabajo, conectando herramientas para que trabajen como una sola.',
    // Código 'd' de la tercera tarjeta
    iconPath: 'M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.209-.138 2.43-.138 3.662s.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.43.138-3.662zM12 15a3 3 0 100-6 3 3 0 000 6z'
  }
]
</script>

<template>
  <section id="servicios" class="py-20 md:py-32 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center mb-16">
              <h2 class="text-3xl md:text-4xl font-bold tracking-tighter text-dark mb-4">
                  Nuestra Solución: Sintonía Total
              </h2>
              <p class="text-lg text-gray-600">
                  Unimos tus pilares digitales en un solo ecosistema inteligente y sincronizado.
              </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
              
              <ServiceCard 
                v-for="service in services" 
                :key="service.title"
                :title="service.title"
                :description="service.description"
                :icon-path="service.iconPath"
              />

          </div>
      </div>
  </section>
</template>