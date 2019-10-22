import Vue from 'vue'
import VueResource from 'vue-resource' // 引入vue-resource组件
import App from './App'
import routerDemo from './routers'   //  注意：如果引入配置的js，名称如果是index，则可以省略。默认引入的是index.js
// 注意：VueResource是vue的插件，而vue的插件是依赖vue的内容的。所以：一定要注意：引入插件的位置，是在引入vue之后。

// 注意：可以在main中，引入任何文件， 且这些文件在所有的模块中，都是有效的
Vue.use(VueResource) // 内部会给VM对象和组件添加一个属性：$http

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router: routerDemo // 注意:配置对象的属性名，都是固定的属性名。
})
