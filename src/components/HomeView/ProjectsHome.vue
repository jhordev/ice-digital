<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

const proyectos = {
  "proyecto-1": {
    id: "proyecto-1",
    nombre: "MotoCuy - Aplicativo de Movilidad para Mototaxis Formales",
    servicios: [
      "Diseño UI/UX",
      "Desarrollo de App",
      "Desarrollo Web"
    ],
    img: "cover-motocuy.jpg",
    info: {
      problema: "Motocuy enfrenta el desafío de ofrecer una aplicación móvil en la que varias funcionalidades no están operando de manera adecuada, lo que afecta la experiencia del usuario. Además, la interfaz de usuario actual no es intuitiva ni atractiva, lo que genera dificultades para que los usuarios interactúen con la aplicación de manera eficiente. Esta situación podría estar afectando la percepción de los usuarios, la retención de clientes y la competitividad en el mercado, especialmente en un contexto donde las aplicaciones de movilidad requieren ser ágiles y fáciles de usar.",
      objetivo: "Mejorar la funcionalidad y usabilidad de la aplicación Motocuy, asegurando que todas las características operen correctamente y optimizando la interfaz de usuario para que sea más intuitiva, atractiva y fácil de navegar. Esto permitirá ofrecer una mejor experiencia a los usuarios, aumentando la satisfacción, la retención de clientes y la competitividad en el mercado.",
      solucion: "La solución más viable es desarrollar una segunda versión de la aplicación Motocuy con un diseño completamente renovado, enfocado en mejorar la experiencia del usuario mediante una interfaz más intuitiva y moderna. Además, se migrará a tecnologías más recientes y multiplataforma, como Flutter, con el objetivo de lograr una mayor escalabilidad. Aunque no se desarrollará inicialmente para iOS, el uso de Flutter permitirá, en el futuro, expandir la aplicación a otras plataformas con menos esfuerzo, siendo un ejemplo de cómo esta tecnología facilitará la escalabilidad. Este enfoque garantizará que la aplicación sea más flexible, eficiente en mantenimiento y con un alto potencial de crecimiento. Se realizarán pruebas de usabilidad y rendimiento para asegurar que esta nueva versión cumpla con los estándares de calidad y las expectativas de los usuarios.",
      metodologia: "Para el desarrollo de la nueva versión de la aplicación Motocuy, se utilizará la metodología Kanban, la cual se enfoca en gestionar el flujo de trabajo de manera visual y eficiente. Esta metodología permitirá priorizar tareas de acuerdo con su importancia y progreso, proporcionando una visión clara del estado de cada actividad. A través de tableros visuales, el equipo podrá identificar cuellos de botella y optimizar la productividad. Kanban es ideal para este proyecto, ya que permite una implementación ágil y flexible de mejoras, facilitando la adaptación continua a los cambios y necesidades que surjan durante el desarrollo.",
      estado: 20
    }
  },
  "proyecto-2": {
    id: "proyecto-2",
    nombre: "Milk App - Gestión Integral para Empresas Lecheras",
    servicios: [
      "Diseño UI/UX",
      "Desarrollo de App",
    ],
    img: "cover-lechero.jpg",
    info: {
      problema: "Milk App aborda el problema de la falta de una plataforma centralizada para la gestión de procesos en empresas lecheras, lo que resulta en ineficiencias y una difícil supervisión de las operaciones. La falta de datos en tiempo real puede llevar a decisiones ineficaces y a una pérdida de oportunidades de mejora.",
      objetivo: "Crear una solución integral que permita a las empresas lecheras gestionar sus operaciones de manera eficiente, mejorando la toma de decisiones a través de datos en tiempo real y optimizando la cadena de suministro para aumentar la rentabilidad.",
      solucion: "Se desarrollará Milk App, una aplicación que ofrecerá funcionalidades clave como gestión de inventarios, seguimiento de producción y análisis de datos. La aplicación estará diseñada con un enfoque en la facilidad de uso, garantizando que los usuarios puedan acceder a la información necesaria rápidamente. Utilizando tecnologías modernas, se asegurará que la aplicación sea escalable y capaz de adaptarse a las necesidades crecientes de las empresas lecheras.",
      metodologia: "Se adoptará la metodología Agile, permitiendo iteraciones rápidas y la incorporación de feedback continuo. Esto facilitará ajustes inmediatos en el desarrollo, asegurando que la aplicación evolucione de acuerdo con las necesidades de los usuarios y el mercado.",
      estado: 15
    }
  },
  "proyecto-3": {
    id: "proyecto-3",
    nombre: "Educanet - Sistema Integral de Gestión Estudiantil",
    servicios: [
      "Diseño UI/UX",
      "Desarrollo de App",
      "Desarrollo Web"
    ],
    img: "cover-educanet.jpg",
    info: {
      problema: "Educanet enfrenta el desafío de integrar diversas funcionalidades educativas en una única plataforma, lo que dificulta la experiencia tanto para estudiantes como para educadores. La falta de cohesión entre herramientas puede llevar a la confusión y a un uso ineficaz de los recursos.",
      objetivo: "Desarrollar un sistema integral que centralice la gestión estudiantil, mejorando la comunicación, el seguimiento del rendimiento y la accesibilidad a recursos educativos, facilitando una experiencia de aprendizaje más fluida.",
      solucion: "Educanet se enfocará en crear una plataforma robusta que combine gestión académica, seguimiento del progreso y herramientas de comunicación. Al emplear un diseño intuitivo y funcionalidades integradas, se buscará fomentar un entorno de aprendizaje más eficiente y atractivo para todos los usuarios.",
      metodologia: "Se implementará la metodología Scrum, que favorecerá la colaboración en equipo y el enfoque en la entrega de valor en cortos ciclos de desarrollo. Esto permitirá que el equipo adapte las funcionalidades según el feedback de los usuarios, mejorando continuamente la aplicación.",
      estado: 10
    }
  }
};


export default defineComponent({
  setup() {
    const route = useRoute();
    const isRootRoute = computed(() => route.path === "/");

    return {
      isRootRoute,
      proyectos,
    };
  },
});
</script>

<template>
  <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      class="max-w-[1028px] flex flex-col items-center gap-[32px] px-[20px] md:px-0 container-body"
  >
    <div v-if="isRootRoute" class="flex flex-col items-center gap-[16px]">
      <span class="mobile-caption md:desktop-caption text-color-primary-500">Nuestro Trabajo</span>
      <h2 class="mobile-heading-2 md:desktop-heading-2 text-color-gray-50 text-center">
        Revelando nuestras crónicas creativas
      </h2>
    </div>
    <div v-else class="w-full">
      <h1 class="mobile-heading-1 text-color-gray-50 md:desktop-heading-1">
        Nuestros Trabajos
      </h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[32px] w-full">
      <div class="flex flex-col gap-[16px]" v-for="proyecto in proyectos" :key="proyecto.id" data-aos="zoom-in-up">
        <div class="h-[220px] md:h-[417px] overflow-hidden rounded-[20px]">
          <img
              :src="require(`@/assets/img/${proyecto.img}`)"
              alt="Imagen de Proyecto"
              class="h-full w-full object-cover object-left rounded-[20px] transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div class="gap-[16px] text-color-gray-500 mobile-caption md:desktop-caption hidden md:flex">
          <a v-for="servicio in proyecto.servicios" :key="servicio" href="@/views/ServicesView.vue" class="hover:bg-gray-700 rounded-2xl py-1 px-2 hover:text-white transition-colors duration-300">{{servicio}}</a>
        </div>
        <h3 class="mobile-heading-3 text-color-gray-50 md:desktop-heading-3">
          {{ proyecto.nombre }}
        </h3>
        <router-link
            :to="{ name: 'caso', params: { proyectoId: proyecto.id } }"
            class="mobile-body text-color-primary-500 md:desktop-body"
        >
          Leer Caso de Estudio
        </router-link>
      </div>
    </div>
    <router-link
        v-if="isRootRoute"
        to="/projects"
        class="hover-bg-expand py-[15px] px-[30px] flex items-center justify-center border-[1px] border-color-primary-500 text-color-gray-50 mobile-body md:desktop-body rounded-[50px] w-full md:w-fit"
    >
      Más Proyectos
    </router-link>
  </section>
</template>

<style scoped>

.hover-bg-expand {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.hover-bg-expand::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #007BFF;
  z-index: -1;
  transition: all 0.5s ease;
}

.hover-bg-expand:hover::before {
  height: 100%;
}

</style>
