import axios from 'axios'
// holds your root state
export const state = () => ({
  comments: []
})

// contains your actions
export const actions = {
    addComment ({ commit }, comment) {
        console.log('action')
    return new Promise((resolve, reject) => {
      axios.post('http://127.0.0.1:4000/comments', comment)
        .then((response) => {
          resolve()
          commit('addComments', response.data)
        })
    })
  },
  getComments ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('http://127.0.0.1:4000/comments')
        .then((response) => {
          resolve()
          console.log(response.data)
          commit('updateComments', response.data)
        })
    })
  }
}
// contains your mutations
export const mutations = {
  updateComments (state, value) {
    state.comments = value
  },
  addComments (state, value) {
    state.comments.unshift(value)
  }
}
// your root getters
export const getters = {
  comments (state) { return state.comments }
}
