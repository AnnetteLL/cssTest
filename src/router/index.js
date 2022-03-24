import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import CssTest1 from '../views/css/CssTest1'

Vue.use(VueRouter)

const routes = [
  {
    // 路由默认路径
    path: '',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/cssTest1',
    name: 'cssTest1',
    component: CssTest1
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
