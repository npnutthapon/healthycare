<template>
  <v-container>
    <v-row>
      <h1>Store</h1>
    </v-row>
    <v-row justify="center" align="center">
      <v-col>
        <h3>
          Proflex Isolate Chocalate เวย์โปรตีน กลิ่นช็อคโกแลต ขนาด 700 กรัม
        </h3>
        <v-row>
          <v-col sm="6"
            ><img
              src="https://cdn.discordapp.com/attachments/746260527235334237/769500989320724480/SSP54950016.png"
          /></v-col>
          <v-col sm="6"
            ><div>
              เป็นเวย์โปรตีนนำเข้าที่ได้รับรองคุณภาพจากองค์การอาหารและยา (อย.),
              สูตร Isolate ดูดซึมโปรตีนสูงสุด 90%++
            </div>
            <div>
              วิธีรับประทาน : ผสมโปรเฟลคซ์เวย์โปรตีน 2 ช้อนพูน (เทียบเท่าปริมาณ
              32 กรัม) กับน้ำ นม หรือน้ำผมไม้ คนให้เข้ากัน
              หรือใช้เครื่องปั่นผลไม้ อาจเติม
              น้ำผึ้งหรือโยเกิร์ตเพื่อเพิ่มรสชาติ
            </div>
            <div>เลขที่ อย. : 20-1-22648-1-0022</div>
            <v-row>
              <v-col sm="3">
                <div>
                  <v-text-field
                    v-model="piece"
                    type="number"
                    :counter="10"
                    :rules="piece"
                    label="Piece"
                    required
                  ></v-text-field></div
              ></v-col>
            </v-row>
            <nuxt-link to="/product/pay">
              <v-btn color="success" class="mr-4" @click="orderData">Buy</v-btn>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      piece: '',
      productname:
        'Proflex Isolate Chocalate เวย์โปรตีน กลิ่นช็อคโกแลต ขนาด 700 กรัม',
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
        productname: this.productname,
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
        productname: this.productname,
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
          }
        })
    },
    validate() {
      const piece = this.piece
      this.$store.commit('input', {
        piece,
      })
    },
  },
}
</script>
