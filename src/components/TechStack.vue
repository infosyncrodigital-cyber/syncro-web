<script setup lang="ts">
const techs = [
  { name: 'Vue.js 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
]
</script>

<template>
  <section class="py-20 bg-white dark:bg-[#020617] relative border-t border-black/5 dark:border-white/5 transition-colors duration-500">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h3 class="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 dark:text-slate-500 mb-12 transition-colors duration-500">Potenciado por tecnología de vanguardia</h3>
      <div class="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-40 grayscale group/grid hover:opacity-100 transition-all duration-700">
        <div v-for="(tech, index) in techs" :key="tech.name" class="flex flex-col items-center group/item hover:grayscale-0 transition-all duration-500" data-aos="fade-up" :data-aos-delay="index * 100">
          <img :src="tech.icon" :alt="`Logo ${tech.name}`" class="h-10 w-10 md:h-12 md:w-12 mb-4 transform group-hover/item:scale-125 transition-transform duration-500">
          <span class="text-[10px] font-bold tracking-widest uppercase text-black/40 dark:text-white/40 group-hover/item:text-black dark:group-hover/item:text-white transition-colors duration-500">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>