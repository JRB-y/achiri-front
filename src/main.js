/**
 * We bootstrap the application
 * - import scss
 */
require('./bootstrap')

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { store } from './store/index'

/* ==== Axios init and expose to 'this' globally ==== */
import axios from './tools/axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')