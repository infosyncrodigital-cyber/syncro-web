<script setup lang="ts">
import { ref } from 'vue'

// 1. Variables para guardar lo que escribe el usuario
const name = ref('')
const email = ref('')
const message = ref('')

// 2. Variables para controlar el estado (si está cargando, si hubo error, etc.)
const formState = ref('idle') // estados: 'idle' | 'loading' | 'success' | 'error'
const formMessage = ref('')

// 3. Función que se ejecuta al dar click en "Empezar Sincronización"
const handleSubmit = async () => {
  formState.value = 'loading'
  formMessage.value = ''

  try {
    // Enviamos los datos a TU backend que tienes corriendo en la otra terminal
    const response = await fetch('http://localhost:3000/api/enviar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor')
    }

    // Si todo sale bien:
    formState.value = 'success'
    formMessage.value = '¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.'
    
    // Limpiamos el formulario
    name.value = ''
    email.value = ''
    message.value = ''

  } catch (error) {
    // Si algo falla:
    console.error(error)
    formState.value = 'error'
    formMessage.value = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
  }
}
</script>

<template>
  <section id="contacto" class="py-20 md:py-32 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-light rounded-2xl p-8 md:p-16 border border-gray-100 shadow-xl shadow-gray-500/5">
              <div class="grid md:grid-cols-2 gap-16 items-center">
                  
                  <div class="max-w-md">
                      <h2 class="text-3xl md:text-4xl font-bold tracking-tighter text-dark mb-4">
                          ¿Listo para la Sincronización Total?
                      </h2>
                      <p class="text-lg text-gray-600 mb-6">
                          Hablemos. Cuéntanos dónde está tu 'ruido' y te diremos cómo podemos sincronizarlo.
                      </p>
                      <p class="text-gray-600 mt-4">
                          <strong>Email:</strong> hola@Syncro.digital<br>
                          <strong>Oficina:</strong> Barcelona, España
                      </p>
                  </div>

                  <div>
                      <form @submit.prevent="handleSubmit" class="space-y-6">
                          <div>
                              <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                              <input type="text" name="name" id="name" required v-model="name"
                                     :disabled="formState === 'loading'"
                                     class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50">
                          </div>
                          
                          <div>
                              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                              <input type="email" name="email" id="email" required v-model="email"
                                     :disabled="formState === 'loading'"
                                     class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50">
                          </div>

                          <div>
                              <label for="message" class="block text-sm font-medium text-gray-700">Háblame de tu proyecto...</label>
                              <textarea name="message" id="message" rows="4" required v-model="message"
                                      :disabled="formState === 'loading'"
                                      class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50" placeholder="Ej: Mis redes no conectan con mi web, pierdo mucho tiempo en tareas manuales..."></textarea>
                          </div>

                          <div>
                              <button type="submit" 
                                      :disabled="formState === 'loading'"
                                      class="w-full px-8 py-3 text-lg font-medium text-white bg-secondary rounded-full hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-300/30 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
                                  <span v-if="formState === 'loading'">Enviando...</span>
                                  <span v-else>Empezar Sincronización</span>
                              </button>
                          </div>

                          <div v-if="formState === 'success'" class="p-4 rounded bg-green-100 text-green-700 text-center">
                              {{ formMessage }}
                          </div>
                          <div v-if="formState === 'error'" class="p-4 rounded bg-red-100 text-red-700 text-center">
                              {{ formMessage }}
                          </div>

                      </form>
                  </div>
                  
              </div>
          </div>
      </div>
  </section>
</template>