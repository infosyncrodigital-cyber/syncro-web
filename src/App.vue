<script setup lang="ts">
import SiteHeader from './components/Header.vue'
import Hero from './components/Hero.vue'
import Work from './components/Work.vue'
import Showcase from './components/Showcase.vue'
import Pricing from './components/Pricing.vue'
import Process from './components/Process.vue'
import About from './components/About.vue'
import FAQ from './components/FAQ.vue'
import Contact from './components/Contact.vue'
import SiteFooter from './components/Footer.vue'
import CookieBanner from './components/CookieBanner.vue'
import LegalModal from './components/LegalModal.vue'
</script>

<template>
  <div class="page">
    <SiteHeader />
    <main>
      <Hero />
      <Work />
      <Showcase />
      <Pricing />
      <Process />
      <About />
      <FAQ />
      <Contact />
    </main>
  </div>
  <SiteFooter />
  <CookieBanner />
  <LegalModal />
</template>

<style>
/* the page slides away to uncover the footer underneath it */
.page {
  position: relative;
  z-index: 1;
  background: var(--blue);
}
</style>
