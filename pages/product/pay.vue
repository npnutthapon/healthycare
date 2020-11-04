<template>
  <v-container
    ><v-card class="mx-auto" color="#68B2A0" dark max-width="1200">
      <v-row justify="center" align="center"><h1>P a y</h1></v-row>
      <br />
      <v-row justify="center" align="center"><h2>โอนผ่านธนาคาร</h2></v-row>
      <br />
      <v-row justify="center" align="center"
        ><img
          src="https://cdn.discordapp.com/attachments/746260527235334237/772792189469589544/Krungthai.jpg"
          alt=""
      /></v-row>
      <br />
      <v-row justify="center" align="center"
        ><h2>เลขบัญชี : 375-089-1567</h2></v-row
      >
      <v-row justify="center" align="center"><h2>ณัฐพล ปานแดง</h2></v-row>
      <br />
      <v-row align="center" justify="center"><h3>ข้อมูลสั่งซื้อ</h3></v-row>
      <br />
      <v-row align="center" justify="center">
        <v-col cols="12" md="5">
          <v-text-field
            v-model="name"
            append-icon="mdi-account-box"
            :rules="rules"
            hide-details="auto"
            label="Firstname"
            required
          />
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field
            v-model="lastname"
            append-icon="mdi-account-group"
            :rules="rules"
            hide-details="auto"
            label="Lastname"
            required
          />
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10">
          <v-text-field
            v-model="address"
            append-icon="mdi-home-variant"
            :rules="rules"
            hide-details="auto"
            label="Address"
            required
          />
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10">
          <v-file-input
            v-model="fileImage"
            accept="image/*"
            label="File input"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row align="center" justify="center"
        ><v-btn color="success" class="mr-4" @click="addData"
          ><v-icon>mdi-bitcoin</v-icon>P a y</v-btn
        ></v-row
      >
      <br />
      <v-row align="center" justify="center">
        <v-progress-circular
          :rotate="-90"
          :size="100"
          :width="15"
          :value="value"
          color="success"
        >
          {{ value }}
        </v-progress-circular>
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
      name: '',
      lastname: '',
      address: '',
      fileImage: null,
      menu: false,
      value: 0,
    }
  },
  methods: {
    addData() {
      if (
        this.name !== '' &&
        this.lastname !== '' &&
        this.address !== '' &&
        this.fileImage !== null
      ) {
        const dataText = {
          name: this.name,
          lastname: this.lastname,
          address: this.address,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
        db.collection('MyBill')
          .doc()
          .set(dataText)
          .then(function () {
            console.log('Document successfully written! -> MyBill')
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
          })
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
          .child('images/' + this.name + this.lastname)
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
      } else {
        alert('เสร็จสิ้น')
      }
    },
  },
}
</script>
