import axios from '../tools/axios';

export default {
  state: {
    users: []
  },
  getters: {

  },
  mutations: {
    LOGIN: (state, users) => { state.users = users }
  },
  actions: {
    login: function (context) {
      axios.get('user')
        .then(users => {
          context.commit('LOGIN', users.data)
        })
    }
  }
}
