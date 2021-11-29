<template>
  <div>
    <LandingComponent title="Websites" description="Production and random sites, some random programs" background-image="/img/logo_w_websites.webp"></LandingComponent>

    <v-row id="content" class="mb-8">
      <v-col cols="12">
        <h2>Websites made by me</h2>
        <p>Hover over to know more!</p>
      </v-col>

      <v-col v-for="(p, i) in projects" :key="i" cols="12" md="6" lg="4" xl="3">
        <GalleryImage :img-obj="p"></GalleryImage>
      </v-col>
    </v-row>

    <CommunityEngagement filter="programming"></CommunityEngagement>
  </div>
</template>

<script>
export default {
  name: 'WorksWebsites',
  components: {
    LandingComponent: () => import('@/components/LandingComponent'),
    GalleryImage: () => import('@/components/GalleryImageComponent'),
    CommunityEngagement: () => import('@/components/CommunityEngagement'),
  },
  data() {
    return {
      seo: {
        title: 'Works/Websites',
        description:
          'Projects relating websites or programs created by Jonathan Law',
      },
      projects: [
        {
          title: 'Sitting Posture Identifier',
          description:
            'Serving as an interface for identifying your bad posture using machine learning. Upload a side view image of yourself sitting,and the machine will tell if you are doing it right! ',
          view: 'https://sitting-posture.azurewebsites.net/',
          src: '/img/work_web_spi.webp',
        },
        {
          title: 'Vibratez',
          description:
            'A website created for the sole purpose of vibrating... How you use it is err, not my business. (Works on Android browsers only, Apple has blocked it)',
          view: 'https://vibratez.netlify.com/',
          src: '/img/work_web_vibratez.webp',
        },
        {
          title: 'APU Schedule',
          description:
            'PWA to find empty classrooms during my uni days. Probably not working anymore as the uni has developed their own app 3 years later.',
          view: 'https://apu-schedule.azurewebsites.net/',
          src: '/img/work_web_apu-schedule.webp',
        },
        {
          title: 'Website Style Guide Demo',
          description:
            'Quick demo website to kick start creating a simple style guide',
          view: 'https://website-style-guide.netlify.app',
          src: '/img/work_web_style_guide.webp',
        },
        {
          title: 'Random Balls',
          description:
            'Balls... who doesnt love balls... just hold anywhere on the screen to summon balls... random project created using P5js',
          view: 'https://randomballs.netlify.app/',
          src: '/img/work_web_balls.webp',
        },
      ],
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
