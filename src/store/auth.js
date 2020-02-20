import axios from '../tools/axios';

export default {
  namespaced: true,
  state: {
    currentUser: null
  },
  getters: {

  },
  mutations: {
    LOGIN: (state, user) => { state.currentUser = user }
  },
  actions: {
    login: function (context, user) {

      return new Promise((resolve, reject) => {

        axios
          .post('login', user)
          .then(response => {
            context.commit('LOGIN')
            resolve(response.data)
          })
          .catch(error => reject(error.response.data.errors))

      })
    }
  }
}
