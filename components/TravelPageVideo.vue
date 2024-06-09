<template>
  <v-row style="position: relative">
    <v-btn variant="outlined" @click="$router.go(-1)" :exact="true" size="large" class="btn-return" rounded="0"
           style="position: absolute; top: 0; left: 0; z-index: 2;background-image: linear-gradient(to right, black, rgba(0,0,0,0))">
      <v-icon size="large" icon="mdi-chevron-left"></v-icon>
      GO BACK
    </v-btn>

    <v-col cols="12" class="travel-iframe-parent">
      <iframe class="travel-iframe"
              :src="'https://www.youtube-nocookie.com/embed/' + youtubeId + '?modestbranding=1&autoplay=1&showinfo=0&controls=0&loop=1&mute=1&playlist=' + youtubeId"
              frameborder="0"
              allow="autoplay;accelerometer;encrypted-media;"
              allowfullscreen></iframe>

      <v-row style="margin-top: 15%">
        <v-col cols="6" class="text-right" style="background: rgba(0,0,0, 0.6)">
          <h3 class="travel-header-main">{{ title }}</h3>
        </v-col>
        <v-col cols="6" class="text-left" style="background: rgba(0,0,0, 0.4)">
          <p class="travel-header-sub">{{ subtitle }}</p>
          <p class="travel-header-sub">{{ travel_date }}</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TravelPageVideo",
  props: {
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
    travel_date: {
      type: String,
      default: null,
    },
    youtubeId: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>
.travel-iframe {
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
  top: 50%;
  width: 177.77777778vh;
  box-sizing: border-box;
  height: 80vw;
  left: 50%;
  position: absolute;
  z-index: -1;
  filter: blur(1px);
}

.travel-iframe-parent {
  position: relative;
  overflow: hidden;
  height: 54vh
}

.travel-iframe-parent::after {
  position: absolute;
  height: 100%;
  width: 75%;
  right: 0;
  bottom: 0;
  content: ' ';
  z-index: -1;
  border-bottom: white 4px solid;
}

.travel-header-main {
  font-size: 3.0rem;
}

.travel-header-sub {
  font-size: 1.6rem;
}

@media only screen and (max-width: 800px) {
  .travel-iframe {
    height: 200vw;
  }

  .travel-header-main {
    font-size: 1.8rem;
  }

  .travel-header-sub {
    font-size: 1.1rem;
  }

}

.btn-return:hover {
  background: white;
  color: white;
}
</style>