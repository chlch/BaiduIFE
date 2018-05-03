import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../assets/app.css'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})