<script setup lang="ts">
defineProps<{
  number: string | number
  title: string
  description: string
  isLast?: boolean
}>()
</script>

<template>
  <div class="relative z-10 text-center px-4 group">
    <div 
      class="w-24 h-24 flex items-center justify-center rounded-none mx-auto mb-8 font-black text-2xl transition-all duration-500 border-2"
      :class="isLast 
        ? 'bg-primary border-primary text-white shadow-[0_0_30px_rgba(59,130,246,0.2)] dark:shadow-[0_0_30px_rgba(59,130,246,0.3)]' 
        : 'bg-white dark:bg-[#020617] border-black/10 dark:border-white/10 text-black dark:text-white group-hover:border-primary group-hover:text-primary'"
    >
      {{ number }}
    </div>
    
    <h3 class="text-xl font-bold text-black dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-500">{{ title }}</h3>
    <p class="text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed transition-colors duration-500">{{ description }}</p>
    
    <!-- Vertical line for mobile -->
    <div v-if="!isLast" class="md:hidden w-px h-12 bg-black/5 dark:bg-white/10 mx-auto mt-8 transition-colors duration-500"></div>
  </div>
</template>