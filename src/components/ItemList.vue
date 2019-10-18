<template>
  <div>
    <div>回复评论：</div>
    <div>
      <ul>
        <Item v-for="comment in comments" :comment="comment"/>
      </ul>
    </div>
  </div>
</template>

<script>

  import Item from './Item'

  export default {
    name: 'ItemList',
    // 声明接收属性 这样属性就会称为组件对象的属性
    props: ['comments'],  // props属性可以是数组，可以是对象，用来接收父组件传过来的数据
    components: {Item}
  }
</script>

<style scoped>

</style>
