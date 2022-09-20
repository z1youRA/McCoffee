import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Heap from '../views/Heap.vue'
import Registry from '../views/Registry.vue'
import File from '../views/File.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/heap',
    name: 'Heap',
    component: Heap
  },
  {
    path: '/registry',
    name: 'Registry',
    component: Registry
  },
  {
    path: '/file',
    name: 'File',
    component: File
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
