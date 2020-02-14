export default {
  state: {
    show: false
  },
  mutations: {
    TOGGLE: (state) => { state.show = !state.show }
  },
  actions: {
    toggle_drawer: (context) => { context.commit('TOGGLE') }
  },
  getters: {
    getDrawer: (state) => { return state.show }
  }
}