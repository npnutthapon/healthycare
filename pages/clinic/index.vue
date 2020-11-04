<template>
  <v-container>
    <v-row justify="center" align="center">
      <h1 class="black--text">D E N T A L C L I N I C</h1>
    </v-row>
    <v-row justify="center" align="center">
      <br />
      <v-col sm="2" />
      <v-col>
        <longdo-map />
      </v-col>
      <v-col sm="2" />
      <br />
    </v-row>
    <br />
    <v-row justify="center" align="center">
      <v-btn color="info" @click="dental"
        >S E A R C H<v-icon>mdi-search-web</v-icon></v-btn
      >
    </v-row>
    <br />
    <v-row>
      <v-col sm="4" />
      <v-col>
        <v-row
          ><h3>
            <v-icon>mdi-home-modern</v-icon>
            <nuxt-link to="/clinic/promotion">{{ den }}</nuxt-link>
          </h3>
        </v-row>
        <br />
        <v-row>
          <h3>
            <v-icon>mdi-home-modern</v-icon>
            <nuxt-link to="/clinic/promotion">{{ den1 }}</nuxt-link>
          </h3>
        </v-row>
        <br />
        <v-row>
          <h3>
            <v-icon>mdi-home-modern</v-icon>
            <nuxt-link to="/clinic/promotion">{{ den2 }}</nuxt-link>
          </h3>
        </v-row>
      </v-col>
      <v-col sm="3" />
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      den: '',
      den1: '',
      den2: '',
    }
  },
  methods: {
    dental() {
      this.den = 'คลินิก ที่ใกล้คุณที่สุดคือ หมอฟันคลินิก ระยะทาง 3.4 กิโลเมตร'
      this.den1 =
        'คลินิก ที่ใกล้คุณที่สุดคือ ใกล้ชิดคลินิก ระยะทาง 3.6 กิโลเมตร'
      this.den2 = 'คลินิก ที่ใกล้คุณที่สุดคือ ฟันสวยคลินิก ระยะทาง 4.2 กิโลเมตร'
    },
  },
}
</script>
