<script setup lang="ts">
import { ref } from 'vue'
// 1. Importamos TODOS los componentes
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Problem from './components/Problem.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Process from './components/Process.vue'
import Testimonial from './components/Testimonial.vue'
import FAQ from './components/FAQ.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import TechStack from './components/TechStack.vue'
import CookieBanner from './components/CookieBanner.vue'
import LegalModal from './components/LegalModal.vue'

//Variable para controlar si el modal está abierto
const showLegalModal = ref(false)
const legalTab = ref<'privacy' | 'legal'>('privacy')

//Función para abrir el modal
const openLegal = (tab: 'privacy' | 'legal') => {
  legalTab.value = tab
  showLegalModal.value = true
}

</script>

<template>
  <Header />

  <main>
    <Hero />
    <Problem />
    <Services />
    <Portfolio />
    <Process />
    <Testimonial />
    <TechStack />
    <FAQ />
    <Contact />
  </main>

  <Footer @open-legal="openLegal" />

  <CookieBanner @open-policy="openLegal('privacy')" />

  <LegalModal 
  :is-open="showLegalModal"
  :initial-tab="legalTab"
  @close="showLegalModal = false"
   />
</template>

<style scoped>
/* (Generalmente vacío si usas Tailwind para todo) */
</style>