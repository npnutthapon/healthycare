<template>
  <v-container>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in itemss"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <br />
    <h1 align="center" class="black--text">S e l e c t</h1>
    <br />
    <v-row justify="center" align="center">
      <v-card class="mx-auto" color="#68B2A0" dark max-width="300">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.discordapp.com/attachments/746260527235334237/763380207955869716/shutterstock_428663329-1.jpg"
        >
          <v-card-title>Fitness</v-card-title>
        </v-img>

        <v-card-subtitle class="black--text"> ฟิตเนส </v-card-subtitle>

        <v-card-text class="text--primary">
          <div class="black--text">ฟิตเนสเพื่อสุขภาพของท่าน</div>
        </v-card-text>
      </v-card>
      <v-space />
      <v-card class="mx-auto" color="#68B2A0" max-width="300">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.discordapp.com/attachments/746260527235334237/763381155751264276/284feaf834ed9934.jpg"
        >
          <v-card-title class="black--text">Dental Clinic</v-card-title>
        </v-img>

        <v-card-subtitle class="black--text"> คลินิกทัตแพทย์ </v-card-subtitle>

        <v-card-text class="text--primary">
          <div class="black--text">คลินิกทัตแพทย์เพื่อช่องปากของท่าน</div>
        </v-card-text>
        <v-space />
      </v-card>
      <v-card class="mx-auto" color="#68B2A0" max-width="300">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.discordapp.com/attachments/746260527235334237/763382672348545084/PVL-Banner-face.png"
        >
          <v-card-title class="black--text">Dermatology Clinic</v-card-title>
        </v-img>

        <v-card-subtitle class="black--text">คลินิกผิวพรรณ</v-card-subtitle>

        <v-card-text class="text--primary">
          <div class="black--text">
            คลินิกผิวพรรณเพื่อความงามของผิวพรรณของท่าน
          </div>
        </v-card-text>
        <v-space />
      </v-card>
      <v-card class="mx-auto" color="#68B2A0" max-width="300">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.discordapp.com/attachments/746260527235334237/763382678153723945/-pobpad.jpg"
        >
          <v-card-title>Scalp Clinic</v-card-title>
        </v-img>

        <v-card-subtitle class="black--text">คลินิกหนังศรีษะ</v-card-subtitle>

        <v-card-text class="text--primary">
          <div class="black--text">คลินิกหนังศรีษะเพื่อเส้นผมของท่าน</div>
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
