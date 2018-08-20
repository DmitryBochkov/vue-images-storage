<template>
  <div class="ui secondary pointing menu">

    <router-link class="item active" to="/">Image Storage</router-link>

    <div class="right menu">

      <template v-if="isLoggedIn">
        <router-link class="item" to="/">Galleries</router-link>
        <router-link class="item" to="/upload">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </template>

      <a v-else class="ui item" href="#" @click="login">Login</a>
    </div>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'AppHeader',
    methods: mapActions(['login', 'logout']),
    computed: mapGetters(['isLoggedIn'])
  }
</script>

<style scoped>
.pointing.menu {
  padding: 0 5%;
}
</style>
