<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img :src="image.link" :alt="image.name" v-for="image in allImages" :key="image.id">
    </div>
    <h2 v-else>Log in to get started!</h2>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ImageList',
    methods: mapActions(['fetchImages']),
    computed: mapGetters(['allImages', 'isLoggedIn']),
    created () {
      this.fetchImages()
    }
  }
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  /* display: inline-block; */
  max-width: 100%;
  height: auto;
  padding: 5px;
}
</style>
