export default {
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
}
