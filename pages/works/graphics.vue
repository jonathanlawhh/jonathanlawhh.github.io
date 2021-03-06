<template>
  <div>
    <LandingComponent title="Graphics"></LandingComponent>

    <v-row id="content">
      <v-col cols="12">
        <h2>YouTube vids</h2>
      </v-col>
      <v-col
        v-for="(vid, i) in yt_videos"
        :key="i"
        cols="12"
        xl="10"
        offset-xl="1"
      >
        <YTComponent :vid-obj="vid"></YTComponent>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>Stereo Pano</h2>
        <p>
          Rendered using Autodesk 360 Cloud, modelled using 3DS Max. Open and
          try it out as it is interactive!
        </p>
      </v-col>

      <v-col v-for="(sp, k) in stereo_panos" :key="k" cols="12" md="6" lg="4">
        <v-lazy
          v-model="sp.act"
          :options="{ threshold: 0.5 }"
          min-height="200"
          transition="fade-transition"
        >
          <GalleryImage :img-obj="sp"></GalleryImage>
        </v-lazy>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>3DS Renders</h2>
        <p>Hover over to know more!</p>
      </v-col>
      <v-col v-for="(g, j) in gallery" :key="j" cols="12" md="6" lg="4">
        <v-lazy
          v-model="g.act"
          :options="{ threshold: 0.5 }"
          min-height="200"
          transition="fade-transition"
        >
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
    },
    yt_videos: [
      {
        title: 'Faber Project',
        description:
          'Rendered cinematic using Unreal Engine 4.2 and model with 3DS Max, post processed with After Effects.<br>' +
          'The environment is based on the floor (Faber Towers, Taman Desa) where I used to work as a child care part timer.\n' +
          'The whole idea is to project a disoriented person who is isolated/trapped in this "dead zone" with no way out.',
        playlist: [
          {
            id: '1xavkofiUlw',
            title: '27.09.2019',
          },
          {
            id: 'VU_Y-kp1JhI',
            title: '18.08.2017',
          },
          {
            id: 'SPMz_IwaoO8',
            title: '27.06.2017',
          },
          {
            id: 'USuUsPO7UaU',
            title: '02.06.2017',
          },
        ],
      },
      {
        title: 'The Fuock',
        description:
          'Trying to achieve a simple motion graphic animation using After Effects.',
        playlist: [
          {
            id: '0XBgs2X5itE',
            title: 'Initial',
          },
        ],
      },
    ],
    stereo_panos: [
      {
        title: '5P1 Afternoon',
        description:
          'The classroom in the afternoon I studied in during form 5.',
        src: '/gallery/5P1.webp',
        view: '/pano/5p1.html',
        view_text: 'Click here to view pano',
      },
      {
        title: '5P1 Morning',
        description: 'The classroom in the morning I studied in during form 5.',
        src: '/gallery/5P1_morning.webp',
        view: '/pano/5p1.html?scene=morning',
        view_text: 'Click here to view pano',
      },
    ],
    gallery: [
      {
        title: '5P1',
        description: 'A model of the classroom I used to study in',
        src: '/gallery/5P1.webp',
        view: 'https://gallery.autodesk.com/a360rendering/projects/65856/showreel',
      },
      {
        title: 'The Fuock Bar',
        description: 'Illustrating Fuock in a bar',
        src: '/gallery/tf_bar.webp',
        view: '/gallery/tf_bar.png',
        view_text: 'Click here to see UHD version',
      },
      {
        title: 'The Fuock Bedroom',
        description: 'Illustrating Fuock in a bedroom',
        src: '/gallery/tf_br.webp',
        view: '/gallery/tf_bedroom.png',
        view_text: 'Click here to see UHD version',
      },
      {
        title: 'The Fuock Sitting Room',
        description: 'Illustrating Fuock in a sitting room',
        src: '/gallery/tf_sr.webp',
        view: '/gallery/tf_sittingroom.png',
        view_text: 'Click here to see UHD version',
      },
      {
        title: 'The Fuock Clock',
        description: 'The clock featured in The Fuock',
        src: '/gallery/tf_clock.webp',
        view: '/gallery/tf_clock.jpg',
        view_text: 'Click here to see HD version',
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
