<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="#43978D"
    >
      <v-list>
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
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="#264D59">
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
    <v-footer :absolute="!fixed" app color="#264D59">
      <span>HealthyCare</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
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
          title: 'login',
          to: '/login',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'store',
          to: '/product',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'fitness',
          to: '/fitness',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'admin',
          to: '/admin',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'image',
          to: '/image',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'booking',
          to: '/booking',
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
  background-color: rgb(255, 255, 255);
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
