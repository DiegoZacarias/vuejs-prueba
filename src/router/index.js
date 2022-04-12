import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Products from '../views/Products.vue'
import CategoryDetails from '../views/CategoryDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/categories/:id',
    name: 'CategoryDetails',
    component: CategoryDetails,
    props: true
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
