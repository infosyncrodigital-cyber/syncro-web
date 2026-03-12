<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header 
    :class="[
      'fixed top-0 z-50 w-full transition-all duration-300',
      isScrolled 
        ? 'bg-[#020617]/90 backdrop-blur-md border-b border-white/10 py-2' 
        : 'bg-transparent border-transparent py-4'
    ]"
  >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
              
              <a 
                class="text-2xl font-bold tracking-tight text-white transition-colors duration-300"
                href="#" 
                @click="closeMobileMenu"
              >
                  Syncro Digital
              </a>
              
              <nav class="hidden md:flex space-x-8 items-center">
                  <a href="#servicios" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Servicios</a>
                  <a href="#proceso" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Proceso</a>
                  <a href="#contacto" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Contacto</a>
                  <a href="#contacto" class="px-6 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary-dark transition-all rounded-none shadow-lg shadow-primary/20">
                      Empezar
                  </a>
              </nav>

              <div class="md:hidden">
                  <button @click="toggleMobileMenu" class="text-white p-2" aria-label="Abrir menú">
                    <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
              </div>
          </div>
      </div>

      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-[#020617] border-b border-white/10 shadow-2xl py-8 z-40">
            <nav class="flex flex-col space-y-6 px-6">
                <a href="#servicios" @click="closeMobileMenu" class="text-xl font-bold text-white/70 hover:text-white">Servicios</a>
                <a href="#proceso" @click="closeMobileMenu" class="text-xl font-bold text-white/70 hover:text-white">Proceso</a>
                <a href="#contacto" @click="closeMobileMenu" class="text-xl font-bold text-white/70 hover:text-white">Contacto</a>
                <a href="#contacto" @click="closeMobileMenu" class="mt-4 px-6 py-4 text-center text-sm font-bold tracking-widest uppercase text-white bg-primary rounded-none">
                    Empezar Sincronización
                </a>
            </nav>
        </div>
      </Transition>
  </header>
</template>