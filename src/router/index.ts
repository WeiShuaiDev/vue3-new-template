import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
// 配置路由信息
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('/@/views/login/LoginPage.vue'),
  },
  {
    name: 'store',
    path: '/store',
    component: () => import('/@/views/store/StorePage.vue'),
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('/@/views/main/MainPage.vue'),
    redirect: '/main/dashboard/workplace',
  },
  {
    name: 'request',
    path: '/request',
    component: () => import('/@/views/request/RequestPage.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
