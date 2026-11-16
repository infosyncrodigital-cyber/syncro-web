import { createSSRApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vReveal } from './reveal'

// The page is prerendered at build time (see prerender.mjs) and hydrated here.
const app = createSSRApp(App)
app.directive('reveal', vReveal)
app.mount('#app')
