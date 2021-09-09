import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Shop from '../views/Shop.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallerie',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/boutique',
    name: 'Shop',
    component: Shop
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
