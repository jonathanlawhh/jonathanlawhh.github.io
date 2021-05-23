<template>
  <div>
    <v-row style="position: sticky; top: 72px; z-index: 6">
      <v-col cols="12">
        <v-btn outlined text to="/works" exact large
          ><v-icon>chevron_left</v-icon>BACK TO WORKS</v-btn
        >
      </v-col>
    </v-row>

    <v-row
      v-if="!activated"
      style="height: 70vh"
      align="center"
      class="text-center"
    >
      <v-col cols="12">
        <h3 class="display-3 font-weight-bold">{{ title }}</h3>
        <p class="font-weight-thin">
          {{ quotes[Math.floor(Math.random() * 5)] }}
        </p>
        <v-btn x-large icon class="ma-16" @click="scroll_to_content">
          <v-icon class="ic_scroll_down">keyboard_arrow_down</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'LandingComponent',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      quotes: [
        'scroll down to see stuffs',
        'going down wont let you down',
        'something is lurking below',
        'dive down',
        'down is up',
      ],
      activated: false,
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    setTimeout(() => {
      document.getElementById('content') !== null && this.scroll_to_content()
    }, 2000)

    setTimeout(() => {
      this.activated = true
    }, 3000)
  },
  methods: {
    scroll_to_content() {
      this.$vuetify.goTo('#content', {
        offset: -120,
        easing: 'easeInOutCubic',
      })
    },
  },
}
</script>

<style scoped>
.ic_scroll_down {
  animation: pulse 2s ease-out;
  animation-iteration-count: infinite;
}

.ic_scroll_down:hover {
  transform: rotate(360deg);
}

@keyframes pulse {
  0% {
    font-size: 40px;
  }
  10% {
    font-size: 56px;
  }
  20% {
    font-size: 40px;
  }
  100% {
    font-size: 40px;
  }
}
</style>
