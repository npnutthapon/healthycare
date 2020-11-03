<template>
  <v-container>
    <v-row justify="center" align="center">
      <h1 class="black--text">คลินิกทัตแพทย์</h1>
    </v-row>
    <br />
    <longdo-map />
    <br />
    <v-row justify="center" align="center" @click="fitness">
      <v-btn color="info">ค้นหาคลินิกทำฟัน</v-btn>
    </v-row>
    <br />
    <v-row justify="center" align="center"
      ><h3>
        <nuxt-link to="/clinic/promotion">{{ fit }}</nuxt-link>
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
    fitness() {
      this.fit = 'คลินิกทำฟัน ที่ใกล้คุณที่สุดคือ พัทยาสไมล์ ระยะทาง 3 กิโลเมตร'
    },
  },
}
</script>
