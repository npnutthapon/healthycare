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
        <v-col sm="5" />
        <v-col>
          <h3 class="black--text">Revive เซต3ขวด</h3>
        </v-col></v-row
      >
      <v-row>
        <v-row>
          <v-col sm="1" />
          <v-col sm="4">
            <img
              class="mx-auto"
              src="https://cdn.discordapp.com/attachments/746260527235334237/772428838583664640/25-03-2020-3079.png"
          /></v-col>
          <v-col sm="6">
            <h4 class="black--text">นวัตกรรมใหม่ล่าสุดจากสวิตเซอร์แลนด์</h4>
            <h4 class="black--text">
              วิธีใช้ หลังทำความสะอาดเส้นผมและหนังศีรษะ
            </h4>
            <h4 class="black--text">
              ฉีดเซรั่มบนหนังศีรษะขณะผมแห้งหมาด พร้อมนวดเบาๆ
            </h4>
            <h4 class="black--text">
              เพื่อช่วยให้เซรั่มเข้าฟื้นบำรุงถึงหนังศีรษะ
            </h4>
            <h4 class="black--text">
              เพื่อช่วยให้เซรั่มเข้าฟื้นบำรุงถึงหนังศีรษะ
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
            <h3 class="black--text">Total : {{ piece * 5970 }} บาท</h3>
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
      productname: 'Revive เซต3ขวด',
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
        total: this.piece * 5970,
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
