<template>
  <v-container>
    <v-card class="mx-auto" color="#68B2A0" dark max-width="1200">
      <v-row>
        <v-col sm="4" />
        <v-col sm="8">
          <h1 class="black--text">Store</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="5" />
        <v-col>
          <h3 class="black--text">SKIN BARRIER FRESH SERUM</h3>
        </v-col></v-row
      >
      <v-row>
        <v-row>
          <v-col sm="1" />
          <v-col sm="4">
            <img
              src="https://cdn.discordapp.com/attachments/746260527235334237/772428838583664640/25-03-2020-3079.png"
          /></v-col>
          <v-col sm="7">
            <h4 class="black--text">
              เซรั่มเพื่อผิวแข็งแรง แก้ผิวบอบบาง ลดการไวสิว
            </h4>
            <h4 class="black--text">ผิวขาวใส ไร้ริ้วรอยก่อนวัย</h4>
            <h4 class="black--text">
              เซรั่มบำรุงผิวที่คืนความเสียหายให้กับผิวของคุณ
            </h4>
            <h4 class="black--text">
              เสริมสร้างความแข็งแรงของเกราะป้องกันผิว (Skin-barrier)
            </h4>
            <h4 class="black--text">
              และสามารถต่อต้านอนุมูลอิสระที่มีประสิทธิภาพสูง ช่วยลดเลือนริ้วรอย
            </h4>
            <h4 class="black--text">
              บำรุงผิวอย่างอ่อนโยน ให้ความชุ่มชื้นผิวทันที
            </h4>
            <h4 class="black--text">
              ปรับผิวให้กระจ่างใสสมดุล ลดเลือนรอยแดงของผิวจากสารเคมี
            </h4>
            <h4 class="black--text">
              ลดความไวต่อการเกิดสิวใหม่ เหมาะสำหรับผิวเป็นสิว
            </h4>
            <h4 class="black--text">
              ผิวแพ้ง่ายและทุกสภาพผิว ไม่ก่อให้เกิดการอุดตัน
            </h4>
            <h4 class="black--text">ผิวแข็งแรงและดีขึ้นในระยะยาว</h4>
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
            <h3 class="black--text">Total : {{ piece * 1290 }} บาท</h3>
            <br />
            <nuxt-link to="/product/pay">
              <v-btn color="success" class="mr-4" @click="orderData">Buy</v-btn>
            </nuxt-link>
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
      piece: 0,
      total: 0,
      productname: 'SKIN BARRIER FRESH SERUM',
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
    orderData() {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      const data = {
        piece: this.piece,
        total: this.piece * 1290,
        productname: this.productname,
        name: this.$store.state.data[0].name,
        lastname: this.$store.state.data[0].lastname,
      }
      db.collection('MyOrder')
        .doc('formdata')
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> MyOrder')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })

      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      const dataOrder = {
        piece: this.piece,
        total: this.piece * 100,
        productname: this.productname,
        name: this.$store.state.data[0].name,
        lastname: this.$store.state.data[0].lastname,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('MyOrderHis')
        .doc()
        .set(dataOrder)
        .then(function () {
          console.log('Document successfully written! -> MyOrderHis')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    reset() {},
    getData() {
      db.collection('MyOrder')
        .doc('formdata')
        .onSnapshot((doc) => {
          // console.log("Current data: ", doc.data());
          const firebaseData = doc.data()
          if (firebaseData) {
            this.piece = firebaseData.piece
            this.total = firebaseData.total
          }
        })
    },
  },
}
</script>
<style>
.theme--dark.v-input input,
.theme--dark.v-input textarea {
  color: rgb(255, 255, 255);
}
</style>
