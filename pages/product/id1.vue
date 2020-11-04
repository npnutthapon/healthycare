<template>
  <v-container>
    <v-card class="mx-auto" color="#68B2A0" dark max-width="1000">
      <v-row>
        <v-col sm="5" />
        <v-col sm="7">
          <h1 class="black--text">S t o r e</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="3" />
        <v-col>
          <h3 class="black--text">
            Proflex Isolate Chocalate เวย์โปรตีน กลิ่นช็อคโกแลต ขนาด 700 กรัม
          </h3>
        </v-col></v-row
      >
      <v-row>
        <v-row>
          <v-col sm="1" />
          <v-col sm="3">
            <img
              class="mx-auto"
              src="https://cdn.discordapp.com/attachments/746260527235334237/773567023204270130/SSP54950016.png"
          /></v-col>
          <v-col sm="7">
            <h4 class="black--text">
              เป็นเวย์โปรตีนนำเข้าที่ได้รับรองคุณภาพจากองค์การอาหารและยา (อย.)
            </h4>
            <h4 class="black--text">สูตร Isolate ดูดซึมโปรตีนสูงสุด 90%++</h4>
            <h4 class="black--text">
              วิธีรับประทาน : ผสมโปรเฟลคซ์เวย์โปรตีน 2 ช้อนพูน
            </h4>
            <h4 class="black--text">
              (เทียบเท่าปริมาณ 32 กรัม) กับน้ำ นม หรือน้ำผมไม้
            </h4>
            <h4 class="black--text">คนให้เข้ากัน หรือใช้เครื่องปั่นผลไม้</h4>
            <h4 class="black--text">
              อาจเติม น้ำผึ้งหรือโยเกิร์ตเพื่อเพิ่มรสชาติ
            </h4>
            <br />
            <v-row>
              <v-col sm="2"
                ><v-text-field
                  v-model="piece"
                  class="black--text"
                  type="number"
                  min="1"
                  max="10"
                  :counter="10"
                  :rules="piece"
                  label="Piece"
                  required
                ></v-text-field></v-col
            ></v-row>
            <h3 class="black--text">Total : {{ piece * 2790 }} บาท</h3>
            <br />
            <v-btn color="success" class="mr-4" @click="orderData"
              ><v-icon>mdi-bitcoin</v-icon>Buy</v-btn
            >
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
      piece: 1,
      total: 0,
      productname:
        'Proflex Isolate Chocalate เวย์โปรตีน กลิ่นช็อคโกแลต ขนาด 700 กรัม',
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
  methods: {
    orderData() {
      const dataOrder = {
        piece: this.piece,
        total: this.piece * 2790,
        productname: this.productname,
        name: this.$store.getters.Data[0].name,
        lastname: this.$store.getters.Data[0].lastname,
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
      alert('สั่งสินค้าเรียบร้อย')
      this.$router.push('/product/pay')
    },
  },
}
</script>
