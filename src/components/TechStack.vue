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
  <section class="py-16 bg-gray-50 border-t border-gray-200">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h3 class="text-2xl font-bold text-gray-800 mb-8">Potenciado por tecnología moderna</h3>
      <div class="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        <div v-for="(tech, index) in techs" :key="tech.name" class="flex flex-col items-center group" data-aos="fade-in" :data-aos-delay="index * 100">
          <img :src="tech.icon" :alt="`Logo ${tech.name}`" class="h-12 w-12 mb-2 transform group-hover:scale-110 transition-transform">
          <span class="text-xs font-medium text-gray-500">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>