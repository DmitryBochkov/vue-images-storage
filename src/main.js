import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import AuthHandler from './components/AuthHandler.vue'
import ImageList from './components/ImageList.vue'
import UploadForm from './components/UploadForm.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/oath2/callback', component: AuthHandler }
  ],
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
