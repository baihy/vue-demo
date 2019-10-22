/*
 路由器模块
 */
import Vue from 'vue' // 引入vue
import VueRouter from 'vue-router'  // 引入vue-router
// 引入路由组件
import About from '../views/About'
import Home from '../views/Home'

Vue.use(VueRouter)

export default new VueRouter({
  // 配置n个路由规则
  routes: [{
    path: '/About',
    component: About
  }, {
    path: '/Home',
    component: Home
  }, {
    path: '/',
    redirect: '/About'    // 当请求根路径的时候，我们直接请求/about
  }]
})
