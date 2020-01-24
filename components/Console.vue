<template>
  <div></div>
</template>

<script>
import { onMounted } from '@vue/composition-api'
import { Rcon } from 'rcon-client'
export default {
  props: {
    rconConnection: Object
  },
  setup(props) {
    let rcon = ref()
    onMounted(() => {
      rcon = new Rcon(props.rconConnection)
    })
  }
}
</script>

<style scoped></style>
