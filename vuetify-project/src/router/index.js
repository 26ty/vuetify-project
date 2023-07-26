// Composables
import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Table from '../components/Table.vue'
import Form from '../components/Form.vue'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path:'/about',
        name: 'about',
        component: About
      },
      {
        path:'/table',
        name: 'table',
        component: Table
      },
      {
        path:'/form',
        name: 'form',
        component: Form
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
