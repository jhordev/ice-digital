<script lang="ts">

</script>
<template>
  <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    class="max-w-[1028px] flex flex-col items-center gap-[24px] px-[20px] md:px-0"
  >
    <div class="flex flex-col items-center gap-[16px]">
      <span
        class="hover-bg-expand-left cursor-default text-center mobile-caption md:desktop-caption text-color-gray-50 border-[1px] border-color-primary-500 px-[16px] py-[8px] rounded-[40px]"
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
      <router-link to="/about"    class="flex justify-center items-center px-[30px] py-[15px] bg-color-primary-500 text-color-gray-50 rounded-[50px] mobile-body md:desktop-body">
        Sobre Nosotros
      </router-link>
      <router-link to="/projects"         class="flex justify-center items-center px-[30px] py-[15px] border-[1px] border-color-primary-500 hover-bg-expand text-color-gray-50 rounded-[50px] mobile-body md:desktop-body">
       Casos de Estudio
      </router-link>
    </div>
  </section>
</template>
<style scoped>
.hover-bg-expand {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.hover-bg-expand::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #007BFF;
  z-index: -1;
  transition: all 0.5s ease;
}

.hover-bg-expand:hover::before {
  height: 100%;
}

.hover-bg-expand-left {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.hover-bg-expand-left::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-radius: 50px;
  background-color: #007BFF;
  z-index: -1;
  transition: all 0.5s ease;
}

.hover-bg-expand-left:hover::before {
  width: 100%;
}
</style>
