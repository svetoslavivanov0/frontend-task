import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Feedback from './pages/Feedback.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/feedback', component: Feedback }
    ]
});

export default router;