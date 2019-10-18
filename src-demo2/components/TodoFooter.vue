<template>
  <div>
    <input type="checkbox" v-model="isAll"><span>已完成{{completed}}/全部{{all}}</span>
    <button @click="delSelected">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name: 'Fooder',
    props: {
      completed: Number,
      all: Number,
      delTodoSelected: Function,
      selectAll: Function
    },
    computed: {
      isAll: {
        get: function () {
          return this.completed === this.all
        },
        set: function (value) {
          this.selectAll(value)
        }
      }
    },
    methods: {
      delSelected: function () {
        this.delTodoSelected()
      }
    }
  }
</script>

<style scoped>

</style>
