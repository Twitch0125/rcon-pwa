export const state = () => ({
  connection: {},
  history: []
})

export const mutations = {
  addHistory(state, command) {
    state.history.push(command)
  },
  setConnection(state, connection) {
    state.connection = connection
  }
}
