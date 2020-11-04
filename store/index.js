import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    orderData: [],
    Data: [
      { name: '' },
      { lastname: '' },
      { id: '' },
      { password: '' },
      { age: '' },
      {
        email: '',
      },
      {
        telephone: '',
      },
      {
        address: '',
      },
      {
        district: '',
      },
      {
        province: '',
      },
    ],
    log: false,
    typeDuty: 0,
    headers: [
      {
        text: 'Piece',
        align: 'start',
        sortable: false,
        value: 'piece',
      },
    ],
  },

  mutations: {
    input(state, { piece }) {
      state.orderData.push({
        piece,
      })
    },
    setUser(state, { payload }) {
      state.Data = payload
      state.typeDuty = 1
      state.log = true
    },
    setAdmin(state, { payload }) {
      state.Data = payload
      state.typeDuty = 2
      state.log = true
    },
    logingOut: (state, { out }) => {
      state.log = false
      state.Data = out
      state.typeDuty = 0
    },
    data(state, val) {
      state.data = val
    },
  },

  actions: {
    setUser({ commit }, payload) {
      commit('setUser', { payload })
    },
    setAdmin({ commit }, payload) {
      commit('setAdmin', { payload })
    },
    logingOut({ commit }, out) {
      commit('logingOut', { out })
    },
  },

  getters: {
    log: (state) => state.log,
    typeDuty: (state) => state.typeDuty,
    Data: (state) => state.Data,
    data(state) {
      return state.orderData
    },
  },
})
