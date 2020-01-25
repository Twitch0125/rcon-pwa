import uuid from 'uuid/v4'
export const state = () => ({
    servers: []
})

export const mutations = {
    /**
     * 
     * @param {*} state savedServers state
     * @param {*} server contains a connection object and a history and a Name. {name: String, connection: ConnectionObject, history: History}
     */
    addServer(state, server){
        server.id = uuid();
        state.servers.push(server)
    },
    removeServer(state, server){
        state.servers = state.servers.filter(serv => serv.id != server.id)
    }
}