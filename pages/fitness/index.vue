<template>
  <v-container>
    <v-row justify="center" align="center">
      <h1 class="black--text">F I T N E S S</h1>
    </v-row>
    <br />
    <longdo-map />
    <br />
    <v-row justify="center" align="center" @click="fitness">
      <v-btn color="info">S E A R C H<v-icon>mdi-search-web</v-icon></v-btn>
    </v-row>
    <br />
    <v-row justify="center" align="center"
      ><h1>
        <v-icon>mdi-home-modern</v-icon>
        <nuxt-link to="/fitness/promotion">{{ fit0 }}</nuxt-link>
      </h1></v-row
    >
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      fit: '',
    }
  },
  methods: {
    fitness() {
      this.fit0 = 'ฟิตเนส ที่ใกล้คุณที่สุดคือ เฟรสฟิตเนส ระยะทาง 3.4 กิโลเมตร'
    },
  },
}
</script>
