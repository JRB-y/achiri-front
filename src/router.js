import Vue from 'vue';
import VueRouter from 'vue-router';

/** ==== Components (pages) ==== **/
import Index from './pages/Index.vue';

/** ==== Middlewares ==== **/
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Index }
]

export default new VueRouter({
  mode: 'history',
  routes
})