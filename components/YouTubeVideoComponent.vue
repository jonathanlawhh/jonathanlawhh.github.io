<template>
  <v-card style="background-color: #121212">
    <v-card-text>
      <v-row>
        <v-col v-if="!clicked" cols="12" md="6" lg="5">
          <v-img :src="`https://img.youtube.com/vi/${selected_vid.id}/mqdefault.jpg`" contain class="hover-motion"
                 style="cursor: pointer; height: 320px" @click="clicked = true">
            <div style="background-color: rgba(0, 0, 0, 0.6); height: 100%" class="text-center">
              <v-icon style="margin-top: 20%; font-size: 64px" icon="mdi-play-circle-outline"></v-icon>
            </div>
          </v-img>
        </v-col>

        <v-col v-if="clicked" cols="12" md="6" lg="5">
          <iframe width="100%" height="320"
                  :src="`https://www.youtube-nocookie.com/embed/${selected_vid.id}/?modestbranding=1`" frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                  allowfullscreen></iframe>
        </v-col>

        <v-col cols="12" md="6" lg="5">
          <h3 v-text="vidObj.title"></h3>
          <br/>
          <p v-html="vidObj.description"></p>
          <br/>
          <p v-if="vidObj.playlist.length > 1">Progression journey:</p>
          <NuxtLink v-if="selected_vid.travel_page_url" :to="selected_vid.travel_page_url" class="a-custom-button white--text text-decoration-none">
            [ TRAVEL STORY ]
          </NuxtLink>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'YouTubeVideoComponent',
  props: {
    vidObj: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    clicked: false,
    selected_vid: {},
  }),
  mounted() {
    this.selected_vid = this.vidObj.playlist[0]
  },
}
</script>
