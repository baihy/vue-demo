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
        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
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
        this.todos.forEach(td => {
          td.complete = check
        })
      }
    },
    watch: { // 深度监视
      todos: {
        deep: true,
        handler: function (todosNewValue) { // 需要见todos数组的新值放入localStorage
          window.localStorage.setItem('todos_key', JSON.stringify(todosNewValue))
        }
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
