<template>
  <v-container>
    <v-row>
      <v-col />
      <v-col
        ><v-card color="#264D59"
          ><v-row justify="center" align="center">
            <v-col cols="12" md="8">
              <h3>
                Name : {{ this.$store.state.data[0].name }}
                {{ this.$store.state.data[0].lastname }}
              </h3>
            </v-col>
            <v-col cols="12" md="4">
              <h3>
                Position : {{ this.$store.state.data[0].position }}
              </h3></v-col
            ></v-row
          >
        </v-card></v-col
      >
      <v-col
    /></v-row>
    <br />
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in itemss"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <br />
    <h1 align="center" class="black--text">Select</h1>
    <br />
    <v-row justify="center" align="center">
      <v-card class="mx-auto" color="#2C6975" dark max-width="300">
        <nuxt-link to="/fitness">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.discordapp.com/attachments/746260527235334237/763380207955869716/shutterstock_428663329-1.jpg"
          >
            <v-card-title>Fitness</v-card-title>
          </v-img>
        </nuxt-link>
        <v-card-subtitle class="pb-0"> ฟิตเนส </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>ฟิตเนสเพื่อสุขภาพของท่าน</div>
        </v-card-text>
      </v-card>
      <v-space />
      <v-card class="mx-auto" color="#2C6975" max-width="300">
        <nuxt-link to="/clinic">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.discordapp.com/attachments/746260527235334237/763381155751264276/284feaf834ed9934.jpg"
          >
            <v-card-title>Dental Clinic</v-card-title>
          </v-img>
        </nuxt-link>
        <v-card-subtitle class="pb-0"> คลินิกทัตแพทย์ </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>คลินิกทัตแพทย์เพื่อช่องปากของท่าน</div>
        </v-card-text>
        <v-space />
      </v-card>
      <v-card class="mx-auto" color="#2C6975" max-width="300">
        <nuxt-link to="/product">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.discordapp.com/attachments/746260527235334237/763382672348545084/PVL-Banner-face.png"
          >
            <v-card-title>Dermatology Clinic</v-card-title>
          </v-img>
        </nuxt-link>
        <v-card-subtitle class="pb-0">คลินิกผิวพรรณ</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>คลินิกผิวพรรณเพื่อความงามของผิวพรรณของท่าน</div>
        </v-card-text>
        <v-space />
      </v-card>
      <v-card class="mx-auto" color="#2C6975" max-width="300">
        <nuxt-link to="/product">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.discordapp.com/attachments/746260527235334237/763382678153723945/-pobpad.jpg"
          >
            <v-card-title>Scalp Clinic</v-card-title>
          </v-img>
        </nuxt-link>
        <v-card-subtitle class="pb-0">คลินิกหนังศรีษะ</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>คลินิกหนังศรีษะเพื่อเส้นผมของท่าน</div>
        </v-card-text>
        <v-space />
      </v-card>
    </v-row>
    <br />
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
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style>
.theme--dark.v-application {
  background-color: #bce6ff;
  background-attachment: fixed;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
