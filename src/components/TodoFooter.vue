<template>
  <div>
    <span>
      <!--slot卡槽的方式执行标签的传递-->
      <slot name="checkbookSlot"></slot>
      <!--<input type="checkbox" v-model="isAll">-->
    </span>
    <span>已完成{{completed}}/全部{{all}}</span>
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

        methods: {
            delSelected: function () {
                this.delTodoSelected()
            }
        }
    }
</script>

<style scoped>

</style>
