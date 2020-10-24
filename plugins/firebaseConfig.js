import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import Vue from 'vue'
import LongdoMap from 'longdo-map-vue'

Vue.use(LongdoMap, {
  load: {
    apiKey: '0ee5556622be4a99b9172ecd10d40228',
  },
})
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBJxBN6Qo0KcE_EFbXEnGZIYWq6gIsaeaE',
    authDomain: 'projectaa-14baa.firebaseapp.com',
    databaseURL: 'https://projectaa-14baa.firebaseio.com',
    projectId: 'projectaa-14baa',
    storageBucket: 'projectaa-14baa.appspot.com',
    messagingSenderId: '969853651902',
    appId: '1:969853651902:web:895969b98a5f7348f447ef',
    measurementId: 'G-LCG78QMYB2',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
