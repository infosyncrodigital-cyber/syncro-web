<script setup lang="ts">
import { ref, watch } from 'vue'
import { X } from 'lucide-vue-next'

const props = defineProps<{
  isOpen: boolean
  initialTab?: 'privacy' | 'legal'
}>()

const emit = defineEmits(['close'])

const activeTab = ref(props.initialTab || 'privacy')

watch(() => props.initialTab, (newVal) => {
  if (newVal) activeTab.value = newVal
})

const setTab = (tab: 'privacy' | 'legal') => {
  activeTab.value = tab
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xl transition-opacity" @click="$emit('close')"></div>

    <div class="relative w-full max-w-4xl bg-white dark:bg-[#020617] border border-black/5 dark:border-white/10 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-fade-in-up transition-colors duration-500">
      
      <!-- Header -->
      <div class="flex items-center justify-between px-8 py-6 border-b border-black/5 dark:border-white/10 bg-slate-50 dark:bg-white/5 backdrop-blur-md transition-colors duration-500">
        <div class="flex gap-1 md:gap-4">
          <button 
            @click="setTab('privacy')"
            class="px-5 py-3 text-[10px] font-black tracking-widest uppercase transition-all"
            :class="activeTab === 'privacy' ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' : 'text-slate-500 hover:text-black dark:hover:text-white'"
          >
            Privacidad
          </button>
          <button 
            @click="setTab('legal')"
            class="px-5 py-3 text-[10px] font-black tracking-widest uppercase transition-all"
            :class="activeTab === 'legal' ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' : 'text-slate-500 hover:text-black dark:hover:text-white'"
          >
            Aviso Legal
          </button>
        </div>
        
        <button @click="$emit('close')" class="p-2 text-slate-500 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all">
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Content -->
      <div class="p-8 md:p-12 overflow-y-auto text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-8 scrollbar-hide transition-colors duration-500">
        
        <div v-if="activeTab === 'privacy'" class="space-y-8 animate-fade-in">
          <h2 class="text-3xl font-black text-black dark:text-white tracking-tighter transition-colors duration-500">Política de Privacidad</h2>
          <p class="text-lg font-light italic">En <span class="text-primary font-bold">Syncro Digital</span>, tu privacidad es el núcleo de nuestra integridad técnica. Cumplimos estrictamente con el RGPD.</p>
          
          <div class="space-y-6">
            <section class="space-y-2">
              <h3 class="text-xs font-black tracking-[0.2em] uppercase text-black dark:text-white transition-colors duration-500">1. Responsable del Tratamiento</h3>
              <div class="pl-4 border-l border-primary/30 py-1 space-y-1">
                <p><span class="text-black dark:text-white font-bold">Titular:</span> Pau Monedero Roigé</p>
                <p><span class="text-black dark:text-white font-bold">NIF:</span> 49724453V</p>
                <p><span class="text-black dark:text-white font-bold">Email:</span> info@syncrodigital.es</p>
              </div>
            </section>

            <section class="space-y-2">
              <h3 class="text-xs font-black tracking-[0.2em] uppercase text-black dark:text-white transition-colors duration-500">2. Finalidad y Sincronización</h3>
              <p class="font-light">Gestionamos tus datos exclusivamente para responder a tus desafíos tecnológicos planteados en el formulario y asegurar una comunicación fluida. No comerciamos con tu información.</p>
            </section>

            <section class="space-y-2">
              <h3 class="text-xs font-black tracking-[0.2em] uppercase text-black dark:text-white transition-colors duration-500">3. Derechos Digitales</h3>
              <p class="font-light">Tienes pleno control sobre tus datos. Acceso, rectificación, portabilidad y olvido. Envíanos un email y sincronizaremos tu solicitud al instante.</p>
            </section>
          </div>
        </div>

        <div v-if="activeTab === 'legal'" class="space-y-8 animate-fade-in">
          <h2 class="text-3xl font-black text-black dark:text-white tracking-tighter transition-colors duration-500">Aviso Legal</h2>
          <p class="text-lg font-light">Transparencia absoluta cumpliendo con el artículo 10 de la Ley 34/2002 LSSICE.</p>

          <div class="space-y-6">
            <section class="space-y-2">
              <h3 class="text-xs font-black tracking-[0.2em] uppercase text-black dark:text-white transition-colors duration-500">1. Titularidad del Ecosistema</h3>
              <div class="pl-4 border-l border-primary/30 py-1 space-y-1">
                <p><span class="text-black dark:text-white font-bold">Syncro Digital</span></p>
                <p>NIF 49724453V</p>
                <p>Sabadell, Barcelona</p>
              </div>
            </section>

            <section class="space-y-2">
              <h3 class="text-xs font-black tracking-[0.2em] uppercase text-black dark:text-white transition-colors duration-500">2. Propiedad Intelectual</h3>
              <p class="font-light">Todo el código fonte, arquitectura visual y activos digitales de syncrodigital.es están protegidos bajo leyes de propiedad intelectual internacionales.</p>
            </section>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>