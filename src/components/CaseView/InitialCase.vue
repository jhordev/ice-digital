<template>
  <section class="max-w-[1028px] px-[20px] lg:px-0 container-body">
    <div class="flex items-start flex-col md:flex-row md:items-center gap-[20px] md:gap-[35px] ">
      <router-link to="/projects" class="bg-color-primary-500 flex justify-center h-full rounded-full p-[10px]">
        <span class="icon-[material-symbols--arrow-left-alt-rounded] text-white text-[25px] md:text-[50px]"></span>
      </router-link>
      <h1 class="mobile-heading-1 text-color-gray-50 md:desktop-heading-1">{{ titulo }}</h1>
    </div>
    <div class="w-full h-[200px] md:h-[441px] md:px-[150px] bg-color-primary-100 mt-[25px] rounded-[20px] pt-[20px]">
      <img :src="require(`@/assets/img/${imagenSrc}.png`)" class="w-full h-full object-cover object-top" />
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    titulo: {
      type: String,
      required: true
    },
    imagenSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
