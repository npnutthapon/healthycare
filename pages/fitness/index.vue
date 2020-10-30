<template>
  <v-container>
    <v-row justify="center" align="center">
      <h1>Fitness</h1>
    </v-row>
    <br />
    <longdo-map />
    <br />
    <v-row justify="center" align="center" @click="fitness">
      <v-btn>ค้นหาฟิตเนสใกล้บ้าน</v-btn>
      {{ fit }}
    </v-row>
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
      this.fit = 'CNX'
    },
  },
}
</script>
