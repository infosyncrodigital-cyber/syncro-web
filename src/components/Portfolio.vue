<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';

const projects = [
  {
    number: '01',
    title: 'Nudō Shop',
    category: 'E-Commerce Artesanal',
    description: 'Diseño y desarrollo de una plataforma equilibrada que refleja la esencia minimalista y artesanal de la marca.',
    tags: ['Vue.js', 'Premium UI', 'Branding'],
    color: 'stone',
    link: 'https://nudobcn.com'
  },
  {
    number: '02',
    title: 'Andrea Sáez',
    category: 'Portfolio Audiovisual',
    description: 'Espacio digital inmersivo para destacar la producción creativa y visual con una narrativa moderna.',
    tags: ['Next.js', 'Showcase', 'Visuals'],
    color: 'indigo',
    link: 'https://andreasaezmontero.es'
  },
  {
    number: '03',
    title: 'Beauty Manager',
    category: 'SaaS de Gestión',
    description: 'Ecosistema digital para la optimización de procesos y gestión inteligente de salones de belleza.',
    tags: ['SaaS', 'Procesos', 'B2B'],
    color: 'rose',
    link: '#'
  }
]
</script>

<template>
  <section id="portfolio" class="py-32 bg-white dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none transition-colors duration-500"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div class="max-w-xl" data-aos="fade-right">
          <div class="flex items-center gap-3 mb-6">
            <div class="h-[1px] w-12 bg-primary"></div>
            <span class="text-xs font-bold tracking-[0.3em] uppercase text-primary dark:text-primary-light transition-colors duration-500">Selección Premium</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter leading-none mb-6 transition-colors duration-500">
            Proyectos que <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-800 to-primary dark:from-primary-light dark:via-white dark:to-primary-light">respiran.</span>
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-400 font-light max-w-lg transition-colors duration-500">
            No solo creamos webs, construimos experiencias digitales en perfecta sintonía con tu marca.
          </p>
        </div>
        
        <div data-aos="fade-left" class="hidden md:block">
          <a href="#contacto" class="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-black/40 dark:text-white/60 hover:text-primary dark:hover:text-primary-light transition-all duration-500">
            Empezar un proyecto
            <div class="p-4 bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <ArrowUpRight class="w-5 h-5 transition-colors duration-500" />
            </div>
          </a>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 gap-12">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="group relative"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
        >
          <div class="flex flex-col lg:flex-row items-center gap-12 md:gap-20 p-8 md:p-12 bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm transition-all duration-700 hover:bg-white dark:hover:bg-white/[0.08] hover:border-black/10 dark:hover:border-white/20">
            
            <!-- Project Image/Visual -->
            <div class="w-full lg:w-3/5 overflow-hidden aspect-[16/9] relative bg-white dark:bg-slate-900 transition-colors duration-500">
              <div class="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/10 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
              <!-- Placeholder for image -->
              <div 
                class="w-full h-full transition-transform duration-1000 group-hover:scale-110 flex items-center justify-center text-[10rem] font-black opacity-10 dark:opacity-20 select-none text-black dark:text-white transition-colors duration-500"
              >
                {{ project.number }}
              </div>
              
              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <a :href="project.link" target="_blank" class="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Ver Caso de Éxito
                </a>
              </div>
            </div>

            <!-- Project Info -->
            <div class="w-full lg:w-2/5 space-y-8">
              <div>
                <span class="text-primary text-sm font-black tracking-widest uppercase mb-4 block">{{ project.category }}</span>
                <h3 class="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tighter mb-6 group-hover:text-primary transition-colors duration-500">
                  {{ project.title }}
                </h3>
                <p class="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed transition-colors duration-500">
                  {{ project.description }}
                </p>
              </div>

              <div class="flex flex-wrap gap-3">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="text-[10px] font-bold tracking-widest uppercase px-4 py-2 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 text-black/60 dark:text-white/60 transition-colors duration-500"
                >
                  {{ tag }}
                </span>
              </div>

              <a :href="project.link" target="_blank" class="inline-flex items-center gap-2 group/link text-black dark:text-white font-bold tracking-widest uppercase text-xs transition-colors duration-500">
                Explorar Proyecto
                <div class="h-[1px] w-8 bg-primary transition-all duration-300 group-hover/link:w-16"></div>
              </a>
            </div>

          </div>
        </div>
      </div>
      
      <!-- Mobile CTA -->
      <div class="mt-20 text-center md:hidden">
         <a href="#contacto" class="inline-flex items-center gap-4 px-8 py-4 bg-primary text-white font-bold tracking-widest uppercase text-sm">
            Iniciar un proyecto
            <ArrowUpRight class="w-5 h-5" />
          </a>
      </div>

    </div>
  </section>
</template>
