<template>
  <section class="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden text-white w-full">
      
      <!-- Kinetic Background Marquee -->
      <div class="absolute inset-0 flex flex-col justify-around opacity-[0.03] select-none pointer-events-none z-0 overflow-hidden">
        <div class="marquee-wrapper">
          <div class="marquee-text whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] font-black leading-none uppercase">
            SINCRO DIGITAL · ESTRATEGIA · INNOVACIÓN · SINCRO DIGITAL · ESTRATEGIA · INNOVACIÓN · SINCRO DIGITAL · ESTRATEGIA · INNOVACIÓN · SINCRO DIGITAL · ESTRATEGIA · INNOVACIÓN ·
          </div>
        </div>
        <div class="marquee-wrapper">
          <div class="marquee-text-reverse whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] font-black leading-none uppercase">
            AUTOMATIZACIÓN · CRECIMIENTO · ÉXITO · AUTOMATIZACIÓN · CRECIMIENTO · ÉXITO · AUTOMATIZACIÓN · CRECIMIENTO · ÉXITO · AUTOMATIZACIÓN · CRECIMIENTO · ÉXITO ·
          </div>
        </div>
        <div class="marquee-wrapper">
          <div class="marquee-text whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[15rem] font-black leading-none uppercase">
            SOFTWARE · SOLUCIONES · FUTURO · SOFTWARE · SOLUCIONES · FUTURO · SOFTWARE · SOLUCIONES · FUTURO · SOFTWARE · SOLUCIONES · FUTURO ·
          </div>
        </div>
      </div>
      
      <!-- Subtle Grid Overlay -->
      <div class="absolute inset-0 bg-[linear-gradient(theme(colors.blue.900/0.1)_1px,transparent_1px),linear-gradient(90deg,theme(colors.blue.900/0.1)_1px,transparent_1px)] bg-[length:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <!-- Hero Glows -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[60vw] h-[90vw] md:h-[60vw] bg-primary/20 rounded-full blur-[100px] md:blur-[160px] pointer-events-none"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[50vw] md:w-[40vw] h-[50vw] md:h-[40vw] bg-secondary/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full py-20 overflow-x-hidden">
          
          <div class="max-w-5xl mx-auto text-center">
              
              <!-- Top Label -->
              <div data-aos="fade-down" class="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-10">
                <div class="h-[1px] w-4 md:w-8 bg-primary/50"></div>
                <span class="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-primary-light/80 text-center">
                  Estudio de Sincronía Digital
                </span>
                <div class="h-[1px] w-4 md:w-8 bg-primary/50"></div>
              </div>
              
              <!-- Main Heading -->
              <h1 data-aos="fade-up" data-aos-delay="100" class="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tight leading-[1.1] md:leading-[0.95] mb-8 px-2">
                  Tu negocio en
                  <span class="block mt-2 relative inline-block">
                    <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-light to-white">perfecta sintonía.</span>
                    <!-- Neon Underline Effect -->
                    <div class="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent blur-[2px]"></div>
                    <div class="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[1px] bg-primary"></div>
                  </span>
              </h1>
              
              <!-- Description -->
              <p data-aos="fade-up" data-aos-delay="200" class="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 md:mb-16 font-light leading-relaxed px-4">
                  Creamos ecosistemas digitales donde <span class="text-white font-medium">redes, web y procesos</span> convergen para impulsar tu marca sin límites.
              </p>
              
              <!-- Action Group -->
              <div data-aos="fade-up" data-aos-delay="300" class="flex flex-col sm:flex-row items-center justify-center gap-6 px-4">
                <!-- Primary Action -->
                <a href="#servicios" class="w-full sm:w-auto group relative px-8 md:px-10 py-4 md:py-5 bg-primary text-white font-bold rounded-none hover:bg-primary-dark transition-all duration-500 overflow-hidden text-center">
                  <span class="relative z-10 flex items-center justify-center gap-3 tracking-widest uppercase text-xs md:text-sm">
                    Ver Servicios
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <div class="absolute top-0 -left-full w-full h-full bg-white/20 skew-x-[-20deg] group-hover:left-full transition-all duration-700"></div>
                </a>

                <!-- Secondary Action -->
                <a href="#portfolio" class="text-xs md:text-sm font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors flex items-center gap-2 group py-2">
                  Explorar Portfolio
                  <div class="h-[1px] w-0 bg-white group-hover:w-8 transition-all duration-300"></div>
                </a>
              </div>

          </div>
      </div>

      <!-- Bottom Gradient Mask -->
      <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
  </section>
</template>

<style scoped>
.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  display: flex;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.marquee-text {
  animation: marquee 30s linear infinite;
  display: inline-block;
  padding-right: 2rem;
}

.marquee-text-reverse {
  animation: marquee-reverse 30s linear infinite;
  display: inline-block;
  padding-right: 2rem;
}
</style>