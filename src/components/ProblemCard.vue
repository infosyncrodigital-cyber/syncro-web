<script setup lang="ts">
defineProps<{
  title: string
  description: string
  iconPath: string // El dibujo del SVG
}>()
</script>

<template>
  <div class="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm">
    <svg class="w-10 h-10 mx-auto mb-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPath"></path>
    </svg>
    <h3 class="font-semibold text-dark">{{ title }}</h3>
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </div>
</template>