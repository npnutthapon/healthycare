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
      ><h3>
        <v-icon>mdi-home-modern</v-icon>
        <nuxt-link to="/fitness/promotion">{{ fit0 }}</nuxt-link>
      </h3></v-row
    >
    <v-row justify="center" align="center"
      ><h3>
        <v-icon>mdi-home-modern</v-icon>
        <nuxt-link to="/fitness/promotion">{{ fit1 }}</nuxt-link>
      </h3></v-row
    >
    <v-row justify="center" align="center"
      ><h3>
        <v-icon>mdi-home-modern</v-icon>
        <nuxt-link to="/fitness/promotion">{{ fit2 }}</nuxt-link>
      </h3></v-row
    >
    <v-row justify="center" align="center"
      ><h3>
        <v-icon>mdi-home-modern</v-icon>
        <nuxt-link to="/fitness/promotion">{{ fit3 }}</nuxt-link>
      </h3></v-row
    >
    <v-row justify="center" align="center"
      ><h3>
        <v-icon>mdi-home-modern</v-icon>
        <nuxt-link to="/fitness/promotion">{{ fit4 }}</nuxt-link>
      </h3></v-row
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
    fitness0() {
      this.fit0 = 'ฟิตเนส ที่ใกล้คุณที่สุดคือ เฟรสฟิตเนส ระยะทาง 3.4 กิโลเมตร'
      this.fit1 =
        'ฟิตเนส ที่ใกล้คุณที่สุดคือ ซีเอ็นเอ็กฟิสเนส ระยะทาง 3.6 กิโลเมตร'
      this.fit2 = 'ฟิตเนส ที่ใกล้คุณที่สุดคือ แม็กซีมัม ระยะทาง 4.2 กิโลเมตร'
      this.fit3 = 'ฟิตเนส ที่ใกล้คุณที่สุดคือ รวมโชคฟิตเนส ระยะทาง 5.0 กิโลเมตร'
      this.fit4 = 'ฟิตเนส ที่ใกล้คุณที่สุดคือ ซีโร่ฟิตเนส ระยะทาง 6.4 กิโลเมตร'
    },
  },
}
</script>
