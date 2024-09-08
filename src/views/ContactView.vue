<script lang="ts">
import { defineComponent } from 'vue';
import InfoContact from "@/components/Contact/InfoContact.vue";
export default defineComponent({
  name: "ContactView",
  components: {
    InfoContact
  },
});
</script>
<template>
  <div class="relative bg-color-bg-1">

    <main class="flex flex-col items-center pt-[56px] gap-[100px] md:gap-[130px] z-10 relative">
        <InfoContact/>
    </main>
  </div>
</template>
<style scoped></style>