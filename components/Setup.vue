<template>
  <div>
    <v-text-field v-model="host" label="Host"></v-text-field>
    <v-text-field v-model="port" type="number" label="Port"></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
    ></v-text-field>
    <v-row align="center" align-content="center" justify="center">
      <v-col>
        <v-text-field
          filled
          label="Save as"
          placeholder="My Server..."
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn text>Save</v-btn>
      </v-col>
    </v-row>

    <v-btn outlined>Connect</v-btn>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  setup() {
    const host = ref('')
    const port = ref('')
    const password = ref('')
    const rconConnection = computed(() => ({ host, port, password }))
    return { host, port, password, rconConnection }
  }
}
</script>

<style scoped></style>
