<template>
  <div id="app">
    <v-container>
      <v-row align="center" justify="center">
        <v-card class="mx-auto" color="#68B2A0" dark max-width="800">
          <h1 align="center">Login</h1>
          <br />
          <v-row align="center" justify="center">
            <v-col cols="12" md="10">
              <v-form>
                <v-text-field
                  v-model="id"
                  name="Username"
                  label="Username"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  name="Password"
                  label="Password"
                  type="password"
                ></v-text-field>
                <br />
                <v-row align="center" justify="center"
                  ><v-btn color="success" @click="check">Login</v-btn></v-row
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
      store,
      id: '',
      password: '',
      position: '',
      staffitem: '',
      datas: [],
    }
  },
  methods: {
    check() {
      db.collection('MyDataRegister')
        .where('id', '==', this.id)
        .where('password', '==', this.password)
        .onSnapshot((querySnapshot) => {
          const staff = []
          const datas = []
          querySnapshot.forEach((doc) => {
            datas.push(doc.data())
            staff.push(doc.data().position)
            this.staffitem = staff.toString()
            const payload = datas
            this.$store.dispatch('setUser', payload)
          })
          this.datas = datas
          console.log(this.datas)
          if (this.staffitem !== '') {
            this.$store.commit('login', this.staffitem)
            this.$store.commit('data', this.datas)
            if (this.staffitem === 'Admin') {
              this.$router.push('/admin')
            } else if (this.staffitem === 'User') {
              this.$router.push('/indexlogin')
            } else if (this.staffitem === '') {
              alert('Error')
              this.$refs.form.reset()
            }
          }
        })
    },
  },
}
</script>
