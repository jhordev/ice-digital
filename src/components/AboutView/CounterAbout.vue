<script lang="ts">
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const experience = ref(0);
    const happyClients = ref(0);
    const successfulProjects = ref(0);
    const positiveReviews = ref(0);

    const startCounting = (target: number, refValue: any) => {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.ceil(target / 50);
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        refValue.value = count;
      }, 50);
    };

    const observeSection = () => {
      const section = document.querySelector('.container-body');
      if (section) {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            startCounting(3, experience);
            startCounting(30, happyClients);
            startCounting(32, successfulProjects);
            startCounting(5, positiveReviews);
            observer.disconnect(); // Desconectamos para evitar que el conteo se inicie nuevamente
          }
        }, { threshold: 0.5 }); // Cambiamos el umbral para asegurarnos de que al menos el 50% del contenedor esté visible
        observer.observe(section);
      }
    };

    onMounted(() => {
      observeSection();
    });

    return {
      experience,
      happyClients,
      successfulProjects,
      positiveReviews
    };
  }
};
</script>

<template>
  <section class="bg-color-bg-2 w-full" >
    <div
        class="max-w-[1028px] flex flex-col items-center md:flex-row md:justify-between px-[20px] lg:px-0 gap-[28px] py-[64px] container-body"
    >
      <div class="flex flex-col gap-[4px] items-center md:items-start" data-aos="zoom-in-up" data-aos-delay="50" data-aos-offset="0">
        <span class="mobile-heading-1 text-white md:desktop-heading-1 text-left">+{{ experience }}</span>
        <p class="mobile-body text-color-gray-500 md:desktop-body text-center">Años de experiencia</p>
      </div>
      <div class="flex flex-col gap-[4px] items-center md:items-start" data-aos="zoom-in-up" data-aos-delay="150" data-aos-offset="0">
        <span class="mobile-heading-1 text-white md:desktop-heading-1 text-left">+{{ happyClients }}</span>
        <p class="mobile-body text-color-gray-500 md:desktop-body text-center">Clientes Felices</p>
      </div>
      <div class="flex flex-col gap-[4px] items-center md:items-start" data-aos="zoom-in-up" data-aos-delay="250" data-aos-offset="0">
        <span class="mobile-heading-1 text-white md:desktop-heading-1 text-left">+{{ successfulProjects }}</span>
        <p class="mobile-body text-color-gray-500 md:desktop-body text-center">Proyectos Exitosos</p>
      </div>
      <div class="flex flex-col gap-[4px] items-center md:items-start" data-aos="zoom-in-up" data-aos-delay="350" data-aos-offset="0">
        <span class="mobile-heading-1 text-white md:desktop-heading-1 text-left">+{{ positiveReviews }}</span>
        <p class="mobile-body text-color-gray-500 md:desktop-body text-center">Reseñas Positivas</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
