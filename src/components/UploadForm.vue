<template>
  <div class="dropper">
    <input
      type="file"
      @change="uploadImages($event.target.files)"
      multiple
      accept="image/*"
    >
    <span>Drag files here</span>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'UploadForm',
    methods: mapActions(['uploadImages'])
  }
</script>

<style scoped>
.dropper {
  position: relative;
  display: flex;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
  height: 30vh;
  border: 2px dashed #000;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}
.dropper:hover {
  background-color: #eee;
}
input {
  position: absolute;
  width: 100%;
  height: 30vh;
  opacity: 0;
}
</style>
