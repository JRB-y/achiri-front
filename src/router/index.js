import Vue from 'vue';
import VueRouter from 'vue-router';

/** ==== import Components (pages) ==== **/
import Index from '../pages/Index.vue';
import Swipe from '../pages/Swipe/Swipe.vue';
import CompleteProfile from '../pages/CompleteProfile/CompleteProfile.vue';

/** ==== Middlewares ==== **/
Vue.use(VueRouter);

/** ==== Routes array ==== **/
const routes = [
  { path: '/', component: Index },
  { path: '/swipe', component: Swipe },
  { path: '/complete-profile', component: CompleteProfile },
]

export default new VueRouter({
  mode: 'history',
  routes
})
