<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear();
    return {
      currentYear,
    };
  },
});
</script>

<template>
  <div class="bg-color-bg-1">
    <footer
      class="container-body py-[32px] flex flex-col gap-[34px] border-b-[1px] border-color-gray-900 md:flex-row md:gap-[32px]"
    >
      <div class="flex flex-col gap-[24px] flex-[0.4]" data-aos="fade-up" data-aos-delay="0" data-aos-offset="0">
        <img src="@/assets/Logo.svg" alt="Logo" class="flex-initial w-[90px]" />
        <p class="mobile-caption text-color-gray-500 md:desktop-caption">
          Somos un equipo apasionado de visionarios digitales, dedicados a crear
          soluciones digitales excepcionales.
        </p>
      </div>
      <div
        class="flex flex-col gap-[34px] md:flex-row flex-[1] justify-between"
      >
        <div class="flex flex-col gap-[24px]" data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
          <h5 class="mobile-heading-5 text-color-gray-50 md:desktop-heading-5">
            Sobre Nosotros
          </h5>
          <ul class="flex flex-col gap-[16px]">
            <li>
              <router-link
                to="/"
                class="text-color-gray-500 mobile-caption md:desktop-caption"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="text-color-gray-500 mobile-caption md:desktop-caption"
                >Sobre Nosotros</router-link
              >
            </li>
            <li>
              <router-link
                to="/projects"
                class="text-color-gray-500 mobile-caption md:desktop-caption"
                >Nuestros Proyectos</router-link
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-[24px]" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
          <h5 class="mobile-heading-5 text-color-gray-50 md:desktop-heading-5">
            Redes Sociales
          </h5>
          <ul class="flex flex-col gap-[16px]">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61565323211496"
                target="_blank"
                class="text-color-gray-500 mobile-caption md:desktop-caption"
                >Facebook</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-color-gray-500 mobile-caption md:desktop-caption line-through cursor-default"
                >Instagram</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-color-gray-500 mobile-caption md:desktop-caption line-through cursor-default"
                >Behance</a
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-[24px]" data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">
          <h5 class="mobile-heading-5 text-color-gray-50 md:desktop-heading-5">
            Privacidad
          </h5>
          <ul class="flex flex-col gap-[16px]">
            <li>
              <router-link
                to="/"
                class="text-color-gray-500 mobile-caption md:desktop-caption"
                >Preguntas Frecuentes</router-link
              >
            </li>
            <li>
              <router-link
                to="/"
                class="text-color-gray-500 mobile-caption md:desktop-caption"
                >Términos y Condiciones</router-link
              >
            </li>
            <li>
              <router-link
                to="/"
                class="text-color-gray-500 mobile-caption md:desktop-caption"
                >Privacidad</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div class="text-center py-[32px]" data-aos="zoom-in" data-aos-delay="100" data-aos-offset="0">
      <p class="text-color-gray-500 mobile-caption px-[50px] md:desktop-caption">
        &copy;{{ currentYear }} - Todos los derechos reservados | Desarrollado
        por iCe-Digital
      </p>
    </div>
  </div>
</template>

<style scoped></style>
