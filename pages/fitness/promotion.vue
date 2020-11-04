<template>
  <v-container>
    <v-row justify="center" align="center">
      <h1 class="black--text">ฟิตเนส</h1>
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
      name: this.$store.getters.Data[0].name,
      lastname: this.$store.getters.Data[0].lastname,
      birthday: this.$store.getters.Data[0].birthday,
      gender: this.$store.getters.Data[0].gender,
      age: this.$store.getters.Data[0].age,
      email: this.$store.getters.Data[0].email,
      telephone: this.$store.getters.Data[0].telephone,
      address: this.$store.getters.Data[0].address,
      district: this.$store.getters.Data[0].district,
      province: this.$store.getters.Data[0].province,
      itemss: [
        {
          src:
            'https://cdn.discordapp.com/attachments/746260527235334237/772480932753309716/pt_promotion_jan2019_1200x630.jpg',
        },
        {
          src:
            'https://cdn.discordapp.com/attachments/746260527235334237/772480938391240734/promotion_9-9-sep-fitnessfirst-thailand-2-1200x630.jpg',
        },
        {
          src:
            'https://cdn.discordapp.com/attachments/746260527235334237/772480937383952384/img_20200713012444_1.jpg',
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
        gender: this.gender,
        birthday: this.birthday,
        age: this.age,
        email: this.email,
        telephone: this.telephone,
        address: this.address,
        district: this.district,
        province: this.province,
      }
      db.collection('MyDataFit')
        .doc('formdata')
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> MyDataFit')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      const dataText = {
        name: this.name,
        lastname: this.lastname,
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
