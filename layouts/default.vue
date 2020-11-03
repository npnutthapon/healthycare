<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="#68B2A0"
    >
      <v-list>
        <v-list v-if="typeDuty == 0">
          <v-list-item
            v-for="(item, i) in items2"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list v-if="typeDuty == 1">
          <v-list-item
            v-for="(item, i) in items1"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list v-if="typeDuty == null">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="#94B447">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app color="#94B447">
      <span>HealthyCare</span>
    </v-footer>
  </v-app>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      typeDuty: null,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'W E L C O M E',
          to: '/',
        },
        {
          icon: 'mdi-account-plus',
          title: 'R E G I S T E R',
          to: '/register',
        },
        {
          icon: 'mdi-key',
          title: 'L O G I N',
          to: '/login',
        },
        {
          icon: 'mdi-bitcoin',
          title: 'P A Y',
          to: '/product/pay',
        },
        {
          icon: 'mdi-headset',
          title: 'A D M I N',
          to: '/admin',
        },
        {
          icon: 'mdi-shopping',
          title: 'S H O P',
          to: '/product',
        },
      ],
      items1: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/indexlogin',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'store',
          to: '/product',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'store',
          to: '/fitness',
        },
      ],
      items2: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/admin',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {
    validate() {
      const id = this.id
      const password = this.password
      const name = this.name
      const lastname = this.lastname
      this.$store.commit('input', {
        id,
        password,
        name,
        lastname,
      })
    },
    methods: {
      logout() {
        db.collection('MyRegister')
          .where('email', '==', this.$store.getters.currentUser[0].email)
          .where('password', '==', this.$store.getters.currentUser[0].password)
          .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // console.log(doc.data())
              this.log = false
              const out = null
              this.$store.dispatch('logingOut', out)
              console.log(out)
            })
          })
      },
    },
  },
}
</script>
<style>
.theme--dark.v-application {
  background-color: rgb(175, 255, 138);
  background-attachment: fixed;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.v-card {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 10px;
  background-color: rgb(121, 183, 255);
}
</style>
