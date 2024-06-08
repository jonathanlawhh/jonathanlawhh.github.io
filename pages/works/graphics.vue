<template>
  <div>
    <LandingComponent title="Graphics" description="3DS Max, Unreal Engine, Adobe stuffs"
                      background-image="/img/logo_w_graphics.webp"></LandingComponent>

    <v-row id="content">
      <v-col cols="12">
        <h2>YouTube vids</h2>
        <p>Subscribe to my <a class="a-custom-button white--text"
                              href="https://www.youtube.com/channel/UC3c-D9k1Q4VhbXalew1N-Ag"
                              target="_blank" rel="noopener">YouTube channel</a>! Please, I need them to earn some ads money apparently.</p>
      </v-col>
      <v-col cols="12" lg="10" offset-lg="1" v-for="(vid, i) in yt_videos" :key="i">
        <YouTubeVideoComponent :vid-obj="vid"></YouTubeVideoComponent>
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

      <v-col v-for="(sp, k) in stereo_panos" :key="k" cols="12" md="5">
        <v-lazy v-model="sp.act" :options="{ threshold: 0.5 }" min-height="100" transition="fade-transition">
          <GalleryImageComponent :img-obj="sp"></GalleryImageComponent>
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
          <GalleryImageComponent :img-obj="g"></GalleryImageComponent>
        </v-lazy>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'WorksGraphics',
  data: () => ({
    yt_videos: [
      {
        title: 'Osaka Japan 2023 | GoPro Hero 11 Cinematic Travel',
        description:
            '11.07.2023<br>' +
            'A very quick 6 days travel trip to Osaka Japan, which includes using the train to Kyoto and Nara. Within Kyoto, Arashiyama Bamboo Grove and Gion (Geisha District) was visited in one day. Visiting Nara Deer Park for half a day and did a little detour to Aeon Dome Mall.<br>' +
            'From Dontonbori, a short walk would bring you to a notable few markets which are Shinsekai Market, Kuromon Ichiba Market and Shinsaibashisuji street. Of course the Glico Running Man would be on the same area too.',
        playlist: [
          {
            id: 'DNGlpDPrDbs',
            travel_page_url: '/travels/japan-osaka-23'
          },
        ],
      },
      {
        title: '[4K] KL Park Festival 2023 | Taman Titiwangsa GoPro Hero 11 Cinematic',
        description:
            '13.05.2023<br>' +
            'Challenge to shoot and edit the most awaited event, KL Park Festival 2023 which was held at Taman Tasik Titiwangsa Lake Garden within a total of 12 hours using only a GoPro Hero 11. From e-markets selling orchids and various flowers to the indoor Mystical Titiwangsa selling more exotic plants, KL Park Festival 2023 was really an event not to be missed.',
        playlist: [
          {
            id: 'FjcRoJ9QsSI',
          },
        ],
      },
      {
        title: '[4K] Sabah Kota Kinabalu | Cinematic Travel 2023',
        description:
            '28.01.2023<br>' +
            'A really short 3 days 2 night trip to Sabah, going to Manukan island on the first day, Kundasang on the second and Ranau on the third day. It was raining everyday, resulting in landslides and road closure.<br><br>' +
            'My second attempt at creating a travel video, and this time to Sabah! Fully shot on a GoPro Hero 11.',
        playlist: [
          {
            id: 'IKOvg0X4f6A',
          },
        ],
      },
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
        view: 'https://jonathanlawhh.com/pano/5p1.html',
        view_text: 'View pano',
      },
      {
        title: '5P1 Morning',
        description: 'The classroom in the morning I studied in during form 5 at Catholic High School.',
        src: '/gallery/5P1_morning.webp',
        view: 'https://jonathanlawhh.com/pano/5p1.html?scene=morning',
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

}
</script>
