import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Analyse from '../components/analyse.vue'
import Proba from '../components/proba.vue'
import Micro from '../components/micro.vue'
import Macro from '../components/macro.vue'
//import Videos from '../components/videos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/analyse',
    name: 'Analyse',
    component: Analyse 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/proba',
    name: 'Proba',
    component: Proba
  },
  {
    path: '/micro',
    name: 'Micro',
    component: Micro
  },
  {
    path: '/macro',
    name: 'Macro',
    component: Macro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
