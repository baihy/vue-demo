import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
// 注意：可以在main中，引入任何文件， 且这些文件在所有的模块中，都是有效的

Vue.use(VueResource) // 内部会给VM对象和组件添加一个属性：$http

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
