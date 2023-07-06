import { createRouter, createWebHistory } from "vue-router";

import home from '@/pages/home.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/electronics',
        name: 'electronics',
        component: () => import('@/pages/electronics.vue')
    },
    {
        path: '/jewelery',
        name: 'jewelery',
        component: () => import('@/pages/jewelery.vue')
    },
    {
        path: '/menclothing',
        name: 'menclothing',
        component: () => import('@/pages/menclothing.vue')
    },
    {
        path: '/womenclothing',
        name: 'womenclothing',
        component: () => import('@/pages/womenclothing.vue')
    },
    {
        path: '/details/:id',
        name: 'details',
        props: true,
        component: () => import('@/pages/details.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router