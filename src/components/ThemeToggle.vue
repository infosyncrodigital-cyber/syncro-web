<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(true)

onMounted(() => {
  // Check localStorage or system preference
  const theme = localStorage.getItem('theme')
  if (theme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    // Default is dark if no preference is set OR theme is 'dark'
    isDark.value = true
    document.documentElement.classList.add('dark')
    if (!theme) localStorage.setItem('theme', 'dark')
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>

<template>
  <button 
    @click="toggleTheme" 
    class="relative p-2 w-12 h-12 flex items-center justify-center bg-white/5 dark:bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden transition-all duration-500 hover:border-primary group"
    aria-label="Cambiar tema"
  >
    <!-- Background slide effect -->
    <div class="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

    <div class="relative z-10">
      <Transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="transform -translate-y-8 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-500 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-8 opacity-0"
        mode="out-in"
      >
        <Sun v-if="isDark" class="w-5 h-5 text-white" />
        <Moon v-else class="w-5 h-5 text-black group-hover:text-white transition-colors" />
      </Transition>
    </div>
  </button>
</template>
