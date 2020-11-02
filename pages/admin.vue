<template>
  <v-container>
    <v-row>
      <v-col />
      <v-col
        ><v-card color="#43978D"
          ><v-row justify="center" align="center">
            <v-col cols="12" md="8">
              <h3>
                Name : {{ this.$store.state.data[0].name }}
                {{ this.$store.state.data[0].lastname }}
              </h3>
            </v-col>
            <v-col cols="12" md="4">
              <h3>
                Position : {{ this.$store.state.data[0].position }}
              </h3></v-col
            ></v-row
          >
        </v-card></v-col
      >
      <v-col
    /></v-row>
    <v-card color="#264D59">
      <v-card-title>
        ข้อมูลการจอง
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table :headers="headers" :items="textList" :search="search" />
    </v-card>
  </v-container>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      textList: [],
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
          this.textList = data
        })
    },
  },
}
</script>
