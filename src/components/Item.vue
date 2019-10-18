<template>
  <div>
    <li>{{comment.name}}说：{{comment.content}}-----<a href="javascript:;" @click="deleteItem">删除</a></li>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    // 属性接收只需要指定属性名
    props: ['comment', 'index', 'delComment'],
    /* props: { // 和上面的是等价的
       comment: Object,
       index: Number,
       delComment: Function
     },*/
    methods: {
      deleteItem: function () {
        if (window.confirm(`确定删除${this.comment.name}的评论么？`)) {
          this.delComment(this.index)
        }
      }
    }
  }
</script>

<style scoped>

</style>
