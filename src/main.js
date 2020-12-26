import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import axios from 'axios'
import VueSession from 'vue-session'

Vue.use(VueSession)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
