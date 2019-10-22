/*
  封装对localStorage对象的操作。
  需要向外暴露若干个功能，总体可以向外暴漏对象和函数，那么怎么选择呢？
  即：什么时候暴露对象？ 什么时候暴漏函数呢？
    函数：一个函数包含一个功能。
    对象：一个对象可以包含多个功能。
    所以：是暴漏函数，还是暴漏对象选择的依据是:向外暴漏多少功能。
     向外暴漏一个功能时，只需要向外暴漏一个函数即可， 如果需要向外暴漏多个功能，则向外暴漏一个对象即可。
 */

export default {
  saveData: function (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  getData: function (key) {
    return window.localStorage.getItem(key)
  }
}

/*export function addData (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function getData (key) {
  return window.localStorage.getItem(key)
}*/

/*function addData (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

function getData (key) {
  return window.localStorage.getItem(key)
}

export {addData, getData}*/
