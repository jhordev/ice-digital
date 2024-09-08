<script lang="ts">
import { defineComponent } from "vue";
import ProjectsHome from "@/components/HomeView/ProjectsHome.vue";
import CallAction from "@/components/CallAction.vue";
export default defineComponent({
  name: "ProjectsView",
  components: {
    ProjectsHome,
    CallAction,
  },
});
</script>
<template>
  <div class="relative bg-color-bg-1">
    <main
      class="flex flex-col items-center pt-[56px] gap-[100px] md:gap-[130px] z-10 relative"
    >
      <ProjectsHome />
      <CallAction />
    </main>
  </div>
</template>
<style scoped></style>
