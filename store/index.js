import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  currentUser: [
    { name: '' },
    { lastname: '' },
    { id: '' },
    { password: '' },
    { age: '' },
  ],
  orderData: [],
  log: false,
  headers: [
    {
      text: 'Piece',
      align: 'start',
      sortable: false,
      value: 'piece',
    },
  ],
  typeDuty: null,
})

export const mutations = {
  data(state, val) {
    state.data = val
  },
}
export const getters = {
  data(state) {
    return state.orderData
  },
}
