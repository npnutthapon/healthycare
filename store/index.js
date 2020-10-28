export const state = () => ({
  login: '',
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
  input(state, { piece }) {
    state.orderData.push({
      piece,
    })
  },
}
export const getters = {
  data(state) {
    return state.orderData
  },
}
