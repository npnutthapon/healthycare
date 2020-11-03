<template>
  <v-container>
    <v-row justify="center" align="center">
      <h1 class="black--text">คลินิกทัตแพทย์</h1>
    </v-row>
    <br />
    <longdo-map />
    <br />
    <v-row justify="center" align="center">
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in itemss"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
    <br />
    <v-row justify="center" align="center">
      <v-btn color="info" @click="addDataFit">สมัครสมาชิก</v-btn>
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
      itemss: [
        {
          src:
            'https://cdn.discordapp.com/attachments/746260527235334237/763327651850485770/26-2-62_-T.jpg',
        },
        {
          src:
            'https://cdn.discordapp.com/attachments/746260527235334237/772942801175314432/-THAI__0005.jpg',
        },
      ],
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
    addDataFit() {
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
      db.collection('MyDataFit')
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
      db.collection('MyDataRegisterFit')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyDataRegisterFit')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    reset() {},
    getData() {
      db.collection('MyDataFit')
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
