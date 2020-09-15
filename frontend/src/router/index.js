import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//charge in vueJs
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: () => import('../views/ViewInscription.vue')
  },
  {
    path: '/profil',
    name: 'profil',
    component: () => import('../views/ViewProfil.vue')
  },
  {
    path: '/wall',
    name: 'wall',
    component: () => import('../views/ViewWall.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewAdmin.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router