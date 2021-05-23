<template>
  <div>
    <LandingComponent title="AI / ML"></LandingComponent>

    <v-row id="content" class="mb-8">
      <v-col cols="12">
        <h2>Some random stuff</h2>
        <p>Hover over to know more!</p>
      </v-col>
      <v-col v-for="(p, i) in projects" :key="i" cols="12" md="6" lg="4" xl="3">
        <v-lazy
          v-model="p.act"
          :options="{ threshold: 0.5 }"
          min-height="200"
          transition="fade-transition"
        >
          <GalleryImage :img-obj="p"></GalleryImage>
        </v-lazy>
      </v-col>
    </v-row>

    <CommunityEngagement filter="machinelearning"></CommunityEngagement>
  </div>
</template>

<script>
export default {
  name: 'WorksAIML',
  components: {
    LandingComponent: () => import('@/components/LandingComponent'),
    GalleryImage: () => import('@/components/GalleryImageComponent'),
    CommunityEngagement: () => import('@/components/CommunityEngagement'),
  },
  data() {
    return {
      seo: {
        title: 'Works/AI, ML. RPA',
        description:
          'Projects relating to AI, ML or RPA created by Jonathan Law',
      },
      projects: [
        {
          title: 'Emoji Pixelator',
          description:
            'Sliding window implementation to pixelate emoji/s from screen record',
          src: 'https://raw.githubusercontent.com/jonathanlawhh/emoji-pixelator/master/Resource/pixelated-demo.gif',
          view: 'https://github.com/jonathanlawhh/emoji-pixelator',
          view_text: 'Click here to view Github project',
        },
        {
          title: 'Sitting Posture Identifier',
          description:
            'Identifying the sitting posture of a person based on a side view image',
          view: 'https://sitting-posture.azurewebsites.net/',
          src: '/img/work_web_spi.webp',
        },
        {
          title: 'LINE Sticker Scrapper',
          description: 'LINE has good stickers, Whatsapp dont.',
          view: 'https://github.com/jonathanlawhh/line-sticker-downloader',
          src: 'https://raw.githubusercontent.com/jonathanlawhh/line-sticker-downloader/main/cover.png',
          view_text: 'Click here to view Github project',
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
