<template>
  <div class="ui secondary pointing menu">
    
    <a class="item active" href="/">Image Storage</a>

    <div class="right menu">
      <a class="ui item" href="#" @click="login">Login</a>
    </div>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'AppHeader',
    methods: mapActions(['login'])
  }
</script>

<style scoped>
</style>
