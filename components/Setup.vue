<template>
  <div>
    <v-text-field filled v-model="host" label="Host"></v-text-field>
    <v-text-field filled v-model="port" type="number" label="Port"></v-text-field>
    <v-text-field filled v-model="password" label="Password" type="password"></v-text-field>
    <v-row align="center" align-content="center" justify="center">
      <v-col>
        <v-text-field v-model="name" outlined label="Save as" placeholder="My Server..."></v-text-field>
      </v-col>
      <v-col>
        <v-btn @click="addServer()" text>Save</v-btn>
      </v-col>
    </v-row>

    <v-btn @click="setConnection()" outlined>Connect</v-btn>
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
export default {
  setup(props, { root: { $store } }) {
    let name = ref('')
    let host = ref('')
    let port = ref('')
    let password = ref('')
    let rconConnection = computed(() => ({
      host: host.value,
      port: port.value,
      password: password.value
    }))
    const setConnection = () =>
      $store.commit('console/setConnection', rconConnection.value)

    const addServer = () => $store.commit('saved/addServer', {rconConnection, name})

    return { host, port, password, rconConnection, setConnection, name, addServer }
  }
}
</script>

<style scoped></style>
