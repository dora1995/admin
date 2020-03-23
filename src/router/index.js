import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/About.vue')
  },
  {
    path: '/hk',
    name: 'hk',
    meta: {
      title: '胡凯的首页'
    },
    component: layout
  }
]

const router = new VueRouter({
  routes
})

export default router
