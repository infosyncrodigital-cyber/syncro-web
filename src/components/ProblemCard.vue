<script setup lang="ts">
defineProps<{
  title: string
  description: string
  iconPath: string
  color?: string
}>()
</script>

<template>
  <div class="group relative p-8 bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white dark:hover:bg-white/[0.08] hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5">
    <!-- Spotlight Effect Background -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>

    <div class="relative z-10 text-center">
      <div 
        class="w-16 h-16 mb-8 flex items-center justify-center bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-none transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 mx-auto"
        :class="color === 'rose' ? 'text-rose-500' : color === 'blue' ? 'text-blue-500' : 'text-emerald-500'"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="iconPath"></path>
        </svg>
      </div>
      
      <h3 class="text-2xl font-bold text-black dark:text-white tracking-tight mb-4 group-hover:text-primary transition-colors duration-500">{{ title }}</h3>
      <p class="text-slate-600 dark:text-slate-400 font-light leading-relaxed transition-colors duration-500">{{ description }}</p>
    </div>
    
    <!-- Accent Line -->
    <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></div>
  </div>
</template>