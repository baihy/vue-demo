<template>
  <div>
    <form>
      用户名：<input type="text" name="username" v-model="username"><br/>
      评论内容：<textarea cols="20" rows="5" v-model="content"></textarea><br/>
      <input type="button" value="提交" @click="add"><br/>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'ItemAdd',
    props: {
      addComment: {   // 指定属性名，属性的类型，指定属性的必要性
        type: Function,
        required: true
      }
    },
    methods: {
      add: function () {
        let username = this.username
        let content = this.content
        // 定义对象
        let comment = {
          name: username,
          content: content
        }
        this.addComment(comment)
        this.username = ''
        this.content = ''
      }
    },
    data () {
      return {
        username: '',
        content: ''
      }
    }
  }
</script>

<style scoped>

</style>
