<template>
  <div>
    <img :src="image.link" :alt="image.name" v-for="image in allImages" :key="image.id">
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ImageList',
    methods: mapActions(['fetchImages']),
    computed: mapGetters(['allImages']),
    created () {
      this.fetchImages()
    }
  }
</script>

<style scoped>
</style>
