/*
 路由器模块
 */
import Vue from 'vue' // 引入vue
import VueRouter from 'vue-router'  // 引入vue-router
// 引入路由组件
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News.vue'
import Message from '../views/Message.vue'

Vue.use(VueRouter)
export default new VueRouter({
  // 配置n个路由规则
  routes: [{
    path: '/About', // 注意：path左侧的根路径永远代表根路径。
    component: About
  }, {
    path: '/Home',
    component: Home,
    children: [{
      path: '/Home/News',  //注意：嵌套路由，默认选中第一个
      component: News
    }, {
      path: 'Message',
      component: Message
    }, {
      path: '',  // 默认子页面显示子组件
      redirect: '/Home/Message'
    }]
  }, {
    path: '/',
    redirect: '/About'    // 当请求根路径的时候，我们直接请求/about
  }],
  linkActiveClass: 'abc'  // 指定选中路由链接的class名称，默认是router-link-active
})
