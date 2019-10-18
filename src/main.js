import Vue from 'vue'
import App from './App'
// 注意：可以在main中，引入任何文件， 且这些文件在所有的模块中，都是有效的

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
