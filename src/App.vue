<script setup lang="ts">
// 1. Importamos TODOS los componentes
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Problem from './components/Problem.vue'
import Services from './components/Services.vue'
import Process from './components/Process.vue'
// import Testimonial from './components/Testimonial.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import TechStack from './components/TechStack.vue'
</script>

<template>
  <Header />

  <main>
    <Hero />
    <Problem />
    <Services />
    <Process />
    <TechStack />
    <!-- <Testimonial /> -->
    <Contact />
  </main>

  <Footer />
</template>

<style scoped>
/* (Generalmente vacío si usas Tailwind para todo) */
</style>