<template>
  <v-row style="background-color: #ececec; min-height: 320px; border-radius: 4px;" justify="center" align="center">
    <v-col cols="12">
      <h2 class="text-center text-black">Activities</h2>
      <p class="text-center text-black">Stuff I do whenever I am free</p>
    </v-col>

    <v-col cols="12" md="4" xl="3">
      <v-card class="pa-8" elevation="16" style="min-height: 180px">
        <h3 class="text-center">
          I write stuff at Medium/Towards Data Science.
        </h3>
        <p class="text-center mt-4">
          Check out
          <a href="https://jonathanlawhh.medium.com/" target="_blank" rel="noopener"
             class="a-custom-button white--text text-decoration-none">
            my tech blog!
          </a>
        </p>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" xl="3">
      <v-card class="pa-8" elevation="16" style="min-height: 180px">
        <h3 class="text-center">
          Projects made, because why not
        </h3>
        <p class="text-center mt-4">
          Check out
          <NuxtLink to="/works/" class="a-custom-button white--text text-decoration-none">
            my works
          </NuxtLink>
        </p>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" xl="3">
      <v-card class="pa-8" elevation="16" style="min-height: 180px">
        <h3 class="text-center">A venture into creating NFT art using data from YouTube captions, or computed generated
          art</h3>
        <p class="text-center mt-4">
          Browse
          <NuxtLink to="/works/nft" class="a-custom-button white--text text-decoration-none">my "art/s"</NuxtLink>
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Activities',
}
</script>
