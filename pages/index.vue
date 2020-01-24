<template>
  <v-container>
    <v-row>
      <v-col>
        <Setup></Setup>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Setup from '~/components/Setup'

export default {
  components: {
    Logo,
    VuetifyLogo,
    Setup
  }
}
</script>
