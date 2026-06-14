<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h2>Works that I have ventured into</h2>
        <p>
          Some call it a portfolio, some call it their life's work, my mum calls it a waste of time.
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col v-for="(w, i) in works" :key="i" cols="12" md="4" class="mb-8">
        <v-card :to="w.url" class="hover-motion" style="
            position: relative;
            background-color: #424242;
            border: 1px solid white;
            max-width: 480px;
            overflow: visible;
          ">
          <v-img style="opacity: 0.75" width="100%" height="200" :src="w.image" :cover="true"></v-img>
          <div class="custom-card-overlay hover-motion">
            <v-card class="custom-card-overlay-card" elevation="12" theme="light">
              <h3 style="font-size: 140%">{{ w.title }}</h3>
              <p>{{ w.desc }}</p>
            </v-card>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Works',
  data: () => ({
    works: [
      {
        title: 'AI/ML/RPA',
        url: '/works/ai/',
        image: '/img/logo_w_AI.webp',
        desc: 'Computer Vision, Machine Learning, Automations',
      },
      {
        title: 'Data',
        url: '/works/data/',
        image: '/img/logo_w_data.webp',
        desc: 'Data visualizations and analysis',
      },
      {
        title: 'NFT',
        url: '/works/nft/',
        image: '/gallery/nft/art-20211107150655.svg',
        desc: 'A venture into creating NFT art using data from YouTube captions, or computed generated art',
      },
      {
        title: 'Websites and Stuff',
        url: '/works/websites/',
        image: '/img/logo_w_websites.webp',
        desc: 'Production and random sites, some random programs',
      },
      {
        title: 'Graphics',
        url: '/works/graphics/',
        image: '/img/logo_w_graphics.webp',
        desc: '3DS Max, Unreal Engine, Adobe stuffs',
      },
    ],
  }),
}
</script>

<style scoped>
.custom-card-overlay {
  position: absolute;
  bottom: -32px;
  right: 12px;
  max-width: 320px;
}

.custom-card-overlay-card {
  padding: 12px 18px;
  min-height: 100px;
}

@media only screen and (max-width: 1256px) {
  .custom-card-overlay {
    max-width: 240px;
  }
}

@media only screen and (max-width: 960px) {
  .custom-card-overlay {
    right: unset;
    left: 8px;
    max-width: 95%;
  }
}
</style>
