import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ServicesView from '../views/ServicesView.vue';
import ContactView from '../views/ContactView.vue';
import CaseView from '../views/CaseView.vue';
import { logError } from '@/utils/logger';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/caso:proyectoId',
    name: 'caso',
    component: CaseView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ top: 0 });
      }, 300); // Espera 300 ms antes de hacer scroll
    });
  }
});

router.onError((error) => {
  logError(`Error en la navegación: ${error.message}`);
});

export default router;
