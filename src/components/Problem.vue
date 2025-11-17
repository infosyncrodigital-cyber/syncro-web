<script setup lang="ts">
// (Este componente no necesita lógica de script por ahora)
</script>

<template>
  <section id="problema" class="py-20 md:py-24 bg-light border-t border-gray-100">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center mb-16">
              <h2 class="text-3xl md:text-4xl font-bold tracking-tighter text-dark mb-4">
                  ¿Sientes la desincronización?
              </h2>
              <p class="text-lg text-gray-600">
                  El "ruido" digital ocurre cuando tus herramientas y equipos trabajan por separado.
              </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm">
                  <svg class="w-10 h-10 mx-auto mb-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M20 4v.01M4 20v.01M18.364 5.636a9 9 0 010 12.728M5.636 18.364a9 9 0 010-12.728"></path></svg>
                  <h3 class="font-semibold text-dark">Redes que gritan al vacío</h3>
                  <p class="text-gray-600 text-sm">Publicas contenido, pero no genera ventas ni conecta con tu web.</p>
              </div>
              <div class="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm">
                  <svg class="w-10 h-10 mx-auto mb-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                  <h3 class="font-semibold text-dark">Una web que no habla con ventas</h3>
                  <p class="text-gray-600 text-sm">Atraes tráfico, pero tu web no habla con tu CRM ni cualifica los leads.</p>
              </div>
              <div class="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm">
                  <svg class="w-10 h-10 mx-auto mb-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <h3 class="font-semibold text-dark">Horas perdidas en tareas manuales</h3>
                  <p class="text-gray-600 text-sm">Copias y pegas datos entre 5 apps diferentes. Cada día.</p>
              </div>
          </div>
      </div>
  </section>
</template>