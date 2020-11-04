<template>
  <v-container>
    <v-row align="center" justify="center"
      ><H1 class="black--text">A d m i n</H1></v-row
    >
    <br />
    <v-card class="mb-3">
      <v-card-title>
        ข้อมูลการซื้อ
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table :headers="headers" :items="Order" :search="search" />
    </v-card>
    <v-card class="mb-3">
      <v-card-title>
        ข้อมูลการสมัครฟิตเนส
        <v-spacer />
        <v-text-field
          v-model="search1"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers1"
        :items="Dataregister"
        :search="search1"
      />
    </v-card>
    <v-card class="mb-3">
      <v-card-title>
        ข้อมูลการชำระ
        <v-spacer />
        <v-text-field
          v-model="search2"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table :headers="headers2" :items="Bill" :search="search2" />
    </v-card>
  </v-container>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      Order: [],
      search: '',
      headers: [
        {
          text: 'ชื่อ',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'นามสกุล', value: 'lastname' },
        { text: 'ชื่อสินค้า', value: 'productname' },
        { text: 'จำนวน', value: 'piece' },
        { text: 'ราคา', value: 'total' },
      ],
      Dataregister: [],
      search1: '',
      headers1: [
        {
          text: 'ชื่อ',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'นามสกุล', value: 'lastname' },
      ],
      Bill: [],
      search2: '',
      headers2: [
        {
          text: 'ชื่อ',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'นามสกุล', value: 'lastname' },
      ],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      db.collection('MyOrderHis')
        .orderBy('timestamp')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.Order = data
        })
      db.collection('MyDataRegisterFit')
        .orderBy('timestamp')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.Dataregister = data
        })
      db.collection('MyBill')
        .orderBy('timestamp')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.Bill = data
        })
    },
  },
}
</script>
