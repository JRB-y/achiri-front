export default {
  namespaced: true,
  state: {
    show: false
  },
  getters: {
    getDrawer: (state) => { return state.show }
  },
  mutations: {
    TOGGLE_DRAWER: (state) => { state.show = !state.show }
  },
  actions: {
    toggle_drawer: (context) => { context.commit('TOGGLE_DRAWER') }
  }
}
