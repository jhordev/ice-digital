<script lang="ts">

import {defineComponent} from "vue";
import UcssHub  from "@/components/PrivacyView/UcssHub.vue";
import CallAction from "@/components/CallAction.vue";
export default defineComponent({
  name: "PrivacyApp",
  components: {
    UcssHub,
    CallAction
  },
});
</script>

<template>
  <div class="relative bg-color-bg-1">
    <main
        class="flex flex-col items-center pt-[56px] gap-[100px] md:gap-[130px] z-10 relative"
    >
      <UcssHub/>
      <CallAction/>
    </main></div>

</template>

<style scoped>

</style>