import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 1. Importar AOS y sus estilos
import AOS from 'aos'
import 'aos/dist/aos.css'

// 2. Inicializar AOS
AOS.init({
  duration: 800, // Duración de la animación (en ms)
  once: true,    // Para que solo se anime una vez al bajar (no al subir y bajar todo el rato)
  offset: 100,   // Empieza a animar cuando el elemento está 100px dentro de la pantalla
  easing: 'ease-out-cubic' // El tipo de "frenada" de la animación (suave)
})

createApp(App).mount('#app')
