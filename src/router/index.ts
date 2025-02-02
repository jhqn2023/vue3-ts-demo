import { createRouter, createWebHistory } from 'vue-router';


export const routes = [
  {
    path: '/',
    name: 'svgicon',
    title: 'SVGicon',
    component: () => import('@/views/svgicon/index.vue')
  },
  {
    path: '/directive',
    name: 'directive',
    title: '自定义指令',
    component: () => import('@/views/customDirective/index.vue')
  },
  {
    path: '/mock',
    name: 'mock',
    title: 'mock及.env',
    component: () => import('@/views/mock/index.vue')
  },
  {
    path: '/cursive',
    name: 'cursive',
    title: '递归组件',
    component: () => import('@/views/cursiveComponent/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;