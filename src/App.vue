<template>
  <div>
    <div v-if="!repoName">loding...</div>
    <div v-else>最流程的框架是：{{repoName}}</div>
  </div>
</template>

<script>

    export default {
        name: 'App',
        data: function () {
            return {
                repoName: ''
            }
        },
        mounted: function () {
            const url = 'https://api.github.com/search/repositories?q=vue&sort=stars'
            this.$http.get(url).then(function (response) {
                console.info(response)
                this.repoName = response.data.items[0].name
            }, function () {
                console.info('请求失败！！！')
            })
        }
    }
</script>

<style scoped>

</style>
