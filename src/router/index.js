import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

import Layout from '@/layout'

Vue.use(VueRouter)

//通用路由 所有身份均可看到
export const commonRoute = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () =>
      import(/* webpackChunkName: 'Login' */ '@/views/login/login.vue')
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import(/* webpackChunkName: '404' */ '@/views/404/404.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    meta: {
      title: '友情链接',
      icon: 'el-icon-s-flag'
    },
    children: [
      {
        path: 'http://www.baidu.com',
        name: 'baidu',
        meta: {
          title: '百度',
          icon: 'el-icon-s-flag'
        }
      },
      {
        path: 'https://www.jianshu.com/p/f8145c799456',
        name: 'jianshu',
        meta: {
          title: '简书',
          icon: 'el-icon-s-flag'
        }
      },
      {
        path: 'https://es6.ruanyifeng.com/',
        name: 'es6',
        meta: {
          title: 'es6',
          icon: 'el-icon-s-flag'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'HomeIndex',
        component: Home,
        meta: {
          title: '首页',
          icon: 'el-icon-s-flag'
        }
      }
    ]
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Layout,
    redirect: '/introduction/index1',
    meta: {
      title: '介绍',
      icon: 'el-icon-s-flag'
    },
    children: [
      {
        path: 'index1',
        component: () =>
          import(
            /* webpackChunkName: 'Introduction' */ '@/views/introduction/introduction.vue'
          ),
        meta: {
          title: '介绍',
          icon: 'el-icon-s-flag'
        }
      },
      {
        path: 'index2',
        component: () =>
          import(
            /* webpackChunkName: 'Introduction' */ '@/views/introduction/introduction2.vue'
          ),
        meta: {
          title: '介绍',
          icon: 'el-icon-s-flag'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes: commonRoute
})

export default router
