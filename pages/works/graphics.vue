<template>
  <div>
    <LandingComponent title="Graphics" description="3DS Max, Unreal Engine, Adobe stuffs"
                      background-image="/img/logo_w_graphics.webp"></LandingComponent>

    <v-row id="content">
      <v-col cols="12">
        <h2>YouTube vids</h2>
        <p>Subscribe to my <a class="a-custom-button white--text"
                              href="https://www.youtube.com/channel/UC3c-D9k1Q4VhbXalew1N-Ag"
                              target="_blank" rel="noopener">YouTube channel</a>!</p>
      </v-col>
      <v-col v-for="(vid, i) in yt_videos" :key="i" cols="12" xl="10" offset-xl="1">
        <YTComponent :vid-obj="vid"></YTComponent>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col cols="12">
        <h2>Stereo Pano</h2>
        <p>
          Rendered using Autodesk 360 Cloud, modelled using 3DS Max. Open and
          try it out as it is interactive!
        </p>
      </v-col>

      <v-col v-for="(sp, k) in stereo_panos" :key="k" cols="12" md="6">
        <v-lazy v-model="sp.act" :options="{ threshold: 0.5 }" min-height="100" transition="fade-transition">
          <GalleryImage :img-obj="sp"></GalleryImage>
        </v-lazy>
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col cols="12">
        <h2>3DS Renders</h2>
        <p>Hover over to know more!</p>
      </v-col>
      <v-col v-for="(g, j) in gallery" :key="j" cols="12" md="6" xl="4">
        <v-lazy v-model="g.act" :options="{ threshold: 0.5 }" min-height="200" transition="fade-transition">
          <GalleryImage :img-obj="g"></GalleryImage>
        </v-lazy>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'WorksGraphics',
  components: {
    LandingComponent: () => import('@/components/LandingComponent'),
    YTComponent: () => import('@/components/YouTubeVideoComponent'),
    GalleryImage: () => import('@/components/GalleryImageComponent'),
  },
  data: () => ({
    seo: {
      title: 'Works/Graphics',
      description:
        'Projects relating to media such as Adobe Photoshop, Adobe After Effects or 3DS Max created by Jonathan Law',
      image:
        '/img/og/logo_w_graphics.png'
    },
    yt_videos: [
      {
        title: '[4K] Bangkok | Cinematic Travel 2022',
        description:
          '11.11.2022<br>' +
          'My first ever attempt at creating a travel video, and first ever trip post pandemic to Bangkok. Thailand! Fully shot on a GoPro Hero 11.<br><br>' +
          'Took a morning flight from Malaysia on Saturday morning, went to Chatuchak market on the first day, ' +
          'Maeklong Train Market and Amphawa Floating Market on the second day and did shopping on the third day. ' +
          'Unfortunately many roads were close for maintenance at that time I went, therefore the night activities were cut short too.',
        playlist: [
          {
            id: 'MwyoXr4ems8',
          },
        ],
      },
      {
        title: 'The Fuock',
        description:
          '06.05.2017<br>' +
          'The future clock that is still a physical clock you can hang at your sitting room, yet synchronized to your digital clocks.<br><br>' +
          'Created with Adobe After Effects, images rendered with 3DS Max.',
        playlist: [
          {
            id: 'JAZYjGOxuvo',
          },
        ],
      },
      {
        title: '[POPTHOR] Merdeka 58 Short Video',
        description:
          '13.07.2015<br>' +
          '2nd Runner Up for IACT Merdeka 58 Short Video competition! #IniAdalahCaraTanahairku<br><br>' +
          'Original post:<br>https://www.facebook.com/watch/?v=10153159477924143',
        playlist: [
          {
            id: '9t_scMTLr9g',
          },
        ],
      },
    ],
    stereo_panos: [
      {
        title: '5P1 Afternoon',
        description:
          'The classroom in the afternoon I studied in during form 5 at Catholic High School.',
        src: '/gallery/5P1.webp',
        view: '/pano/5p1.html',
        view_text: 'View pano',
      },
      {
        title: '5P1 Morning',
        description: 'The classroom in the morning I studied in during form 5 at Catholic High School.',
        src: '/gallery/5P1_morning.webp',
        view: '/pano/5p1.html?scene=morning',
        view_text: 'View pano',
      },
    ],
    gallery: [
      {
        title: '5P1',
        description: 'A model of the classroom I used to study in at Catholic High School',
        src: '/gallery/5P1.webp',
        view: 'https://gallery.autodesk.com/a360rendering/projects/65856/showreel',
        view_text: 'View collection',
      },
      {
        title: 'The Fuock Bar',
        description: 'Illustrating the Fuock clock in a bar',
        src: '/gallery/tf_bar.webp',
        view: '/gallery/tf_bar.png',
        view_text: 'UHD version',
      },
      {
        title: 'The Fuock Bedroom',
        description: 'Illustrating the Fuock clock in a bedroom',
        src: '/gallery/tf_br.webp',
        view: '/gallery/tf_bedroom.png',
        view_text: 'UHD version',
      },
      {
        title: 'The Fuock Sitting Room',
        description: 'Illustrating the Fuock clock in a sitting room',
        src: '/gallery/tf_sr.webp',
        view: '/gallery/tf_sittingroom.png',
        view_text: 'UHD version',
      },
      {
        title: 'The Fuock Clock',
        description: 'The clock featured in The Fuock',
        src: '/gallery/tf_clock.webp',
        view: '/gallery/tf_clock.jpg',
        view_text: 'HD version',
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
