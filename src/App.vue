<template>
  <div id="app">
    <div>
      <Header/>
    </div>
    <div>
      <item-add :addComment="addComment"/>
      <item-list :comments="comments" v-bind:delComment="delComment"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import ItemAdd from './components/ItemAdd'
  import ItemList from './components/ItemList'

  export default {

    data () {
      return {
        // 数据在那个组件上，那么更新数据的方法就在那个组件上
        comments: []  // 注意：尽量不要传递data中的值，因为了尽量去保证数据的封闭性
      }
    },
    methods: {
      addComment: function (comment) {
        this.comments.unshift(comment)
      },
      delComment: function (index) {
        console.info(index)
        console.info(this.comments.length)
        this.comments.splice(index, 1)
      }
    },
    name: 'App',
    components: {
      Header, ItemAdd, ItemList
    }
  }
</script>

<style>
</style>
