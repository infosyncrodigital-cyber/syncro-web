<script setup lang="ts">
const emit = defineEmits(['open-legal'])
</script>

<template>
  <footer class="bg-white dark:bg-[#020617] text-slate-600 dark:text-slate-500 py-20 border-t border-black/5 dark:border-white/5 overflow-hidden transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <!-- Logo Col -->
        <div class="col-span-1 lg:col-span-2 space-y-8">
          <a class="text-3xl font-black text-black dark:text-white tracking-tighter transition-colors duration-500" href="#">
            SYNCRO <span class="text-primary">DIGITAL.</span>
          </a>
          <p class="text-lg text-slate-600 dark:text-slate-400 font-light max-w-sm leading-relaxed transition-colors duration-500">
            Sincronizamos marcas con el futuro digital. Estrategia, tecnología y diseño en perfecta armonía.
          </p>
          <div class="flex space-x-6">
            <a href="https://www.linkedin.com/company/syncro-digital-es/about/" class="p-3 bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-none text-black dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all duration-500" aria-label="LinkedIn">
              <svg class="w-5 h-5 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
            <a href="https://www.instagram.com/syncrodigital_?igsh=Ymx3cnNmcWJidm15" class="p-3 bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-none text-black dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all duration-500" aria-label="Instagram">
              <svg class="w-5 h-5 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.229-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.149-3.229 1.664-4.771 4.919-4.919 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z"></path></svg>
            </a>
          </div>
        </div>

        <!-- Links Col 1 -->
        <div>
          <h4 class="text-black dark:text-white font-bold tracking-widest uppercase text-xs mb-8 transition-colors duration-500">Navegación</h4>
          <ul class="space-y-4 text-sm">
            <li><a href="#servicios" class="hover:text-primary transition-colors">Servicios</a></li>
            <li><a href="#portfolio" class="hover:text-primary transition-colors">Portfolio</a></li>
            <li><a href="#proceso" class="hover:text-primary transition-colors">Proceso</a></li>
            <li><a href="#contacto" class="hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>

        <!-- Links Col 2 -->
        <div>
          <h4 class="text-black dark:text-white font-bold tracking-widest uppercase text-xs mb-8 transition-colors duration-500">Compañía</h4>
          <ul class="space-y-4 text-sm">
            <li><a href="#" @click.prevent="$emit('open-legal', 'legal')" class="hover:text-primary transition-colors">Aviso Legal</a></li>
            <li><a href="#" @click.prevent="$emit('open-legal', 'privacy')" class="hover:text-primary transition-colors">Privacidad</a></li>
          </ul>
        </div>
      </div>

      <div class="pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-600 transition-colors duration-500">
        <p>&copy; 2025 SYNCRO DIGITAL. EXCELENCIA TÉCNICA.</p>
        <p class="mt-4 md:mt-0">DISEÑADO PARA EL FUTURO.</p>
      </div>
    </div>
  </footer>
</template>