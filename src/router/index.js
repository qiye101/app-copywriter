import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tool/xiaohongshu', name: 'Xiaohongshu', component: () => import('../views/ToolXiaohongshu.vue') },
  { path: '/tool/douyin', name: 'Douyin', component: () => import('../views/ToolDouyin.vue') },
  { path: '/tool/title', name: 'Title', component: () => import('../views/ToolTitle.vue') },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
