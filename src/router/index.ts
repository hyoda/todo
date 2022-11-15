import { createRouter, createWebHistory } from "vue-router"
import homeRoute from './homeRoute'
import todoRoute from './todoRoute'
const routes = [
  ...homeRoute, ...todoRoute
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router