import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 配置路由信息
const routes: RouteRecordRaw[] = []

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
