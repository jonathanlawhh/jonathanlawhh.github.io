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

    <v-row>
      <v-col v-for="(w, i) in works" :key="i" xl="3" lg="4" md="6" sm="12">
        <v-card :to="w.url" class="rounded-0" style="min-width: 100%">
          <v-img :src="w.image" height="200">
            <div class="mt-12 ml-4">
              <p class="font-weight-bold" style="font-size: 140%">
                {{ w.title }}
              </p>
              <p>{{ w.desc }}</p>
            </div>
          </v-img>
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
        url: '/works/ai',
        image: '/img/logo_w_AI.webp',
        desc: 'Computer Vision, Machine Learning, Automations',
      },
      {
        title: 'Websites and Stuff',
        url: '/works/websites',
        image: '/img/logo_w_websites.webp',
        desc: 'Production and random sites, some random programs',
      },
      {
        title: 'Graphics',
        url: '/works/graphics',
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
.v-card {
  background-color: black;
  border-left: 4px white solid;
  content: '';
}

.v-card:hover {
  font-size: 110%;
  transition: font-size 0.2s ease-out;
}

.theme--dark.v-sheet {
  border-color: #ffffff;
}
</style>

<style>
.v-image__image {
  opacity: 0.3 !important;
}
</style>
