import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/layout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('@/views/category/category.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/cart/cart.vue')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine/mine.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
