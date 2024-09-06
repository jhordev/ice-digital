<template>
  <section
    class="max-w-[1028px] flex flex-col items-center gap-[24px] px-[20px] md:px-0"
  >
    <div class="flex flex-col items-center gap-[16px]">
      <span
        class="text-center mobile-caption md:desktop-caption text-color-gray-50 border-[1px] border-color-primary-500 px-[16px] py-[8px] rounded-[40px]"
        >Bienvenido al Portafolio de iCe-Digital</span
      >
      <h1
        class="mobile-heading-1 md:desktop-heading-1 md:px-[20px] text-color-gray-50 text-center"
      >
        Transforma tu visión en realidad digital
      </h1>
    </div>
    <p class="mobile-body md:desktop-body text-center text-color-gray-500 px-0 md:px-[20px]">
      En iCe-Digital, convertimos tus ideas en soluciones tecnológicas
      innovadoras. Desde la concepción hasta la implementación, estamos contigo
      en cada paso del camino.
    </p>
    <div class="flex flex-col gap-[16px] w-full md:w-auto md:flex-row">
      <button
        class="flex justify-center items-center px-[30px] py-[15px] bg-color-primary-500 text-color-gray-50 rounded-[50px] mobile-body md:desktop-body"
      >
        <router-link to="/about">Sobre Nosotros</router-link>
      </button>
      <button
        class="flex justify-center items-center px-[30px] py-[15px] border-[1px] border-color-primary-500 hover:bg-color-primary-500 text-color-gray-50 rounded-[50px] mobile-body md:desktop-body"
      >
        <router-link to="/projects">Casos de Estudio</router-link>
      </button>
    </div>
  </section>
</template>
<script lang="ts"></script>
<style scoped></style>
