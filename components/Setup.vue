<template>
  <div>
    <v-text-field filled v-model="host" label="Host"></v-text-field>
    <v-text-field filled v-model="port" type="number" label="Port"></v-text-field>
    <v-text-field filled
      v-model="password"
      label="Password"
      type="password"
    ></v-text-field>
    <v-row align="center" align-content="center" justify="center">
      <v-col>
        <v-text-field
          outlined=""
          label="Save as"
          placeholder="My Server..."
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn text>Save</v-btn>
      </v-col>
    </v-row>

    <v-btn @click="setConnection()" outlined>Connect</v-btn>

    <ul>
      <li>{{host}}</li>
      <li>{{port}} </li>
      <li>{{password}} </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
export default {
  setup(props, context) {
    let host = ref('')
    let port = ref('')
    let password = ref('')
    let rconConnection = computed(() => ({ host: host.value, port: port.value, password: password.value }))
    const setConnection = () => context.$store.commit('Console/setConnection', rconConnection.value)

    return { host, port, password, rconConnection, setConnection }
  }
}
</script>

<style scoped></style>
