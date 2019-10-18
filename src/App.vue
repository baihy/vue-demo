<template>
  <div class="appClass">
    <todo-header v-bind:todos="todos" v-bind:addTodo="addTodo"/>
    <todo-list v-bind:todos="todos" :delTodo="delTodo"/>
    <todo-footer :completed="completed" :all="todos.length" v-bind:delTodoSelected="delTodoSelected"
                 :select-all="selectAll"/>
  </div>
</template>

<script>

  import todoHeader from './components/TodoHeader'
  import todoList from './components/TodoList'
  import todoFooter from './components/TodoFooter'

  export default {
    name: 'App',
    components: {todoHeader, todoList, todoFooter},
    data () {
      return {
        todos: [
          {title: '吃饭', complete: false},
          {title: '睡觉', complete: true},
          {title: 'coding', complete: false}
        ]
      }
    },
    computed: {
      completed: function () {
        return this.todos.filter((td) => td.complete).length
      }
    },
    methods: {
      addTodo: function (todo) {
        this.todos.unshift(todo)
      },
      delTodo: function (index) {
        this.todos.splice(index, 1)
      },
      delTodoSelected: function () {
        this.todos = this.todos.filter(td => !td.complete)
      },
      selectAll: function (check) {
        this.todos.forEach(td => td.complete = check)
      }
    }
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
