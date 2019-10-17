<template>
  <div>
    <li>{{comment.name}}说：{{comment.content}}</li>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    // 属性接收只需要指定属性名
    props: ['comment']
  }
</script>

<style scoped>

</style>
