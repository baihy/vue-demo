<template>
  <div>
    <input class="fooderClass" type="text" v-model="title" placeholder="请输入任务名称，并回车确认" @keyup.enter="addItem">
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data: function () {
      return {
        title: ''
      }
    },
    props: {
      todos: Array,
      addTodo: Function
    },
    methods: {
      addItem: function () {
        if (this.title.trim() != '') {
          let todo = {
            title: this.title,
            complete: false
          }
          this.addTodo(todo)
          this.title = ''
        }
      }
    }
  }
</script>

<style scoped>
  .fooderClass {
    width: 400px;
    height: 30px;
  }
</style>
