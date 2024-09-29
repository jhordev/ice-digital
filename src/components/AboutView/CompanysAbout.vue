<template>
  <section
    class="max-w-[1028px] flex flex-wrap justify-between items-center gap-[20px]  place-items-center px-[20px] lg:px-0 container-body"
  >
    <div
      class="space-y-3 md:space-y-0 md:space-x-3"
      data-aos="zoom-in-up" data-aos-delay="50" data-aos-offset="0"
      v-for="(company, index) in companies"
      :key="index"
    >
      <h2
        class="cursor-default mobile-heading-3 md:desktop-heading-3 img-filter text-color-gray-700 hover:text-color-gray-50"
      >
        {{ company }}
      </h2>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      companies: [
        "Latam Digital",
        "Milk App",
        "Educanet",
          "Moto Cuy"
      ],
    };
  },
};
</script>

<style scoped>
.img-filter {
  filter: grayscale(100%) sepia(100%) hue-rotate(0deg) brightness(50%)
    saturate(0%) contrast(100%);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.img-filter:hover {
  filter: none;
  transform: scale(1.1);
}
</style>
