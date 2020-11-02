import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  currentUser: [{ name: '' }, { lastname: '' }, { id: '' }, { password: '' }],
  login: '',
  data: [],
  orderData: [],
  headers: [
    {
      text: 'Piece',
      align: 'start',
      sortable: false,
      value: 'piece',
    },
  ],
})

export const mutations = {
  login(state, val) {
    state.login = val
  },
  data(state, val) {
    state.data = val
  },
}
export const getters = {
  data(state) {
    return state.orderData
  },
}
