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
              {{ piece * 100 }}
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="id"
        type="number"
        :rules="idRules"
        label="ID"
        required
      ></v-text-field>

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
            v-model="date"
            hide-details="auto"
            label="Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            required
            filled
            v-on="on"
          />
        </template>
        <v-date-picker v-model="date" @input="menu = false" />
      </v-menu>
      <br />
      <v-text-field
        v-model="address"
        :rules="addressRules"
        label="Address"
        required
      ></v-text-field>
      <br />
      <template>
        <v-file-input
          v-model="fileImage"
          accept="image/*"
          label="File input"
        ></v-file-input>
      </template>
      <br />
      <v-btn
        color="success"
        class="mr-4"
        @click="
          orderData()
          submitform()
        "
        >Buy</v-btn
      >
    </v-form>
    <br />
    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value="value"
      color="primary"
    >
      {{ value }}
    </v-progress-circular>
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
      productname:
        'Proflex Isolate Chocalate เวย์โปรตีน กลิ่นช็อคโกแลต ขนาด 700 กรัม',
      name: '',
      id: '',
      address: '',
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
        total: this.piece * 100,
        productname: this.productname,
        name: this.$store.state.data[0].name,
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
    submitform() {
      // เก็บข้อมูล --> cloud storage
      // เก็บไฟล์ --> storage
      // Create a root reference
      const storageRef = firebase.storage().ref()
      // File or Blob named mountains.jpg
      const file = this.fileImage

      // Create the file metadata
      const metadata = {
        contentType: 'image/jpeg',
      }

      // Upload file and metadata to the object 'images/mountains.jpg'
      const uploadTask = storageRef
        .child('images/' + this.id)
        .put(file, metadata)

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          this.value = progress
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused')
              break
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break

            case 'storage/canceled':
              // User canceled the upload
              break

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL)
          })
        }
      )
    },
  },
}
</script>
<style>
.theme--dark.v-application {
  background-color: rgb(0, 0, 0);
  background-attachment: fixed;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.theme--dark.v-input input,
.theme--dark.v-input textarea {
  color: rgb(255, 255, 255);
}
</style>
