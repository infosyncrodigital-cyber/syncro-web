<script setup lang="ts">
import { ExternalLink, ArrowRight } from 'lucide-vue-next';

const projects = [
  {
    title: 'Nuudo Shop',
    category: 'E-Commerce Artesanal',
    description: 'Esenciales minimalistas para bebés y mamás. Una experiencia de compra suave y moderna para una marca que cose a mano piezas únicas en España.',
    tags: ['Vue.js', 'Diseño Minimalista', 'E-Commerce'],
    gradient: 'from-stone-400 to-stone-600', // Colores más tierra/neutros para Nuudo
    link: 'https://nuudo.syncrodigital.es'
  },
  {
    title: 'Beauty Salon Manager',
    category: 'SaaS de Gestión',
    description: 'Aplicación web integral para la gestión de citas, clientes y facturación en salones de belleza. Optimización total del flujo de trabajo.',
    tags: ['WebApp', 'Gestión', 'B2B'],
    gradient: 'from-rose-400 to-pink-500',
    link: '#'
  }
]
</script>

<template>
  <section id="proyectos" class="py-24 bg-gray-50 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-5xl font-bold tracking-tighter text-dark mb-4">
            Nuestros <span class="text-primary">Proyectos</span>
          </h2>
          <p class="text-lg text-gray-600">
            Explora cómo hemos transformado ideas en productos digitales de alto impacto.
          </p>
        </div>
        <div>
          <a href="#contacto" class="hidden md:inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-dark hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
            Iniciar un proyecto
            <ArrowRight class="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Falso thumbnail con gradiente (Placeholder premium) -->
          <div class="h-48 w-full bg-gradient-to-br relative overflow-hidden" :class="project.gradient">
            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div class="absolute bottom-4 left-4">
              <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/10">
                {{ project.category }}
              </span>
            </div>
          </div>

          <div class="p-8">
            <h3 class="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-8">
              <span 
                v-for="tag in project.tags" 
                :key="tag" 
                class="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium"
              >
                #{{ tag }}
              </span>
            </div>

            <a :href="project.link" target="_blank" class="inline-flex items-center font-semibold text-dark hover:text-primary transition-colors">
              Ver detalles
              <ExternalLink class="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center md:hidden">
         <a href="#contacto" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-dark hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
            Iniciar un proyecto
            <ArrowRight class="ml-2 w-5 h-5" />
          </a>
      </div>

    </div>
  </section>
</template>
