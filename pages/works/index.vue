<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h2>Works that I have ventured into</h2>
        <p>
          Things I did when I had too much free time. Professional work ahead.
          (not)
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
          ">
          <v-img style="opacity: 0.75" width="100%" height="200" :src="w.image"></v-img>
          <div class="custom-card-overlay hover-motion">
            <v-card class="custom-card-overlay-card" elevation="12" light>
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
    seo: {
      title: 'Works',
      description: 'My portfolio of projects that I worked on',
    },
    works: [
      {
        title: 'AI/ML/RPA',
        url: '/works/ai/',
        image: '/img/logo_w_AI.webp',
        desc: 'Computer Vision, Machine Learning, Automations',
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
  created() {
    this.$nuxt.$emit('seo_update', this.seo)
  },
  activated() {
    this.$nuxt.$emit('seo_update', this.seo)
  },
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
