import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/layout/Layout.vue'
import store from '../store/index'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/pages/login.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path:'/index',
        name:'index',
        component:()=>import('../views/pages/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/pages/userList.vue')
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('../views/pages/roleList.vue')
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/pages/goodsList.vue')
      }

    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  const uInfo = store.state.uInfo.uInfo
  console.log('uinfo',store.state.uInfo)
  if (uInfo.username) {
    next()
  } else {
    if (to.path === '/login') {
      next()
      return
    }
    next('/login')
  }
})

export default router
