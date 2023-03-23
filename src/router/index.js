import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Table from '../pages/Table.vue'
import Login from '../pages/Login.vue'

const routes = [
{ 
    path: '/',
    name: 'login',
    component : Login
},
{
    path: '/home',
    name: 'home',
    component: Home
},
{
    path: '/table',
    name: 'table',
    component: Table
}]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'active'
});

export default router;