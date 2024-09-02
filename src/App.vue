<template>
  <HeaderMain/>
  <router-view />
  <FooterMain/>
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
<style></style>
