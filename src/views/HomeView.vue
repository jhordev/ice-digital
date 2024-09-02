<script lang="ts">
import { defineComponent } from "vue";
import HeroHome from "../components/HomeView/HeroHome.vue";
import ServicesHome from "@/components/HomeView/ServicesHome.vue";
import AboutHome from "@/components/HomeView/AboutHome.vue";
import ProjectHome from "@/components/HomeView/ProjectsHome.vue";
import TestimonialsHome from "@/components/HomeView/TestimonialsHome.vue";
import CallAction from "@/components/CallAction.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeroHome,
    ServicesHome,
    AboutHome,
    ProjectHome,
    TestimonialsHome,
    CallAction,
  },
});
</script>

<template>
  <!-- Contenedor principal con posición relativa para crear un contexto de apilamiento -->
  <div class="relative bg-color-bg-1">
    <!-- Ajustar z-index con Tailwind CSS directamente en el HTML -->
    <div
      class="container-bluers absolute hidden md:block right-[-150px] top-[400px] w-[310px] h-[310px] bg-color-purple blur-[294px] rounded-full z-0"
    ></div>

    <div
      class="container-bluers absolute hidden md:block left-[-150px] top-[80px] w-[310px] h-[310px] bg-color-bluess blur-[294px] rounded-full z-0"
    ></div>
    <div
      class="container-bluers absolute hidden md:block left-[-150px] top-[1700px] w-[310px] h-[310px] bg-color-bluess blur-[294px] rounded-full z-0"
    ></div>
    <div
      class="container-bluers absolute hidden md:block left-[-150px] top-[3350px] w-[310px] h-[310px] bg-color-bluess blur-[294px] rounded-full z-0"
    ></div>
    <div
      class="container-bluers absolute hidden md:block right-[-150px] top-[3300px] w-[310px] h-[310px] bg-color-purple blur-[294px] rounded-full z-0"
    ></div>

    <!-- Aquí, el z-index mayor se asegura de que main esté por encima de los círculos -->
    <main
      class="flex flex-col items-center pt-[56px] gap-[100px] md:gap-[130px] z-10 relative"
    >
      <HeroHome />
      <ServicesHome />
      <AboutHome />
      <ProjectHome />
      <TestimonialsHome />
      <CallAction />
    </main>
  </div>
</template>

<style scoped>
.container-bluers {
  z-index: 0; /* Este valor es bajo para asegurar que estos elementos estén detrás de otros */
}
main {
  z-index: 10; /* Aumentar el z-index para asegurarse de que main esté por encima */
}
</style>
