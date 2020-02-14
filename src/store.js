import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showRegisterForm: false,
    showLoginForm: false
  },
  getters: {
    showRegisterForm: state => state.showRegisterForm,
    showLoginForm: state => state.showLoginForm,
  },
  mutations: {
    toggleRegisterForm(state) {
      state.showRegisterForm = !state.showRegisterForm
    },
    toggleLoginForm(state) {
      state.showLoginForm = !state.showLoginForm
    }
  }
});
