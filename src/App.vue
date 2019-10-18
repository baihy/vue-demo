<template>
  <div class="appClass">
    <TodoHeader/>
    <TodoList/>
    <TodoFooter/>
  </div>
</template>

<script>

  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    name: 'App',
    components: {TodoHeader, TodoList, TodoFooter}
  }
</script>

<style scoped>
  .appClass {
    align-self: center;
    width: 1000px;
    height: 680px;
    line-height: 20px;
    text-align: justify;
    border: 1px solid rgba(187, 187, 187, 1);
  }
</style>
