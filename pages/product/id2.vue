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
                  min="1"
                  max="10"
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
      piece: 1,
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
  methods: {
    orderData() {
      const dataOrder = {
        piece: this.piece,
        total: this.piece * 450,
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
