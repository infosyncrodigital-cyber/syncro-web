<script setup lang="ts">
// Definimos qué datos necesita recibir esta tarjeta para funcionar
defineProps<{
  title: string
  description: string
  iconPath: string // Pasaremos el dibujo del icono (el atributo 'd' del SVG)
}>()
</script>

<template>
  <div class="bg-white p-8 rounded-xl shadow-xl border border-gray-100 transform transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
      <div class="w-12 h-12 flex items-center justify-center bg-primary-light rounded-full mb-4">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPath"></path>
          </svg>
      </div>
      
      <h3 class="text-xl font-bold text-dark mb-2">{{ title }}</h3>
      <p class="text-gray-600">
          {{ description }}
      </p>
  </div>
</template>