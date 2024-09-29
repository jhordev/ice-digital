import './assets/main.css'
import {createApp, defineComponent, onMounted} from 'vue'
import App from './App.vue'
import router from './router'

import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init({
    duration: 1000,
    once: false,
});
createApp(App).use(router).mount('#app')
