<template>
  <section
    class="max-w-[1028px] grid grid-cols-1 lg:grid-cols-2 items-center gap-[32px] md:gap-[80px] px-[20px] md:px-0 container-body"
  >
    <div class="flex flex-col gap-[24px]">
      <div class="flex flex-col items-start gap-[16px]">
        <span class="mobile-caption md:desktop-caption text-color-primary-500"
          >Sobre Nosotros</span
        >
        <h2
          class="mobile-heading-2 md:desktop-heading-2 text-color-gray-50 text-left"
        >
          Impulsado por la pasión, definido por la excelencia
        </h2>
      </div>
      <p class="text-color-gray-500 mobile-body md:desktop-body">
        Somos una agencia de desarrollo de software en Perú, especializada en
        crear experiencias digitales excepcionales. Nuestra misión es impulsar
        el éxito de tu negocio con soluciones personalizadas y de alta calidad.
      </p>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-[24px]">
        <div>
          <span class="mobile-heading-3 md:desktop-heading-3 text-color-gray-50">+3</span>
          <p class="text-color-gray-500 mobile-body md:desktop-body">Años de Experiencia</p>
        </div>
        <div>
          <span class="mobile-heading-3 md:desktop-heading-3 text-color-gray-50">+30</span>
          <p class="text-color-gray-500 mobile-body md:desktop-body">Clientes Felices</p>
        </div>
        <div>
          <span class="mobile-heading-3 md:desktop-heading-3 text-color-gray-50">+32</span>
          <p class="text-color-gray-500 mobile-body md:desktop-body">Proyectos Exitosos</p>
        </div>
      </div>
    </div>
    <div class="h-[326px] lg:h-[560px]">
      <img
        src="@/assets/img/abouthome.jpg"
        alt="Imagen de un equipo trabajando"
        class="w-full h-full object-cover rounded-[20px]"
      />
    </div>
  </section>
</template>
<script lang="ts"></script>
<style scoped></style>
