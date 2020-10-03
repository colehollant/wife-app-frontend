import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/application',
    name: 'Application',
    component: () => import('../views/Application.vue')
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: () => import('../views/Thanks.vue')
  },
  {
    path: '/debug',
    name: 'Debug',
    component: () => import('../views/Debug.vue')
  },
  {
    path: '/submissions',
    name: 'Submissions',
    component: () => import('../views/Submissions.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
