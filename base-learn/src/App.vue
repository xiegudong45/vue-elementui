<template>
  <div id="app">
    <!-- <h1>This is app</h1> -->
    <!-- <button @click="passMsg">传你</button>
    <m-parent :msga="msga" :msgb="msgb" :msgc="msgc" /> -->
    <!-- <router-link to="/home">home</router-link> -->
    <!-- <button @click="toHome">home</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import bus from './util/bus'
  import MParent from './views/Parent'
  export default {
    components: {
      MParent,
    },
    data() {
      return {
        msga: 'msga',
        msgb: 'msgb',
        msgc: 'msgc'
      }
    },
    methods: {
      passMsg() {
        bus.$emit('passMsg', 'i am from app')
      },
      toHome() {
        // this.$router.push({ path: '/home', query: { name: 'Jack' } })
        this.$router.push({ name: 'home', params: { id: 3 } })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>