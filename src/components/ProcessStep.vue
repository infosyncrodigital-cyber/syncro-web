<script setup lang="ts">
defineProps<{
  number: string | number
  title: string
  description: string
  isLast?: boolean // Propiedad opcional para saber si es el paso final
}>()
</script>

<template>
  <div class="relative z-10 text-center p-4">
    <div 
      class="w-14 h-14 flex items-center justify-center border-2 rounded-full mx-auto mb-4 font-bold"
      :class="isLast ? 'bg-primary border-primary text-white' : 'bg-white border-primary text-primary'"
    >
      {{ number }}
    </div>
    
    <h3 class="text-lg font-semibold text-dark mb-1">{{ title }}</h3>
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </div>
</template>