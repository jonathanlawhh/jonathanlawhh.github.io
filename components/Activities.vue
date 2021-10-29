<template>
  <v-row
    style="background-color: #ececec; min-height: 320px; border-radius: 4px"
    justify="center"
    align="center"
  >
    <v-col cols="12">
      <h2 class="text-center black--text">Activities</h2>
      <p class="text-center black--text">Stuff I do whenever I am free</p>
    </v-col>

    <v-col cols="12" md="4" xl="3">
      <v-card class="pa-8" elevation="16">
        <h3 class="text-center">
          I write stuff at Medium/Towards Data Science.
        </h3>
        <p class="text-center mt-4">
          Check out my
          <a
            href="https://jonathanlawhh.medium.com/"
            target="_blank"
            rel="noopener"
            class="a-custom-button white--text text-decoration-none"
          >
            tech blog!</a
          >
        </p>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" xl="3">
      <v-card class="pa-8" elevation="16">
        <h3 class="text-center">
          Projects that I have no idea why I did it...
        </h3>
        <p class="text-center mt-4">
          Check out my
          <nuxt-link
            to="/works/"
            class="a-custom-button white--text text-decoration-none"
          >
            works</nuxt-link
          >
        </p>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" xl="3">
      <v-card class="pa-8" elevation="16">
        <h3 class="text-center">Using data to make NFT art!</h3>
        <p class="text-center mt-4">
          <a class="a-custom-button white--text text-decoration-none" disabled
            >WIP (COMING SOON)</a
          >
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

<style scoped></style>
