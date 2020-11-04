<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-card class="mx-auto" color="#68B2A0" dark max-width="1200">
        <v-form @submit.prevent="addData">
          <h1 align="center">R e g i s t e r</h1>
          <br />
          <v-row align="center" justify="center">
            <v-col cols="12" md="5">
              <v-text-field
                v-model="name"
                append-icon="mdi-account-box"
                :rules="rules"
                hide-details="auto"
                label="Firstname"
                required
              />
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field
                v-model="lastname"
                append-icon="mdi-account-group"
                :rules="rules"
                hide-details="auto"
                label="Lastname"
                required
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="5">
              <v-text-field
                v-model="id"
                append-icon="mdi-account"
                :rules="rules"
                hide-details="auto"
                label="ID"
                required
              />
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field
                v-model="password"
                label="Password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="rules"
                :type="show1 ? 'text' : 'password'"
                hide-details="auto"
                required
                @click:append="show1 = !show1"
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="4">
              <v-select
                v-model="gender"
                hide-details="auto"
                :rules="[(v) => !!v || 'Item is required']"
                label="Gender"
                required
                :items="items"
              />
            </v-col>
            <v-col cols="12" md="6">
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
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="birthday" @input="menu = false" />
              </v-menu>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="age"
                type="number"
                append-icon="mdi-account-convert"
                :rules="rules"
                hide-details="auto"
                label="Age"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="email"
                append-icon="mdi-email"
                :rules="rules"
                hide-details="auto"
                label="E-mail"
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="5">
              <v-text-field
                v-model="telephone"
                type="number"
                append-icon="mdi-remote"
                :rules="rules"
                hide-details="auto"
                label="Tel."
              />
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field
                v-model="address"
                append-icon="mdi-home"
                :rules="rules"
                hide-details="auto"
                label="Address"
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="5">
              <v-text-field
                v-model="district"
                append-icon="mdi-home-outline"
                :rules="rules"
                hide-details="auto"
                label="District"
              />
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field
                v-model="province"
                append-icon="mdi-home-variant"
                :rules="rules"
                hide-details="auto"
                label="
Province"
              />
            </v-col>
          </v-row>
          <br />
          <v-row align="center" justify="center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="success" dark v-bind="attrs" v-on="on">
                  S U B M I T<v-icon>mdi-checkbox-marked-circle-outline</v-icon>
                </v-btn>
              </template>

              <v-card
                v-if="
                  (name != '') &
                  (lastname != '') &
                  (id != '') &
                  (password != '') &
                  (age != '') &
                  (birthday != '') &
                  (gender != '') &
                  (email != '') &
                  (telephone != '') &
                  (address != '') &
                  (district != '') &
                  (province != '')
                "
              >
                <v-card-title class="headline"> Successfully </v-card-title>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="primary"
                    style="text-decoration: none"
                    text
                    @click="
                      dialog = false
                      addData()
                    "
                  >
                    ยืนยัน
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-card
                v-if="
                  name == '' ||
                  lastname == '' ||
                  id == '' ||
                  password == '' ||
                  age == '' ||
                  birthday == '' ||
                  gender == '' ||
                  email == '' ||
                  telephone == '' ||
                  address == '' ||
                  district == '' ||
                  province == ''
                "
              >
                <v-card-title class="headline"> ข้อมูลไม่ถูกต้อง </v-card-title>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="error" text @click="dialog = false">
                    ยืนยัน
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog></v-row
          >
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      dialog: false,
      name: '',
      lastname: '',
      id: '',
      password: '',
      age: '',
      gender: '',
      email: '',
      telephone: '',
      address: '',
      district: '',
      province: '',
      position: 'User',
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
        position: this.position,
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
        position: this.position,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('MyDataRegister').doc().set(dataText)
      this.reset()
      this.$router.push('/login')
    },
    reset() {
      this.name = ''
      this.lastname = ''
      this.id = ''
      this.password = ''
      this.age = ''
      this.birthday = ''
      this.gender = ''
      this.email = ''
      this.telephone = ''
      this.address = ''
      this.district = ''
      this.province = ''
    },
  },
}
</script>

<style></style>
