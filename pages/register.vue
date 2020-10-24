<template>
  <v-form @submit.prevent="addData">
    <v-card>
      <v-container>
        <h1 align="center">Register</h1>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="name"
              :rules="rules"
              hide-details="auto"
              label="Firstname"
              required
              filled
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="rules"
              hide-details="auto"
              label="Lastname"
              required
              filled
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="id"
              :rules="rules"
              hide-details="auto"
              label="ID"
              required
              filled
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="password"
              label="Password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="rules"
              :type="show1 ? 'text' : 'password'"
              hide-details="auto"
              required
              filled
              @click:append="show1 = !show1"
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-select
              v-model="gender"
              hide-details="auto"
              :rules="[(v) => !!v || 'Item is required']"
              label="Gender"
              required
              :items="items"
              filled
            />
          </v-col>
          <v-col cols="12" md="5">
            <v-menu
              v-model="menu"
              hide-details="auto"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="birthday"
                  hide-details="auto"
                  label="Birthday"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  required
                  filled
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="birthday" @input="menu = false" />
            </v-menu>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-text-field
              v-model="age"
              :rules="rules"
              hide-details="auto"
              label="Age"
              filled
            />
          </v-col>
          <v-col cols="12" md="5">
            <v-text-field
              v-model="email"
              :rules="rules"
              hide-details="auto"
              label="E-mail"
              filled
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="telephone"
              :rules="rules"
              hide-details="auto"
              label="Tel."
              filled
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="address"
              :rules="rules"
              hide-details="auto"
              label="Address"
              filled
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="district"
              :rules="rules"
              hide-details="auto"
              label="District"
              filled
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="province"
              :rules="rules"
              hide-details="auto"
              label="
Province"
              filled
            />
          </v-col>
        </v-row>
        <nuxt-link to="/login">
          <v-btn color="success" class="mr-4" @click="addData">Submit</v-btn>
        </nuxt-link>
        <v-btn color="warning" class="mr-4" @click="reset"> Reset Form </v-btn>
      </v-container>
    </v-card>
  </v-form>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      name: '',
      lastname: '',
      id: '',
      password: '',
      gender: '',
      age: '',
      email: '',
      telephone: '',
      address: '',
      district: '',
      province: '',
      rules: [(value) => !!value || 'Required.'],
      min: (v) => v.length >= 8 || 'Min 8 characters',
      birthday: new Date().toISOString().substr(0, 10),
      menu: false,
      items: ['Male', 'Female'],
    }
  },

  beforeCreate() {
    if (!firebase.auth().currentUser) {
      console.log('No Login')
    } else {
      console.log('Login ok')
    }
  },
  created() {
    this.getData()
  },
  methods: {
    addData() {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      const data = {
        name: this.name,
        lastname: this.lastname,
        id: this.id,
        password: this.password,
        gender: this.gender,
        birthday: this.birthday,
        age: this.age,
        email: this.email,
        telephone: this.telephone,
        address: this.address,
        district: this.district,
        province: this.province,
      }
      db.collection('MyForm')
        .doc('formdata')
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> MyForm')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })

      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      const dataText = {
        name: this.name,
        lastname: this.lastname,
        id: this.id,
        password: this.password,
        gender: this.gender,
        birthday: this.birthday,
        age: this.age,
        email: this.email,
        telephone: this.telephone,
        address: this.address,
        district: this.district,
        province: this.province,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('MyText')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyText')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    reset() {},
    getData() {
      db.collection('MyForm')
        .doc('formdata')
        .onSnapshot((doc) => {
          // console.log("Current data: ", doc.data());
          const firebaseData = doc.data()
          if (firebaseData) {
            this.name = firebaseData.name
            this.lastname = firebaseData.lastname
            this.id = firebaseData.id
            this.password = firebaseData.password
            this.gender = firebaseData.geender
            this.birthday = firebaseData.birthday
            this.age = firebaseData.age
            this.email = firebaseData.email
            this.telephone = firebaseData.telephone
            this.address = firebaseData.address
            this.district = firebaseData.district
            this.province = firebaseData.province
          }
        })
    },
  },
}
</script>

<style></style>
