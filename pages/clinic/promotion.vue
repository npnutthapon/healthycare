<template>
  <v-container>
    <v-row justify="center" align="center">
      <h1 class="black--text">D E N T A L C L I N I C</h1>
    </v-row>
    <v-row justify="center" align="center">
      <h3 class="black--text">ห ม อ ฟั น ค ลิ นิ ก</h3>
    </v-row>
    <v-row justify="center" align="center">
      <br />
      <v-col sm="2" />
      <v-col>
        <longdo-map />
      </v-col>
      <v-col sm="2" />
      <br />
    </v-row>
    <br />
    <v-row justify="center" align="center">
      <h1 class="black--text">P R O M O T I O N</h1>
    </v-row>
    <br />
    <v-row justify="center" align="center">
      <v-col sm="10">
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item, i) in itemss"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <br />
    <v-row justify="center" align="center">
      <v-btn color="info" @click="addDataDen"
        ><h2>สมัครสมาชิก</h2>
        <v-icon>mdi-check-outline</v-icon></v-btn
      >
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
    addDataDen() {
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
      db.collection('MyDataDen')
        .doc('formdata')
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> MyDataDen')
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
      alert('สมัครสมาชิกเรียบร้อย')
    },
    reset() {},
    getData() {
      db.collection('MyDataDen')
        .doc('formdata')
        .onSnapshot((doc) => {
          // console.log("Current data: ", doc.data());
          const firebaseData = doc.data()
          if (firebaseData) {
            this.name = firebaseData.name
            this.lastname = firebaseData.lastname
            this.gender = firebaseData.gender
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
