<template>
  <div>
    <h1>This is Home</h1>
    <h2>{{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>