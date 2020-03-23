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

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: 'about' */ '../views/About.vue')
//   },
//   {
//     path: '/hk',
//     name: 'Hk',
//     meta: {
//       title: '胡凯的首页'
//     },
//     redirect: '/hk/index',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         name: 'Hk-index',
//         meta: { title: '个人中心' },
//         component: () =>
//           import(/* webpackChunkName: 'Hk-index' */ '@/views/hk/hk.vue')
//       }
//     ]
//   },
//   {
//     path: '/icons',
//     component: Layout,
//     name: 'Icons',
//     redirect: '/icons/index',
//     children: [
//       {
//         path: 'index',
//         name: 'Icons-index',
//         meta: {
//           title: 'Icons图标',
//           icon: 'el-icon-picture-outline'
//         },
//         component: () =>
//           import(
//             /* webpackChunkName: 'Icons-index' */ '@/views/icons/icons.vue'
//           )
//       }
//     ]
//   }
// ]

const router = new VueRouter({
  routes: commonRoute
})

export default router
