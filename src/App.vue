<template>
  <div>
    <h1>首页</h1>
    <router-link to="/About">About</router-link>
    <router-link to="/Home">Home</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'App'
    }
</script>

<style>
  .abc {
    color: red;
  }
</style>
