<script setup lang="ts">
const servicios = [ "Diseño Web",
  "Desarrollo Web",
  "Desarrollo de Apps", "Consultoría Tecnológica"];
</script>
<template>
  <section
      class="max-w-[1028px] flex flex-col items-center gap-[32px] px-[20px] md:px-0 container-body"
  >
    <div class="w-full">
      <h2 class="mobile-heading-2 text-color-gray-50 md:desktop-heading-2">Charlemos</h2>
    </div>
    <form class="w-full flex flex-col gap-[32px]">
      <div class="grid grid-cols-1 gap-[32px] md:grid-cols-3 w-full">
          <div class="flex flex-col gap-[4px] w-full">
            <label for="name" class="desktop-body text-white">Nombres Completos</label>
            <input type="text" id="name" name="name"  placeholder="Karol Peres" class="text-white outline-0 p-[15px] rounded-[40px] border-[1px] border-color-gray-800 bg-transparent mobile-body md:desktop-body"/>
          </div>
        <div class="flex flex-col gap-[4px] w-full">
          <label for="email" class="desktop-body text-white">Dirección Email</label>
          <input type="email" id="email" name="email"  placeholder="karolperes@gmail.com" class="text-white outline-0 p-[15px] rounded-[40px] border-[1px] border-color-gray-800 bg-transparent mobile-body md:desktop-body"/>
        </div>
        <div class="flex flex-col gap-[4px] w-full">
          <label for="site" class="desktop-body text-white">Tu Sitio Web</label>
          <input type="text" id="site" name="site"  placeholder="karolperes.com" class="text-white outline-0 p-[15px] rounded-[40px] border-[1px] border-color-gray-800 bg-transparent mobile-body md:desktop-body"/>
        </div>
      </div>
      <div class="flex flex-col gap-[16px] w-full">
        <label for="service" class="desktop-body text-white">Elige Tu servicio</label>
        <div class="flex flex-col gap-[16px] md:flex-row w-full">
          <span v-for="servicio in servicios" :key="servicio" class="py-[10px] px-[20px] border-[1px] border-color-gray-800 rounded-[50px] w-fit mobile-body text-color-gray-800 cursor-pointer hover:bg-color-gray-800 hover:text-color-gray-50 transition-colors duration-300 md:desktop-body ">{{servicio}}</span>
        </div>
      </div>
      <div class="flex flex-col gap-[4px] w-full">
        <label for="mesage" class="desktop-body text-white">Tu mensaje</label>
        <textarea class="min-h-[200px] w-full p-[15px] border-[1px] border-color-gray-800 text-color-gray-50 mobile-body bg-transparent rounded-[20px]" placeholder="Déjanos tu mensaje"></textarea>
      </div>
     <div class="w-full flex"> <button class="w-full md:w-fit py-[15px] px-[30px] text-color-gray-50 mobile-body md:desktop-body bg-color-primary-500 rounded-[50px]">Envie Solicitud</button></div>
    </form>
  </section>

</template>
<style scoped></style>