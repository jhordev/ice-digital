<script lang="ts">
import { defineComponent } from "vue";
import InfoAbout from "@/components/AboutView/InfoAbout.vue";
import CompanyAbout from "@/components/AboutView/CompanysAbout.vue";
import CounterAbout from "@/components/AboutView/CounterAbout.vue";
import TeamAbout from "@/components/AboutView/TeamAbout.vue";
import CallAction from "@/components/CallAction.vue";
export default defineComponent({
  name: "AboutView",
  components: {
    InfoAbout,
    CompanyAbout,
    CounterAbout,
    TeamAbout,
    CallAction,
  },
});
</script>
<template>
  <div class="relative bg-color-bg-1">
    <main
      class="flex flex-col items-center pt-[56px] gap-[100px] md:gap-[130px] z-10 relative"
    >
      <InfoAbout />
      <CompanyAbout />
      <CounterAbout />
      <TeamAbout />
      <CallAction />
    </main>
  </div>
</template>
<style scoped></style>
