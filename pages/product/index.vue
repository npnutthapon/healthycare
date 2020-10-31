<template>
  <v-container>
    <v-row>
      <h1>Store</h1>
    </v-row>
    <v-row justify="center" align="center">
      <v-col justify="center" align="center">
        <nuxt-link to="/product/id1">
          <v-card class="mx-auto" max-width="400">
            <h3>
              Proflex Isolate Chocalate เวย์โปรตีน กลิ่นช็อคโกแลต ขนาด 700 กรัม
            </h3>
            <img
              src="https://cdn.discordapp.com/attachments/746260527235334237/769500989320724480/SSP54950016.png"
            />
            <v-card-text
              >เป็นเวย์โปรตีนนำเข้าที่ได้รับรองคุณภาพจากองค์การอาหารและยา (อย.),
              สูตร Isolate ดูดซึมโปรตีนสูงสุด 90%++</v-card-text
            >
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {}
</script>
<style>
.v-card {
  background-color: honeydew;
}
</style>
