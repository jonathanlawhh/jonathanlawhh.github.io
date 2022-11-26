<template>
  <div>
    <LandingComponent title="Data" :description="seo.description"
                      background-image="/img/logo_w_data.webp"></LandingComponent>

    <v-row id="content" class="mb-8">
      <v-col cols="12">
        <h3>Dashboards I have built</h3>
        <p>Hover over to know more!</p>
      </v-col>

      <v-col v-for="(p, i) in projects" :key="i" cols="12" md="6" xl="4">
        <v-lazy v-model="p.act" :options="{ threshold: 0.5 }" min-height="200" transition="fade-transition">
          <GalleryImage :img-obj="p"></GalleryImage>
        </v-lazy>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Data",
  components: {
    LandingComponent: () => import('@/components/LandingComponent'),
    GalleryImage: () => import('@/components/GalleryImageComponent'),
  },
  data() {
    return {
      seo: {
        title: 'Works/Data',
        description:
          'Data visualizations and analysis',
        image:
          '/img/og/logo_w_data.png'
      },
      projects: [
        {
          title: 'Tinder',
          description:
            'Summing up my year with an in-depth tutorial on data scrapping and analysis on Tinder users around me according to my preference.',
          src: '/img/work_data_tinder_cover.webp',
          view: '/works/data/tinder/',
          view_text: 'View Tinder dashboard',
        },
      ]
    }
  },
  created() {
    this.$nuxt.$emit('seo_update', this.seo)
  },
  activated() {
    this.$nuxt.$emit('seo_update', this.seo)
  },
}
</script>

<style scoped>

</style>
