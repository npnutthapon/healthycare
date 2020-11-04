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
                  ><v-btn color="success" @click="login"
                    >L O G I N<v-icon
                      >mdi-checkbox-marked-circle-outline</v-icon
                    ></v-btn
                  ></v-row
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
  store,
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
            this.typeDuty = 1
            this.$router.push('/indexlogin')
            const payload = data
            this.$store.dispatch('setUser', payload)
            console.log(payload[0])
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
            this.typeDuty = 2
            this.$router.push('/admin')
            const payload = data
            this.$store.dispatch('setAdmin', payload)
            console.log(payload[0])
          })
        })
    },
  },
}
</script>
