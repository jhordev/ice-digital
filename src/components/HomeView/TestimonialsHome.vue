<script lang="ts">
import { defineComponent } from "vue";

const testimonials = {
  "testimonial-1": {
    id: "testimonial-1",
    avatar: "avatar-motocuy.jpg",
    name: "Carlos Suñiga",
    cargo: "CEO de Latam Digital",
    testimonial: "El proyecto ha sobrepasado todas mis expectativas. En esta segunda fase de diseño, han logrado interpretar cada uno de mis requerimientos con una precisión impecable. Estoy sumamente satisfecho con el progreso y emocionado por cómo está tomando forma mi aplicación."
  }
};

export default defineComponent({
  setup() {
    return {
      testimonials,
    };
  },
});
</script>

<template>
  <section
      class="max-w-[1028px] flex flex-col items-center gap-[32px] px-[20px] md:px-0 container-body"
  >
    <div class="flex flex-col items-center gap-[16px]" data-aos="zoom-in-up">
      <span class="mobile-caption md:desktop-caption text-color-primary-500"
      >Testimoniales</span
      >
      <h2
          class="mobile-heading-2 md:desktop-heading-2 text-color-gray-50 text-center"
      >
        Lo que dicen nuestros clientes
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
      <div
          v-for="testimonial in testimonials" :key="testimonial.id"
          data-aos="zoom-in-up"
          class="flex flex-col gap-[16px] p-[24px] rounded-[20px] bg-color-bg-2"
      >
        <div class="flex gap-[16px] items-center">
          <div class="w-[64px] h-[64px]">
            <img
                :src="require(`@/assets/img/${testimonial.avatar}`)"
                alt="Avatar"
                class="h-full w-full object-cover object-top rounded-[10px]"
            />
          </div>
          <div class="flex flex-col gap-[4px]">
            <h4 class="text-color-gray-50 mobile-heading-4 md:desktop-heading-4">{{testimonial.name}}</h4>
            <span class="text-color-gray-500 mobile-caption md:desktop-caption">
              {{testimonial.cargo}}
            </span>
          </div>
        </div>
        <p class="text-color-gray-500 mobile-body md:desktop-body">
          {{testimonial.testimonial}}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
