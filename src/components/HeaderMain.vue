<template>
  <div class="bg-color-bg-1">
    <header
      class="relative px-[20px] md:px-0 py-[21px] h-[100px] flex items-center justify-between md:gap-[56px] md:justify-start md:w-[95%] md:max-w-[1240px] md:my-0 md:mx-auto"
    >
      <div class="flex gap-[10px] items-center">
        <img src="@/assets/logo-alone.svg" alt="Logo" class="flex-initial" />
      </div>
      <transition name="paint">
        <div
          v-show="isNavVisible || !isMobile"
          class="container-nav w-full h-[100vh] pt-[150px] md:pt-0 p-[20px] md:p-0 md:h-auto bg-color-primary-500 md:bg-transparent absolute top-0 left-0 md:top-auto md:relative flex flex-col gap-[100px] md:flex-row items-center flex-auto md:justify-between z-40"
          :style="{ '--menu-x': menuX + 'px', '--menu-y': menuY + 'px' }"
        >
          <nav>
            <ul
              class="flex flex-col items-center md:flex-row gap-[30px] md:gap-[16px] desktop-heading-3 md:desktop-caption"
            >
              <li>
                <router-link
                  to="/"
                  class="text-color-gray-200 md:text-color-gray-500 hover:text-color-gray-50"
                  active-class="active-link"
                  @click="toggleNav"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about"
                  class="text-color-gray-200 md:text-color-gray-500 hover:text-color-gray-50"
                  active-class="active-link"
                  @click="toggleNav"
                  >Sobre Nosotros</router-link
                >
              </li>
              <li>
                <router-link
                  to="/projects"
                  class="text-color-gray-200 md:text-color-gray-500 hover:text-color-gray-50"
                  active-class="active-link"
                  @click="toggleNav"
                  >Nuestro Trabajo</router-link
                >
              </li>
              <li>
                <router-link
                  to="/services"
                  class="text-color-gray-200 md:text-color-gray-500 hover:text-color-gray-50"
                  active-class="active-link"
                  @click="toggleNav"
                  >Servicio</router-link
                >
              </li>
            </ul>
          </nav>
          <div class="flex flex-col md:flex-row gap-[10px] w-full md:w-auto">
            <button
              @click="toggleNav"
              class="md:hidden lg:flex px-[30px] py-[15px] mobile-heading-4 md:desktop-caption text-color-primary-500 bg-gray-200 md:bg-color-primary-500 md:hover:bg-color-primary-600 rounded-[50px] md:text-color-gray-50"
            >
              <router-link to="/contact">Contáctanos</router-link>
            </button>
            <button
              @click="toggleNav"
              class="px-[30px] py-[15px] mobile-heading-4 md:desktop-caption border-[1px] border-gray-200 md:border-color-primary-500 rounded-[50px] text-color-primary-50 hover:text-color-primary-500 md:hover:text-color-primary-50 hover:bg-gray-200 md:hover:bg-color-primary-600"
            >
              <router-link to="/admin">Iniciar Sesión</router-link>
            </button>
          </div>
        </div>
      </transition>
      <div
        ref="menuButton"
        class="container-menu bg-color-primary-500 flex md:hidden w-fit p-[17px] rounded-full z-50"
        @click="toggleNav"
      >
        <transition name="icon-change" mode="out-in">
          <span
            key="menu-icon"
            v-if="!isNavVisible"
            class="icon-[material-symbols--menu] icon-transition w-[24px] h-[24px] text-color-gray-50"
          ></span>
          <span
            key="close-icon"
            v-else
            class="icon-[ph--x] icon-transition w-[24px] h-[24px] text-color-gray-50"
          ></span>
        </transition>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";

export default defineComponent({
  name: "HeaderMain",
  setup() {
    const isNavVisible = ref(false); // Asegurarse de que el menú esté oculto inicialmente
    const isMobile = ref(false);
    const menuButton = ref<HTMLElement | null>(null);
    const menuX = ref(0);
    const menuY = ref(0);

    const toggleNav = () => {
      if (isMobile.value) {
        isNavVisible.value = !isNavVisible.value;
      }
    };

    const checkIfMobile = () => {
      isMobile.value = window.innerWidth < 768; 
    };

    const updateMenuPosition = () => {
      if (menuButton.value) {
        const rect = menuButton.value.getBoundingClientRect();
        menuX.value = rect.left + rect.width / 2;
        menuY.value = rect.top + rect.height / 2;
      }
    };

    onMounted(() => {
      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
      menuButton.value = document.querySelector(".container-menu");
      updateMenuPosition();
      window.addEventListener("resize", updateMenuPosition);
    });

    // Observa cambios en isNavVisible y ajusta el overflow del body
    watch(isNavVisible, (newValue) => {
      document.body.style.overflowY = newValue ? "hidden" : "auto";
    });

    return {
      isNavVisible,
      isMobile,
      toggleNav,
      menuX,
      menuY,
      menuButton,
    };
  },
});
</script>

<style scoped>
.active-link {
  color: #f6f6f6;
}
.paint-enter-active,
.paint-leave-active {
  transition: clip-path 0.7s ease, opacity 0.7s ease;
}

.paint-enter-from,
.paint-leave-to {
  clip-path: circle(0% at var(--menu-x) var(--menu-y));
  opacity: 0;
}

.paint-enter-to,
.paint-leave-from {
  clip-path: circle(150% at var(--menu-x) var(--menu-y));
  opacity: 1;
}

.container-menu {
  transition: all 0.3s ease;
  z-index: 50;
}

.container-menu:hover {
  transform: scale(1.1);
}

.icon-change-enter-active,
.icon-change-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.icon-change-enter-from,
.icon-change-leave-to {
  transform: rotate(-180deg);
  opacity: 0;
}

.icon-change-enter-to,
.icon-change-leave-from {
  transform: rotate(0deg);
  opacity: 1;
}
</style>
