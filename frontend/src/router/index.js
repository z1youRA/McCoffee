import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Heap from '../views/HeapPage.vue'
import Registry from '../views/RegistryPage.vue'
import File from '../views/FilePage.vue'
import Network from '../views/NetworkPage.vue'
import Memory from '../views/MemoryPage.vue'

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
  },
  {
    path: '/network',
    name: 'Network',
    component: Network
  },
  {
    path: '/memory',
    name: 'Memory',
    component: Memory
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
