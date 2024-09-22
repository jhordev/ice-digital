<script lang="ts">
import { defineComponent } from 'vue';
import InfoContact from "@/components/Contact/InfoContact.vue";
import FormContact from "@/components/Contact/FormContact.vue";
import CallAction from "@/components/CallAction.vue";
export default defineComponent({
  name: "ContactView",
  components: {
    InfoContact,
    FormContact,
    CallAction
  },
});
</script>
<template>
  <div class="relative bg-color-bg-1">

    <main class="flex flex-col items-center pt-[56px] gap-[100px] md:gap-[130px] z-10 relative">
        <InfoContact/>
        <FormContact/>
      <CallAction/>
    </main>
  </div>
</template>
<style scoped></style>