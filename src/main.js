import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

// import the scss main file
require('./assets/css/app.scss')

new Vue({
  render: h => h(App),
  router
}).$mount('#app')