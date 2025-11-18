<script setup lang="ts">
const services = [
  {
    title: 'Sincro-Social',
    description: 'No publiques por publicar. Creamos estrategias de contenido que no solo generan "likes", sino que se integran con tu CRM para convertir seguidores en clientes reales.',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.084-1.284-.24-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.084-1.284.24-1.857m10.8-2.309A5 5 0 0017 13c0-2.21-1.343-4-3-4s-3 1.79-3 4c0 .63.148 1.22.408 1.741M11 13c0-2.21-1.343-4-3-4S5 10.79 5 13c0 .63.148 1.22.408 1.741',
    color: 'from-blue-500 to-cyan-400' // Degradado único para este servicio
  },
  {
    title: 'Sincro-Web',
    description: 'Tu web no debería ser un folleto estático. Diseñamos plataformas vivas en Vue.js que actúan como el cerebro de tu negocio: rápidas, seguras y conectadas con todas tus herramientas.',
    iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Sincro-Flow',
    description: 'Olvídate de copiar y pegar datos. Conectamos tus formularios con tu email, tu WhatsApp con tu calendario y tu facturación con tu banco. Automatización real para ganar tiempo.',
    iconPath: 'M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.209-.138 2.43-.138 3.662s.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.43.138-3.662zM12 15a3 3 0 100-6 3 3 0 000 6z',
    color: 'from-emerald-500 to-teal-400'
  }
]
</script>

<template>
  <section id="servicios" class="py-24 md:py-32 bg-white overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mx-auto text-center mb-24">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tighter text-dark mb-6">
          Más que servicios,<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Soluciones Integradas</span>
        </h2>
        <p class="text-lg text-gray-600">
          Dejamos atrás las soluciones aisladas. Unimos tus pilares digitales en un solo ecosistema inteligente.
        </p>
      </div>

      <div class="space-y-24">
        
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          class="flex flex-col md:flex-row items-center gap-12 md:gap-20"
          :class="{ 'md:flex-row-reverse': index % 2 !== 0 }" 
        >
          <div class="flex-1 w-full relative group">
            <div class="absolute inset-0 bg-gradient-to-r opacity-20 blur-2xl rounded-full transform group-hover:scale-110 transition-transform duration-700" :class="service.color"></div>
            
            <div class="relative bg-white border border-gray-100 p-8 rounded-2xl shadow-xl h-64 flex items-center justify-center transform transition-transform duration-500 hover:-translate-y-2">
              <div class="p-4 rounded-2xl bg-gradient-to-br text-white shadow-lg" :class="service.color">
                <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="service.iconPath"></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="flex-1 text-center md:text-left">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-xl font-bold text-gray-400 mb-6">
              0{{ index + 1 }}
            </div>
            <h3 class="text-3xl font-bold text-dark mb-4">{{ service.title }}</h3>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              {{ service.description }}
            </p>
            <a href="#contacto" class="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors group">
              Saber más
              <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>