<template>
  <v-container>
    <v-row justify="center" align="center">
      <h1>Fitness</h1>
    </v-row>
    <br />
    <longdo-map />
    <br />
    <v-row justify="center" align="center">
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in itemss"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
    <br />
    <v-row justify="center" align="center">
      <v-btn>สมัครสมาชิก</v-btn>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      itemss: [
        {
          src:
            'https://cdn.discordapp.com/attachments/746260527235334237/763327654702350366/web_190123_0336.jpg',
        },
        {
          src:
            'https://cdn.discordapp.com/attachments/746260527235334237/763327651850485770/26-2-62_-T.jpg',
        },
        {
          src:
            'https://cdn.discordapp.com/attachments/746260527235334237/763327650931408896/banner_serum-01-scaled.jpg',
        },
      ],
    }
  },
}
</script>
