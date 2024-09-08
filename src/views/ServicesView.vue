<script lang="ts">
import { defineComponent } from "vue";
import ServicesHome from "@/components/HomeView/ServicesHome.vue";
import CallAction from "@/components/CallAction.vue";
import TestimonialsHome from "@/components/HomeView/TestimonialsHome.vue";
import CompanysAbout from "@/components/AboutView/CompanysAbout.vue";

export default defineComponent({
  name: "ProjectsView",
  components: {
    ServicesHome,
    CallAction,
    TestimonialsHome,
    CompanysAbout
  },
});
</script>
<template>
  <div class="relative bg-color-bg-1">
    <main
      class="flex flex-col items-center pt-[56px] gap-[100px] md:gap-[130px] z-10 relative"
    >
      <ServicesHome />
      <TestimonialsHome />
      <CompanysAbout/>
      <CallAction />
    </main>
  </div>
</template>
<style scoped></style>
