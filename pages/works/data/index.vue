<template>
  <div>
    <LandingComponent title="Data" description="Data visualizations and analysis"
                      background-image="/img/logo_w_data.webp"></LandingComponent>

    <v-row id="content" class="mb-8">
      <v-col cols="12">
        <h3>Dashboards I have built</h3>
        <p>Hover over to know more!</p>
      </v-col>

      <v-col v-for="(p, i) in projects" :key="i" cols="12" md="6" xl="4">
        <v-lazy v-model="p.act" :options="{ threshold: 0.5 }" min-height="200" transition="fade-transition">
          <GalleryImageComponent :img-obj="p"></GalleryImageComponent>
        </v-lazy>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Data",
  data() {
    return {
      projects: [
        {
          title: 'Tinder',
          description:
              'Summing up my year with an in-depth tutorial on data scrapping and analysis on Tinder users around me according to my preference.',
          src: '/img/work_data_tinder.webp',
          view: '/works/data/tinder/',
          view_text: 'View Tinder dashboard',
        },
      ]
    }
  },
  created() {
    let title = 'Works/Data'
    let desc = 'Explore my portfolio of innovative projects created using Google Data Studio. From data visualization to interactive dashboards, discover how I use the power of Google Data Studio to turn data into actionable insights and drive business results'

    useSeoMeta
    ({
      title: title,
      ogTitle: title,
      description: desc,
      ogDescription: desc,
      ogImage: 'https://jonathanlawhh.com/img/og/logo_w_data.png',
      twitterCard: 'summary_large_image',
    })
    this.$emit('updatePageTitle', title)
  },
}
</script>

