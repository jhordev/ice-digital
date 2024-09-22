<script lang="ts">

import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

const contactos = {
  "telefono": {
      svg: "icon-[ph--phone]",
      title: "Llámanos",
      contact:[
        "+51 921 554 327",
        "+51 959 659 501"
      ]
  },
  "email": {
    svg: "icon-[carbon--email]",
    title: "Envíanos un mensaje",
    contact:[
      "hola@icedigital.com",
      "soporte@icedigital.com"
    ]
  },
  "location": {
    svg: "icon-[akar-icons--location]",
    title: "Nuestra ubicación",
    contact:[
      "Nueva Cajamarca - Rioja -Perú"
    ]
  }
}
export default defineComponent({
  setup() {
    const route = useRoute();
    const isRootRoute = computed(() => route.path === "/");

    return {
      isRootRoute,
      contactos,
    };
  },
});

</script>
<template>
  <section
    class="max-w-[1028px] flex flex-col items-center gap-[32px] px-[20px] md:px-0 container-body"
  >
    <div class="w-full">
      <h1 class="mobile-heading-1 text-color-gray-50 md:desktop-heading-1">Contáctenos</h1>
    </div>
    <div class="grid grid-cols-1 w-full gap-[32px] md:grid-cols-3">
        <div v-for="contacto in contactos" :key="contacto.id" class="bg-color-bg-2 rounded-[20px] p-[24px] flex flex-col gap-[16px]">
            <div class="w-fit p-[12px] bg-color-primary-500 rounded-[20px] flex justify-center items-center"><span :class="[contacto.svg, 'text-[40px]', 'text-color-gray-50']"></span></div>
            <h4 class="text-color-gray-50 mobile-heading-4 md:desktop-heading-4">{{ contacto.title }}</h4>
            <div class="mobile-body text-gray-500 flex flex-col md:desktop-body">
              <span v-for="date in contacto.contact" :key="date">{{date}}</span>
            </div>
        </div>
    </div>
  </section>
</template>
<style scoped></style>
