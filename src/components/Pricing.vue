<script setup lang="ts">
import { ref, computed } from 'vue'
import { choosePlan } from '../store'

const WEB = 600
const YEAR = 180
const years = ref(3)
const total = computed(() => WEB + YEAR * years.value)
// 1.140 € (with the thousands dot, same output on the server and in every browser)
const eur = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' €'
</script>

<template>
  <section id="precios" class="pricing" aria-labelledby="precios-title">
    <h2 id="precios-title" class="sr-only">Precios</h2>

    <article class="plan soft" aria-labelledby="plan-software">
      <h3 id="plan-software" class="head plan-name">Software a medida</h3>
      <p class="lead who">Para cuando el Excel ya no da más: facturación, reservas o gestión interna.</p>
      <p class="what">
        Primero hablamos. Después te paso un presupuesto cerrado por escrito y lo construyo por fases que puedes ir probando.
        Ahora mismo estoy desarrollando SyncroVeri, un programa de facturación preparado para Verifactu.
      </p>
      <div class="foot">
        <p class="price display">A medida</p>
        <a href="#contacto" class="btn btn-yellow" @click="choosePlan('software')">Contarme tu idea <span class="arrow" aria-hidden="true">→</span></a>
      </div>
    </article>

    <article class="plan web" aria-labelledby="plan-web">
      <h3 id="plan-web" class="head plan-name">Web para tu negocio</h3>
      <p class="lead who">Para peluquerías, despachos, tiendas y oficios que quieren que los encuentren.</p>
      <p class="what">
        Diseño a medida, versión para móvil, aviso legal y de cookies, SEO técnico, alta en Search Console
        y tu ficha de Google Business revisada y completa. El dominio va a precio de coste.
        Después, el mantenimiento: 180&nbsp;€ al año (15&nbsp;€ al mes) por el alojamiento, las actualizaciones
        y hasta seis cambios de contenido al año.
      </p>

      <div class="calc" data-ui>
        <label for="years" class="calc-label">
          En <strong>{{ years }} {{ years === 1 ? 'año' : 'años' }}</strong>, todo incluido:
          <strong class="calc-total">{{ eur(total) }}</strong>
        </label>
        <input
          id="years"
          v-model.number="years"
          type="range"
          min="1"
          max="5"
          step="1"
          :aria-valuetext="`${years} ${years === 1 ? 'año' : 'años'}, ${eur(total)} en total`"
        />
      </div>

      <div class="foot">
        <p class="price-wrap"><span class="price display">600&nbsp;€</span> <span class="per">pago único</span></p>
        <a href="#contacto" class="btn btn-black" @click="choosePlan('web')">Pedir esta web <span class="arrow" aria-hidden="true">→</span></a>
      </div>
    </article>
  </section>
</template>

<style scoped>
.pricing {
  display: grid;
  grid-template-columns: 5fr 7fr;
}
.plan {
  min-height: 90svh;
  display: flex;
  flex-direction: column;
  padding: 40px var(--m) var(--m);
  gap: 20px;
}
.soft { background: var(--black); color: var(--paper); }
.web { background: var(--yellow); color: var(--black); }

.plan-name { max-width: 12ch; }
.who { max-width: 26ch; margin: 0; }
.what { max-width: 52ch; margin: 0; }

.calc { margin-top: 8px; max-width: 34rem; }
.calc-label { display: block; margin-bottom: 10px; }
.calc-total { font-weight: 500; white-space: nowrap; }
input[type='range'] {
  width: 100%;
  height: 44px;
  margin: 0;
  background: transparent;
  cursor: pointer;
  accent-color: var(--black);
  -webkit-appearance: none;
  appearance: none;
}
input[type='range']::-webkit-slider-runnable-track { height: 6px; background: var(--black); }
input[type='range']::-moz-range-track { height: 6px; background: var(--black); }
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 28px; height: 28px; margin-top: -11px;
  background: var(--blue); border: 0; border-radius: 0;
  transition: transform 0.15s;
}
input[type='range']::-moz-range-thumb { width: 28px; height: 28px; background: var(--blue); border: 0; border-radius: 0; }
input[type='range']:active::-webkit-slider-thumb { transform: scale(1.15); }

.foot {
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.price {
  font-size: var(--step-display);
  line-height: 0.85;
}
.price-wrap { margin: 0; display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }
.per { white-space: nowrap; }

@media (max-width: 860px) {
  .pricing { grid-template-columns: 1fr; }
  .web { order: -1; }
  .plan { min-height: 70svh; padding: 40px var(--m) 20px; }
  .foot .btn { width: 100%; }
}
</style>
