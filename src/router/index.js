// Composables
import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About/About.vue'
import Table from '../components/Table.vue'
import Form from '../components/Form.vue'
import Assistant from '../views/Assistant/Assistant.vue'


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
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/table',
        name: 'table',
        component: Table
      },
      {
        path: '/form',
        name: 'form',
        component: Form
      },
      {
        path: '/assistant',
        name: 'assistant',
        component: Assistant
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
