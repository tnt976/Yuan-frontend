import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory()
const router = createRouter({
    history, // 路由模式
    routes: [
      {
        // 页面逻辑
        path: '/',
        name: 'test',
        component: () => import('./components/HelloWorld.vue')
      },
      {
        path: '/design',
        name: 'design',
        component: () => import('./components/Designal.vue')
      },
      {
        path: '/new',
        name: 'new',
        component: () => import('./components/New.vue')
      }
    ]
  })

  export default router