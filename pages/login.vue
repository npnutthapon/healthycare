<template>
  <div id="app">
    <v-container>
      <v-card-title primary-title>
        <h4>Login</h4>
      </v-card-title>
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
        <v-card-actions>
          <v-btn primary large block @click="check">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-container>
  </div>
</template>
<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
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
          })
          this.datas = datas
          console.log(this.datas)
          if (this.staffitem !== '') {
            this.$store.commit('login', this.staffitem)
            this.$store.commit('data', this.datas)
            if (this.staffitem === 'admin') {
              this.$router.push('/admin')
            } else if (this.staffitem === 'user') {
              this.$router.push('/booking')
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
