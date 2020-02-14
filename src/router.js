import Vue from 'vue';
import VueRouter from 'vue-router';

/** ==== import Components (pages) ==== **/
import Index from './pages/Index.vue';
import CompleteProfile from './pages/CompleteProfile/CompleteProfile.vue';
import Swipe from './pages/Swipe/Swipe.vue';

/** ==== Middlewares ==== **/
Vue.use(VueRouter);

/** ==== Routes array ==== **/
const routes = [
  { path: '/', component: Index },
  { path: '/complete-profile', component: CompleteProfile },
  { path: '/swipe', component: Swipe },

]

export default new VueRouter({
  mode: 'history',
  routes
})