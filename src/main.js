import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import AuthHandler from './components/AuthHandler.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/oath2/callback', component: AuthHandler }
  ],
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
