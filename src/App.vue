<template>
  <transition name="fade" mode="out-in">
    <HeaderMain key="$route.fullPath" />
  </transition>
  <transition name="fade" mode="out-in">
    <router-view :key="$route.fullPath" />
  </transition>
  <transition name="fade" mode="out-in">
    <FooterMain key="$route.fullPath" />
  </transition>
</template>

<script lang="ts">
import HeaderMain from "@/components/HeaderMain.vue";
import FooterMain from "@/components/FooterMain.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderMain,
    FooterMain,
  },
});
</script>

<style>
body {
  background-color: #1a1a1a; /* Cambia al color deseado */
  overflow-x: hidden; /* Evita el scroll horizontal */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease; /* Suaviza la transición de opacidad */
}

.fade-enter,
.fade-leave-to /* .fade-leave-active en <2.1.8 */ {
  opacity: 0; /* Comienza como invisible y se desvanece al salir */
}

/* Asegúrate de que el contenedor principal tenga una altura adecuada */
#app {
  min-height: 100vh; /* Asegura que ocupe toda la altura de la pantalla */
}
</style>
