<template>
  <v-container>
    <v-card class="mx-auto" color="#68B2A0" dark max-width="1200">
      <v-row>
        <v-col sm="5" />
        <v-col sm="7">
          <h1 class="black--text">S t o r e</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" />
        <v-col>
          <h3 class="black--text">Haewon ยาสีฟันแฮวอน 2in1</h3>
        </v-col></v-row
      >
      <v-row>
        <v-row>
          <v-col sm="1" />
          <v-col sm="4">
            <v-card class="mx-auto" color="white" dark max-width="300">
              <img
                src="https://cdn.discordapp.com/attachments/746260527235334237/772408221238558730/PicsArt_07-28-10.57.51.png" /></v-card
          ></v-col>
          <v-col sm="7">
            <h4 class="black--text">
              วิธีการใช้ บีบยาสีฟัน ขนาดเท่าเม็ดถั่วเขียว
            </h4>
            <h4 class="black--text">ใช้แปรงได้ทั่วปาก 1 หลอด 80 g</h4>
            <h4 class="black--text">ใช้ได้มากถึง 500 ครั้ง</h4>
            <br />
            <v-row>
              <v-col sm="2"
                ><v-text-field
                  v-model="piece"
                  class="black--text"
                  type="number"
                  :counter="10"
                  :rules="piece"
                  label="Piece"
                  required
                ></v-text-field></v-col
            ></v-row>
            <h3 class="black--text">Total : {{ piece * 450 }} บาท</h3>
            <br />
            <v-btn color="success" class="mr-4" @click="orderData">Buy</v-btn>
          </v-col>
        </v-row>
      </v-row>
      <v-row>
        <v-col />
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      total: 0,
      productname: 'Haewon ยาสีฟันแฮวอน 2in1',
      fileImage: null,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      value: 0,
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
        piece: this.piece,
        total: this.total,
        productname: this.productname,
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
      db.collection('MyDataRegister')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyDataRegister')
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
