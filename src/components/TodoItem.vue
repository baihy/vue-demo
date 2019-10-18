<template>
  <div>
    <tr @mouseenter="handleShow(true)" @mouseleave="handleShow(false)">
      <td class="tdClass"><input type="checkbox" v-model="todo.complete"></td>
      <td>{{todo.title}}</td>
      <td v-if="delButtonShow">
        <button @click="delItem">删除</button>
      </td>
    </tr>
  </div>
</template>

<script>

  import PubSub from 'pubsub-js'

  export default {
    name: 'MyItem',
    data: function () {
      return {delButtonShow: false}
    },
    props: {
      todo: Object,
      index: Number
    },
    methods: {
      delItem: function () {
        const {todo, index} = this
        if (window.confirm(`确定${todo.title}删除？`)) {
          // 发布消息
          PubSub.publish('delTodo', index)
        }
      },
      handleShow: function (isShow) {
        this.delButtonShow = isShow
      }
    }
  }
</script>

<style scoped>
  tr {
    background: aqua;
  }

  td {
    border: 0px azure solid;
    width: 200px;
  }

  .tdClass {
    border: 2px azure solid;
    width: 20px;
  }
</style>
