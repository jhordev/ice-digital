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
        >Nuestro Trabajo</span
      >
      <h2
        class="mobile-heading-2 md:desktop-heading-2 text-color-gray-50 text-center"
      >
        Revelando nuestras crónicas creativas
      </h2>
    </div>
    <div v-else class="w-full">
      <h1 class="mobile-heading-1 text-color-gray-50 md:desktop-heading-1">
        Nuestros Trabajos
      </h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[32px] w-full">
      <div class="flex flex-col gap-[16px]">
        <div class="h-[220px] md:h-[417px]">
          <img
            src="@/assets/img/projectimage.png"
            alt="Imagen de Proyecto"
            class="h-full w-full object-cover rounded-[20px]"
          />
        </div>
        <div
          class="flex gap-[16px] text-color-gray-500 mobile-caption md:desktop-caption"
        >
          <span>Diseño UI</span><span>Desarrollo de aplicaciones</span>
        </div>
        <h3 class="mobile-heading-3 text-color-gray-50 md:desktop-heading-3">
          MuPark - Music Player App
        </h3>
        <router-link
          to="/case-studio"
          class="mobile-body text-color-primary-500 md:desktop-body"
          >Leer Caso de Estudio</router-link
        >
      </div>
      <div class="flex flex-col gap-[16px]">
        <div class="h-[220px] md:h-[417px]">
          <img
            src="@/assets/img/projectimage.png"
            alt="Imagen de Proyecto"
            class="h-full w-full object-cover rounded-[20px]"
          />
        </div>
        <div
          class="flex gap-[16px] text-color-gray-500 mobile-caption md:desktop-caption"
        >
          <span>Diseño UI</span><span>Desarrollo de aplicaciones</span>
        </div>
        <h3 class="mobile-heading-3 text-color-gray-50 md:desktop-heading-3">
          MuPark - Music Player App
        </h3>
        <router-link
          to="/case-studio"
          class="mobile-body text-color-primary-500 md:desktop-body"
          >Leer Caso de Estudio</router-link
        >
      </div>
    </div>
    <router-link
      v-if="isRootRoute"
      to="/projects"
      class="py-[15px] px-[30px] flex items-center justify-center border-[1px] border-color-primary-500 text-color-gray-50 mobile-body md:desktop-body rounded-[50px] w-full md:w-fit"
    >
      Más Proyectos
    </router-link>
  </section>
</template>

<style scoped></style>
