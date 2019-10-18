// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * 入口js
 *  1.引入vue
 *  2.new Vue
 */
import Vue from 'vue' // 注意：VUE遵循的模块化规范：是ES6的规范
// 特别注意：引入Vue时，字母的大小写区别。
import App from './App'  // 声明一个组件

new Vue({
  el: '#app',
  components: {'app': App}, // 可以简写为:{App}
  /*components: {
    // 组件就是一个对象
    'App': {
      template: '<div>App的模版</div>'
    }
  },*/
  template: '<app/>'
})
