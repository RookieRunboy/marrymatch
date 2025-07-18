import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      icon: 'House'
    }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: {
      title: '历史记录',
      icon: 'Clock'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      title: '设置',
      icon: 'Setting'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router