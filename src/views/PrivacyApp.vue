<script lang="ts">
import { defineComponent } from "vue";
import UcssHub from "@/components/PrivacyView/UcssHub.vue";
import NexUcss from "@/components/PrivacyView/NexUcss.vue";

export default defineComponent({
  name: "PrivacyApp",
  components: {
    NexUcss,
    UcssHub,
  },
  data() {
    return {
      currentRoute: window.location.pathname as string, // Declara el tipo explícito
    };
  },
  computed: {
    isUcssHubRoute(): boolean {
      return this.currentRoute === "/privacy/ucsshub";
    },
    isNexUcssRoute(): boolean {
      return this.currentRoute === "/privacy/nexucss";
    },
  },
});
</script>

<template>
  <div class="relative bg-color-bg-1">
    <main
        class="flex flex-col items-center pt-[56px] gap-[100px] md:gap-[130px] z-10 relative"
    >
      <!-- Renderiza el componente según la ruta -->
      <NexUcss v-if="isNexUcssRoute" />
      <UcssHub v-else-if="isUcssHubRoute" />
    </main>
  </div>
</template>

<style scoped>
</style>
