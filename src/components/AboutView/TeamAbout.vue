<script lang="ts">
</script>
<template>
  <section
    class="max-w-[1028px] flex flex-col items-center gap-[32px] px-[20px] lg:px-0 md:justify-center container-body"
  >
    <div class="flex flex-col items-center gap-[16px]">
      <span class="mobile-caption md:desktop-caption text-color-primary-500" data-aos="zoom-in-up"
        >Nuestro Equipo</span
      >
      <h2
        class="mobile-heading-2 md:desktop-heading-2 text-color-gray-50 text-center" data-aos="zoom-in-up"
      >
        Conoce a nuestros profesionales
      </h2>
    </div>
    <div class="flex flex-col gap-[32px] md:flex-row md:gap-[76px]">
      <div class="flex flex-col gap-[16px]" data-aos="zoom-in-up" data-aos-delay="50" data-aos-offset="0">
        <div class="w-auto h-[354px]">
          <img
            src="@/assets/img/dreix.png"
            alt="Imagen del desarrollador dreix"
            class="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <h5 class="mobile-heading-5 text-white md:desktop-heading-5">
          José Jarlin Chiquin - Dreix
        </h5>
        <p class="mobile-body text-color-gray-500 md:desktop-body">
          Desarrollador Back-End
        </p>
      </div>
      <div class="flex flex-col gap-[16px]" data-aos="zoom-in-up" data-aos-delay="200" data-aos-offset="0">
        <div class="w-auto h-[354px]">
          <img
            src="@/assets/img/jhordev.png"
            alt="Imagen del desarrollador dreix"
            class="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <h5 class="mobile-heading-5 text-white md:desktop-heading-5">
          Jhordy Mondragon - Jhordev
        </h5>
        <p class="mobile-body text-color-gray-500 md:desktop-body">
          Desarrollador Front-End
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
