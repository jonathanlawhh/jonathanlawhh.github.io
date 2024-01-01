<template>
  <div>
    <LandingComponent title="AI / ML" description="Computer Vision, Machine Learning, Automations"
                      background-image="/img/logo_w_AI.webp"></LandingComponent>

    <v-row id="content" class="mb-8">
      <v-col cols="12">
        <h2>Some random stuff</h2>
        <p>Hover over to know more!</p>
      </v-col>
      <v-col v-for="(p, i) in projects" :key="i" cols="12" md="6" xl="4">
        <v-lazy v-model="p.act" :options="{ threshold: 0.5 }" min-height="100" transition="fade-transition">
          <GalleryImageComponent :img-obj="p"></GalleryImageComponent>
        </v-lazy>
      </v-col>
    </v-row>

    <v-row class="mb-8">
      <v-col cols="12">
        <h2>Published paper</h2>
      </v-col>

      <v-col cols="12" md="8" lg="5">
        <DisplayCard
            title="Sitting Posture Identifier to Overcome Health Issues"
            subtitle="Jonathan Law Hui Hao, Rajasvaran Logeswaran, Hema Latha Krishna Nair"
            body="Introduction: Bad sitting posture habits cause health issues such as headaches or discomfort in the back and can lead to expensive medical expenditure for correction or cure."
            action-text="VIEW JOURNAL"
            action-url="https://www.ijcrr.com/abstract.php?article_id=3771#/"
        >
          <p class="mt-4">
            <span class="font-weight-bold">Published at: </span>
            International Journal of Current Research and Review
            <br/>
            <span class="font-weight-bold">DOI URL: </span>
            <a href="http://dx.doi.org/10.31782/IJCRR.2021.131123" rel="noopener" target="_blank"
               class="a-custom-button white--text">
              http://dx.doi.org/10.31782/IJCRR.2021.131123
            </a>
          </p>
        </DisplayCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'WorksAIML',
  data() {
    return {
      projects: [
        {
          title: 'Optimizing Container Fill Rate with Computer Vision',
          description:
              'Leveraging AI for smarter logistics and data-driven perspective on container utilization, maximizing efficiency and ROI.',
          src: '/img/work_ai_in_logistics_container_fill_rate.webp',
          view: 'https://github.com/jonathanlawhh/container-fill-rate-ai',
          view_text: 'Container Fill Rate AI Github',
        },
        {
          title: 'Reviewnator',
          description:
              'A Shopee review AI moderator. Making product reviews not suck, one review at a time.',
          src: '/img/work_ai_reviewnator.webp',
          view: 'https://reviewnator.jonathanlawhh.com/',
          view_text: 'try it',
        },
        {
          title: 'Emoji Pixelator',
          description:
              'Sliding window implementation to pixelate emoji/s from screen record',
          src: 'https://raw.githubusercontent.com/jonathanlawhh/emoji-pixelator/master/Resource/pixelated-demo.gif',
          view: 'https://github.com/jonathanlawhh/emoji-pixelator',
          view_text: 'Github project',
        },
        {
          title: 'Sitting Posture Identifier',
          description:
              'Identifying the sitting posture of a person based on a side view image',
          view: 'https://sitting-posture.azurewebsites.net/',
          src: '/img/work_web_spi.webp',
          view_text: 'try it',
        },
        {
          title: 'LINE Sticker Scrapper',
          description: 'LINE has good stickers, Whatsapp dont.',
          view: 'https://github.com/jonathanlawhh/line-sticker-downloader',
          src: '/img/work_ai_line_scrapper.webp',
          view_text: 'Github project',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>