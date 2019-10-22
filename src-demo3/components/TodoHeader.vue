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
    methods: {
      addItem: function () {
        if (this.title.trim() !== '') {
          let todo = {
            title: this.title,
            complete: false
          }
          // 触发事件
          this.$emit('addTodo', todo) // 后面的参数就是需要传递给自定义事件的处理方法
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
