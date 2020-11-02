<template>
  <v-container>
    <v-row justify="center" align="center">
      <h1 align="center" class="black--text">Store</h1>
    </v-row>
    <v-row justify="center" align="center">
      <v-col justify="center" align="center">
        <v-row>
          <v-card class="mx-auto" color="#68B2A0" dark max-width="350">
            <nuxt-link to="/product/id1">
              <v-card class="mx-auto" color="white" dark max-width="300">
                <img
                  src="https://cdn.discordapp.com/attachments/746260527235334237/772409639849164800/SSP54950016.png"
                />
              </v-card>
            </nuxt-link>
            <br />
            <h3 class="black--text">ProflexIsolateChocalate</h3>
            <h4 class="black--text">เวย์โปรตีนกลิ่นช็อคโกแลต 700 กรัม</h4>
            <v-card-text class="black--text">2,790 บาท / ชิ้น</v-card-text>
          </v-card>
          <v-space />
          <v-card class="mx-auto" color="#68B2A0" dark max-width="350">
            <nuxt-link to="/product/id2">
              <v-card class="mx-auto" color="white" dark max-width="300">
                <img
                  src="https://cdn.discordapp.com/attachments/746260527235334237/772408221238558730/PicsArt_07-28-10.57.51.png"
                />
              </v-card>
            </nuxt-link>
            <br />
            <h3 class="black--text">HAEWON 2in1</h3>
            <h4 class="black--text">ยาสีฟันแฮวอน 80 กรัม</h4>
            <v-card-text class="black--text">450 บาท / ชิ้น</v-card-text>
          </v-card>
          <v-space />
          <v-card class="mx-auto" color="#68B2A0" dark max-width="350">
            <nuxt-link to="/product/id3">
              <v-card class="mx-auto" color="white" dark max-width="350">
                <img
                  src="https://cdn.discordapp.com/attachments/746260527235334237/772428838583664640/25-03-2020-3079.png"
                />
              </v-card>
            </nuxt-link>
            <br />
            <h3 class="black--text">Revive</h3>
            <h4 class="black--text">เซต3ขวด</h4>
            <v-card-text class="black--text">5,970 บาท / เช็ต</v-card-text>
          </v-card>
          <v-space />
          <v-card class="mx-auto" color="#68B2A0" dark max-width="350">
            <nuxt-link to="/product/id4">
              <v-card class="mx-auto" color="white" dark max-width="350">
                <img
                  src="https://cdn.discordapp.com/attachments/746260527235334237/772439608200790016/2c2d7677c299b18f.png"
                />
              </v-card>
            </nuxt-link>
            <br />
            <h3 class="black--text">SKIN BARRIER FRESH SERUM</h3>
            <h4 class="black--text">
              เซรั่มเพื่อผิวแข็งแรง แก้ผิวบอบบาง ลดการไวสิว ผิวขาวใส
              ไร้ริ้วรอยก่อนวัย
            </h4>
            <v-card-text class="black--text">1,290 บาท / ชิ้น</v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {}
</script>
