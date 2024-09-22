<template>
  <section class="max-w-[1028px] px-[20px] lg:px-0 container-body">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
      <div class="flex flex-col items-center gap-[24px] mt-[24px]">
        <h2 class="mobile-heading-2 text-color-gray-50 md:desktop-heading-2 w-full">Contexto del Proyecto</h2>
        <div class="flex flex-row items-start gap-[20px]">
          <div class="p-[15px] bg-color-primary-500 rounded-full flex">
            <span class="icon-[mdi--puzzle-remove] text-white text-[25px] md:text-[50px]"></span>
          </div>
          <div>
            <h3 class="mobile-heading-3 text-color-gray-50">Problema</h3>
            <p class="mobile-body text-color-gray-500">{{ problema }}</p>
          </div>
        </div>
        <div class="flex flex-row items-start gap-[20px]">
          <div class="p-[15px] bg-color-primary-500 rounded-full flex">
            <span class="icon-[mdi--bullseye-arrow] text-white text-[25px] md:text-[50px]"></span>
          </div>
          <div>
            <h3 class="mobile-heading-3 text-color-gray-50">Objetivo</h3>
            <p class="mobile-body text-color-gray-500">{{ objetivo }}</p>
          </div>
        </div>
        <div class="flex flex-row items-start gap-[20px]">
          <div class="p-[15px] bg-color-primary-500 rounded-full flex">
            <span class="icon-[material-symbols--rocket-launch] text-white text-[25px] md:text-[50px]"></span>
          </div>
          <div>
            <h3 class="mobile-heading-3 text-color-gray-50">Solución</h3>
            <p class="mobile-body text-color-gray-500">{{ solucion }}</p>
          </div>
        </div>
      </div>
      <div class="bg-color-bg-2 rounded-[20px] flex justify-center items-center">
        <img :src="require(`@/assets/img/${img}.png`)" alt="Proyecto" class="w-[500px]" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    problema: {
      type: String,
      required: true
    },
    objetivo: {
      type: String,
      required: true
    },
    solucion: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
</style>
