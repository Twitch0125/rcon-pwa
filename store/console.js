export const state = () => ({
  connection: {},
  history: []
})

export const mutations = {
  AddHistory(state, command) {
    state.history.push(command)
  },
  SetConnection(state, connection) {
    state.connection = connection
  }
}
