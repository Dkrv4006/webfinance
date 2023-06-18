import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import LoginViewView from '../views/LoginView.vue'

import CreditcardsView from '@/views/creditcards.vue'
// import Guard from '@/module/auth'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // beforeEnter: Guard.auth


  },

  {
    path: '/creditcards',
    name: 'creditcards',
    component: CreditcardsView,
    // beforeEnter: Guard.auth

  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: LoginViewView,

  // },

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
