<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

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
      'fixed top-0 z-50 w-full transition-all duration-500 border-b',
      isScrolled 
        ? 'bg-white/90 dark:bg-[#020617]/90 backdrop-blur-md border-black/5 dark:border-white/10 py-2 shadow-sm' 
        : 'bg-transparent border-transparent py-4'
    ]"
  >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
              
              <a 
                class="text-2xl font-black tracking-tighter transition-colors duration-500"
                :class="isScrolled ? 'text-black dark:text-white' : 'text-black dark:text-white'"
                href="#" 
                @click="closeMobileMenu"
              >
                  SYNCRO <span class="text-primary">DIGITAL.</span>
              </a>
              
              <nav class="hidden md:flex space-x-8 items-center">
                  <a href="#servicios" 
                    class="text-xs font-bold tracking-widest uppercase transition-colors duration-500"
                    :class="isScrolled ? 'text-black/60 dark:text-white/70 hover:text-primary' : 'text-black/60 dark:text-white/70 hover:text-primary dark:hover:text-white'"
                  >Servicios</a>
                  <a href="#proceso" 
                    class="text-xs font-bold tracking-widest uppercase transition-colors duration-500"
                    :class="isScrolled ? 'text-black/60 dark:text-white/70 hover:text-primary' : 'text-black/60 dark:text-white/70 hover:text-primary dark:hover:text-white'"
                  >Proceso</a>
                  <a href="#portfolio" 
                    class="text-xs font-bold tracking-widest uppercase transition-colors duration-500"
                    :class="isScrolled ? 'text-black/60 dark:text-white/70 hover:text-primary' : 'text-black/60 dark:text-white/70 hover:text-primary dark:hover:text-white'"
                  >Portfolio</a>
                  <a href="#contacto" 
                    class="text-xs font-bold tracking-widest uppercase transition-colors duration-500"
                    :class="isScrolled ? 'text-black/60 dark:text-white/70 hover:text-primary' : 'text-black/60 dark:text-white/70 hover:text-primary dark:hover:text-white'"
                  >Contacto</a>
                  
                  <div class="h-6 w-px bg-black/10 dark:bg-white/10 mx-2"></div>
                  
                  <ThemeToggle />

                  <a href="#contacto" class="px-8 py-3 text-[10px] font-black tracking-widest uppercase text-white bg-primary hover:bg-primary-dark transition-all">
                      Empezar
                  </a>
              </nav>

              <div class="md:hidden flex items-center gap-4">
                  <ThemeToggle />
                  <button @click="toggleMobileMenu" class="p-2 transition-colors duration-500" :class="isScrolled ? 'text-black dark:text-white' : 'text-black dark:text-white'" aria-label="Abrir menú">
                    <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-7">
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
        <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#020617] border-b border-black/10 dark:border-white/10 shadow-2xl py-8 z-40">
            <nav class="flex flex-col space-y-6 px-6">
                <a href="#servicios" @click="closeMobileMenu" class="text-xl font-black tracking-tight text-black/70 dark:text-white/70 hover:text-primary">Servicios</a>
                <a href="#proceso" @click="closeMobileMenu" class="text-xl font-black tracking-tight text-black/70 dark:text-white/70 hover:text-primary">Proceso</a>
                <a href="#portfolio" @click="closeMobileMenu" class="text-xl font-black tracking-tight text-black/70 dark:text-white/70 hover:text-primary">Portfolio</a>
                <a href="#contacto" @click="closeMobileMenu" class="text-xl font-black tracking-tight text-black/70 dark:text-white/70 hover:text-primary">Contacto</a>
                <a href="#contacto" @click="closeMobileMenu" class="mt-4 px-8 py-5 text-center text-xs font-black tracking-widest uppercase text-white bg-primary">
                    Iniciar Proyecto
                </a>
            </nav>
        </div>
      </Transition>
  </header>
</template>