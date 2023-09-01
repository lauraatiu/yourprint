import { createRouter, createWebHistory } from 'vue-router';
import Info from '@/views/Info.vue';
import Home from '@/views/Home.vue';
import Table from '@/views/Table.vue';
import ComingSoon from '@/views/ComingSoon.vue';

const routes = [
  {
    path: '/info',
    name: 'Info',
    component: Info,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/comingsoon',
    name: 'ComingSoon',
    component: ComingSoon
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;