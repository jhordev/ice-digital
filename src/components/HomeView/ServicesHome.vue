<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const route = useRoute();
    const isRootRoute = computed(() => route.path === "/");

    return {
      isRootRoute,
    };
  },
});
</script>
<template>
  <section
    class="max-w-[1028px] flex flex-col items-center gap-[32px] px-[20px] md:px-0 container-body"
  >
    <div v-if="isRootRoute" class="flex flex-col items-center gap-[16px]">
      <span class="mobile-caption md:desktop-caption text-color-primary-500"
        >Nuestros Servicios</span
      >
      <h2
        class="mobile-heading-2 md:desktop-heading-2 text-color-gray-50 text-center"
      >
        Nuestro Dominio Digital a su servicio
      </h2>
    </div>
    <div v-else class="w-full">
      <h1 class="mobile-heading-1 text-color-gray-50 md:desktop-heading-1">
        Nuestros Servicios
      </h1>
    </div>
    <div class="grid grid-cols-1 gap-[32px] md:grid-cols-2 lg:grid-cols-3">
      <div
        class="flex flex-col gap-[16px] items-start w-full p-[24px] bg-color-bg-2 rounded-[20px]"
      >
        <div class="p-[12px] bg-color-primary-500 rounded-[20px]">
          <span
            class="icon-[fa--desktop] text-color-gray-50 w-[40px] h-[40px] flex justify-center items-center"
          ></span>
        </div>
        <h3 class="mobile-heading-4 md:desktop-heading-4 text-color-primary-50">
          Desarrollo web
        </h3>
        <p class="mobile-body md:desktop-body text-color-gray-500">
          Creamos sitios web modernos y funcionales que se adaptan a las
          necesidades de tu negocio. Con un enfoque en diseño y usabilidad,
          llevamos tu presencia online al siguiente nivel.
        </p>
      </div>
      <div
        class="flex flex-col gap-[16px] items-start w-full p-[24px] bg-color-bg-2 rounded-[20px]"
      >
        <div class="p-[12px] bg-color-primary-500 rounded-[20px]">
          <span
            class="icon-[bi--phone] text-color-gray-50 w-[40px] h-[40px] flex justify-center items-center"
          ></span>
        </div>
        <h3 class="mobile-heading-4 md:desktop-heading-4 text-color-primary-50">
          Desarrollo de apps móviles
        </h3>
        <p class="mobile-body md:desktop-body text-color-gray-500">
          Desde aplicaciones nativas hasta soluciones híbridas, desarrollamos
          aplicaciones móviles que ofrecen una experiencia de usuario
          excepcional, optimizadas para todos los dispositivos.
        </p>
      </div>
      <div
        class="flex flex-col gap-[16px] items-start w-full p-[24px] bg-color-bg-2 rounded-[20px]"
      >
        <div class="p-[12px] bg-color-primary-500 rounded-[20px]">
          <span
            class="icon-[solar--dialog-2-line-duotone] text-color-gray-50 w-[40px] h-[40px] flex justify-center items-center"
          ></span>
        </div>
        <h3 class="mobile-heading-4 md:desktop-heading-4 text-color-primary-50">
          Consultoría Tecnológica
        </h3>
        <p class="mobile-body md:desktop-body text-color-gray-500">
          Realizamos un análisis integral de tus sistemas y te asesoramos con
          soluciones personalizadas para optimizar la eficiencia, seguridad y
          crecimiento de tu infraestructura digital.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
