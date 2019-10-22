<template>
  <div>
    <h1>Home</h1>
    <router-link to="/Home/News">News</router-link>
    <router-link to="Message">Message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped>
  /* .abc {
     color: red;
   }*/
</style>
