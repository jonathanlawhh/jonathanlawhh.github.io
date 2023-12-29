<template>
  <div>
    <LandingComponent title="Websites" description="Production and random sites, some random programs" background-image="/img/logo_w_websites.webp"></LandingComponent>

    <v-row id="content" class="mb-8">
      <v-col cols="12">
        <h2>Websites made by me</h2>
        <p>Hover over to know more!</p>
      </v-col>

      <v-col v-for="(p, i) in projects" :key="i" cols="12" md="6" xl="4">
        <GalleryImageComponent :img-obj="p"></GalleryImageComponent>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <DisplayCard
            title="I write stuff on dev.to"
            subtitle=""
            body="About DEV: DEV is a community of software developers getting together to help one another out. The software industry relies on collaboration and networked learning. We provide a place for that to happen."
            action-text="dev.to"
            action-url="https://dev.to/jonathanlawhh"
        >
          <p class="mt-4">
            <img
                src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                alt="Jonathan Law's DEV Community Profile"
                height="30"
                width="30"
                style="filter: invert(95%); vertical-align: middle"
            />
          </p>
        </DisplayCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'WorksWebsites',
  data() {
    return {
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
    let title = 'Works/Websites'
    let desc = 'Take a look at my portfolio of diverse websites, including a sitting posture identification website'

    useSeoMeta({
      title: title,
      ogTitle: title,
      description: desc,
      ogDescription: desc,
      ogImage: 'https://jonathanlawhh.com/img/og/logo_w_websites.png',
      twitterCard: 'summary_large_image',
    })
    this.$emit('updatePageTitle', title)
  },
}
</script>
