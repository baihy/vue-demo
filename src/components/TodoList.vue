<template>
  <div>
    <table>
      <todo-item v-for="(todo, index) in todos" v-bind:key="index" v-bind:todo="todo" :index="index"/>
    </table>
  </div>
</template>

<script>

  import TodoItem from './TodoItem'

  export default {
    name: 'TodoList',
    components: {TodoItem},
    props: {
      todos: Array
    }
  }
</script>

<style scoped>
  table {
    border: 1px azure solid;
    width: 700px;
  }
</style>
