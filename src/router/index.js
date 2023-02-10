import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/layout/Layout.vue'

const routes = [
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/pages/login.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect:'/user',
    children:[
      {
      path:'/user',
      name:'user',
      component:()=>import('../views/pages/userList.vue')
    },
      {
      path:'/roles',
      name:'roles',
      component:()=>import('../views/pages/roleList.vue')
    },
    {
      path:'/goods',
      name:'goods',
      component:()=>import('../views/pages/goodsList.vue')
    }

  ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
