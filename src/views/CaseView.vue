<script lang="ts">
import { defineComponent } from "vue";
import InitialCase from "@/components/CaseView/InitialCase.vue";
import DescriptionCase from "@/components/CaseView/DescriptionCase.vue";
import CallAction from "@/components/CallAction.vue";
import StepItem from "@/components/CaseView/StepItem.vue";

interface ProjectInfo {
  problema: string;
  objetivo: string;
  solucion: string;
  metodologia: string;
  imgtitle: string;
  imgmedium: string;
  estado: number;
}

interface Project {
  id: string;
  nombre: string;
  servicios: string[];
  img: string;
  info: ProjectInfo;
}

const proyectos: Record<string, Project> = {
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
      problema: "Motocuy enfrenta el desafío de tener funciones inoperantes y una interfaz no intuitiva. Esto afecta negativamente la experiencia del usuario, la percepción de la aplicación y la retención de clientes.",
      objetivo: "Mejorar la usabilidad y funcionalidad de la aplicación, asegurando que todas las características operen correctamente y optimizando la interfaz para ofrecer una mejor experiencia.",
      solucion: "Se desarrollará una nueva versión de la aplicación con un diseño moderno y tecnologías como Flutter, lo que permitirá mayor escalabilidad y facilitará su expansión futura a otras plataformas.",
      metodologia: "Para el desarrollo, se usará la metodología Kanban, que permitirá gestionar el flujo de trabajo de manera visual y adaptarse a cambios rápidamente durante el proceso.",
      imgtitle: "casemotocuy",
      imgmedium: "casemotocuy-2",
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
      problema: "Milk App aborda la falta de una plataforma centralizada para la gestión en empresas lecheras, generando ineficiencias y dificultando la supervisión de las operaciones y la toma de decisiones.",
      objetivo: "Crear una solución integral que permita a las empresas gestionar eficientemente sus operaciones, mejorando la toma de decisiones a través de datos en tiempo real.",
      solucion: "Se desarrollará Milk App con funcionalidades clave como gestión de inventarios y seguimiento de producción, asegurando un diseño fácil de usar y escalable para el futuro.",
      metodologia: "Se adoptará la metodología Agile, que permitirá iteraciones rápidas y la incorporación de feedback continuo, facilitando ajustes en el desarrollo según las necesidades del mercado.",
      imgtitle: "caselechero",
      imgmedium: "caselechero-2",
      estado: 100
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
      problema: "Educanet enfrenta el reto de integrar diversas funcionalidades educativas en una única plataforma, lo que complica la experiencia de estudiantes y educadores.",
      objetivo: "Desarrollar un sistema integral que centralice la gestión estudiantil, mejorando la comunicación, el seguimiento del rendimiento y la accesibilidad a recursos educativos.",
      solucion: "Crearemos una plataforma robusta que combine gestión académica y herramientas de comunicación, buscando fomentar un entorno de aprendizaje eficiente y atractivo.",
      metodologia: "Implementaremos la metodología Scrum, favoreciendo la colaboración en equipo y el enfoque en la entrega de valor en cortos ciclos de desarrollo, adaptándonos a feedback.",
      imgtitle: "caseeducanet",
      imgmedium: "caseeducanet-2",
      estado: 100
    }
  }
};

export default defineComponent({
  name: "CaseView",
  components: {
    InitialCase,
    DescriptionCase,
    CallAction,
    StepItem,
  },
  data() {
    return {
      steps: [
        { number: 1, status: "Requerimientos" },
        { number: 2, status: "Diseño" },
        { number: 3, status: "Implementación" },
        { number: 4, status: "Pruebas" },
        { number: 5, status: "Despliegue" },
        { number: 6, status: "Mantenimiento" },
      ],
      selectedProject: null as Project | null,
    };
  },
  created() {
    const projectId = this.getProjectIdFromUrl();
    if (typeof projectId === "string" && proyectos[projectId]) {
      this.selectedProject = proyectos[projectId];
    } else {
      console.error("Proyecto no encontrado o ID inválido");
    }

    console.log(projectId);
  },
  methods: {
    getProjectIdFromUrl(): string {
      return this.$route.params.proyectoId as string;
    },
  },
});
</script>

<template>
  <div class="relative bg-color-bg-1">
    <main class="flex flex-col items-center pt-[56px] gap-[50px] md:gap-[80px] lg:gap-[100px] z-10 relative">
      <InitialCase :titulo="selectedProject?.nombre" :imagenSrc="selectedProject?.info.imgtitle" />
      <DescriptionCase
          :problema="selectedProject?.info.problema"
          :objetivo="selectedProject?.info.objetivo"
          :solucion="selectedProject?.info.solucion"
          :img="selectedProject?.info.imgmedium"
      />
      <section class="hidden w-full px-[20px] lg:px-0 container-body lg:flex items-center justify-center h-auto">
        <header class="flex flex-col text-xl font-bold tracking-wide text-center text-white whitespace-nowrap w-full">
          <div class="flex relative flex-col w-full min-h-[95px] max-md:max-w-full">
            <div class="w-full h-[20px] bg-color-bg-2">
              <div :style="{ width: selectedProject ? `${selectedProject.info.estado}%` : '0%' }" class="h-full bg-color-primary-500"></div>
            </div>
            <nav class="flex relative flex-col w-full max-md:max-w-full mt-[-40px]">
              <ul class="flex flex-wrap gap-6 md:gap-9 justify-between items-center w-full min-h-[95px] max-md:max-w-full">
                <StepItem v-for="step in steps" :key="step.number" :number="step.number" :status="step.status" />
              </ul>
            </nav>
          </div>
        </header>
      </section>
      <CallAction />
    </main>
  </div>
</template>

<style scoped>
.relative:hover .opacity-0 {
  opacity: 1;
}
</style>
