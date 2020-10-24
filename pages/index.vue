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
    <h1 align="center">Select</h1>
    <br />
    <v-row justify="center" align="center">
      <v-card class="mx-auto" max-width="300">
        <nuxt-link to="/login">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.discordapp.com/attachments/746260527235334237/763380207955869716/shutterstock_428663329-1.jpg"
          >
            <v-card-title>Fitness</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>

            <v-btn color="orange" text> Explore </v-btn>
          </v-card-actions>
        </nuxt-link>
      </v-card>
      <v-space />
      <v-card class="mx-auto" max-width="300">
        <nuxt-link to="/login">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.discordapp.com/attachments/746260527235334237/763381155751264276/284feaf834ed9934.jpg"
          >
            <v-card-title>Dental Clinic</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>

            <v-btn color="orange" text> Explore </v-btn>
          </v-card-actions>
        </nuxt-link>
        <v-space />
      </v-card>
      <v-card class="mx-auto" max-width="300">
        <nuxt-link to="/login">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.discordapp.com/attachments/746260527235334237/763382672348545084/PVL-Banner-face.png"
          >
            <v-card-title>Fitness</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>

            <v-btn color="orange" text> Explore </v-btn>
          </v-card-actions>
        </nuxt-link>
        <v-space />
      </v-card>
      <v-card class="mx-auto" max-width="300">
        <nuxt-link to="/login">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.discordapp.com/attachments/746260527235334237/763382678153723945/-pobpad.jpg"
          >
            <v-card-title>Fitness</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>

            <v-btn color="orange" text> Explore </v-btn>
          </v-card-actions>
        </nuxt-link>
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
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'register',
          to: '/register',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'fitnesslocation',
          to: '/fitnesslocation',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'fitnesshome',
          to: '/fitnesshome',
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
