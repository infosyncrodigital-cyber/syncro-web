<script setup lang="ts">
// 1. Importamos 'ref' de Vue para crear variables de estado
import { ref } from 'vue'

// 2. Creamos la variable de estado. Por defecto, el menú está cerrado (false)
const isMobileMenuOpen = ref(false)

// 3. Creamos una función para alternar el estado (abrir/cerrar)
const toggleMobileMenu = () => {
  // .value es como accedemos al valor de un 'ref'
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 4. Creamos una función para CERRAR el menú (la usaremos en los enlaces)
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200/60 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
              
              <a class="text-2xl font-bold text-primary tracking-tight" href="#" @click="closeMobileMenu">
                  Synkro Digital
              </a>
              
              <nav class="hidden md:flex space-x-6 items-center">
                  <a href="#servicios" class="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Servicios</a>
                  <a href="#proceso" class="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Proceso</a>
                  <a href="#contacto" class="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Contacto</a>
                  <a href="#contacto" class="px-5 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-shadow shadow-sm hover:shadow-lg hover:shadow-blue-500/20">
                      Empezar Sincronización
                  </a>
              </nav>

              <div class="md:hidden">
                  <button @click="toggleMobileMenu" class="text-gray-600" aria-label="Abrir menú">

                    <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>

                    <svg v-if="isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                  </button>
              </div>
          </div>
      </div>

      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-40">
          <nav class="flex flex-col space-y-4 px-4">
              <a href="#servicios" @click="closeMobileMenu" class="block text-base font-medium text-gray-700 hover:text-primary transition-colors px-2 py-1 rounded">Servicios</a>
              <a href="#proceso" @click="closeMobileMenu" class="block text-base font-medium text-gray-700 hover:text-primary transition-colors px-2 py-1 rounded">Proceso</a>
              <a href="#contacto" @click="closeMobileMenu" class="block text-base font-medium text-gray-700 hover:text-primary transition-colors px-2 py-1 rounded">Contacto</a>
              <a href="#contacto" @click="closeMobileMenu" class="mt-2 inline-block px-5 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-shadow text-center">
                  Empezar Sincronización
              </a>
          </nav>
      </div>
  </header>
</template>