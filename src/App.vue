<template>
  <div class="appClass">
    <!--<todo-header v-bind:todos="todos" v-on:addTodo="addTodo"/>--> <!--自定义addTodo事件-->
    <todo-header ref="headder"/> <!--需要给模版标签起一个名字-->
    <!--<todo-list v-bind:todos="todos" :delTodo="delTodo"/>-->
    <todo-list v-bind:todos="todos"/><!--delTodo方法，需要先传给TodoList,之后在传给TodoItem-->
    <todo-footer :completed="completed" :all="todos.length" v-bind:delTodoSelected="delTodoSelected"
                 :select-all="selectAll"/>
  </div>
</template>

<script>

  import PubSub from 'pubsub-js'
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
    },

    mounted: function () {
      // 在vue的生命周期回调函数中，绑定事件
      // 这里需要通过@refs获取到需要绑定事件的元素对象
      this.$refs.headder.$on('addTodo', this.addTodo)
      // 订阅消息
      PubSub.subscribe('delTodo', function (msg, data) {  // 注意：订阅消息的方法，前面的参数msg指的事件的名称
        this.delTodo(data)
      })
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
