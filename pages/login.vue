<template>
  <div id="app">
    <v-container>
      <v-row align="center" justify="center">
        <v-card class="mx-auto" color="#68B2A0" dark max-width="800">
          <h1 align="center">L o g i n</h1>
          <br />
          <v-row align="center" justify="center">
            <v-col cols="12" md="10">
              <v-form>
                <v-text-field
                  v-model="id"
                  append-icon="mdi-account"
                  name="Username"
                  label="Username"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  append-icon="mdi-key"
                  name="Password"
                  label="Password"
                  type="password"
                ></v-text-field>
                <br />
                <v-row align="center" justify="center"
                  ><v-btn color="success" @click="login">Login</v-btn></v-row
                >
              </v-form>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { db } from '~/plugins/firebaseConfig.js'
import { store } from '~/store/index'
export default {
  data() {
    return {
      log: false,
      store,
      id: '',
      password: '',
      data: [],
    }
  },
  methods: {
    login() {
      db.collection('MyDataRegister')
        .where('id', '==', this.id)
        .where('password', '==', this.password)
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
            // console.log(doc.data())
            this.log = true
            this.typeDuty = 0
            this.$router.push('/indexlogin')
            const payload = data
            this.$store.dispatch('setUser', payload)
            // console.log(payload)
          })
        })
      db.collection('Employee')
        .where('id', '==', this.id)
        .where('password', '==', this.password)
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
            // console.log(doc.data())
            this.log = true
            this.typeDuty = 1
            this.$router.push('/admin')
            const payload = data
            this.$store.dispatch('setUser', payload)
            // console.log(payload)
          })
        })
    },
    logout() {
      db.collection('MyDataRegister')
        .where('id', '==', this.$store.getters.currentUser[0].id)
        .where('password', '==', this.$store.getters.currentUser[0].password)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(doc.data())
            this.log = false
            const out = null
            this.$store.dispatch('logingOut', out)
            // console.log(out)
          })
        })
      db.collection('Employee')
        .where('id', '==', this.user)
        .where('password', '==', this.pass)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(doc.data())
            this.log = false
            const out = null
            this.$store.dispatch('logingOut', out)
            // console.log(out)
          })
        })
    },
  },
}
</script>
