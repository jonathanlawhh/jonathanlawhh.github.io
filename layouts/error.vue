<template>
  <v-row>
    <v-col cols="12">
      <v-btn
        outlined
        text
        large
        style="font-size: 110%"
        color="orange"
        @click="goBack"
        ><v-icon>chevron_left</v-icon>Go Back</v-btn
      >
    </v-col>

    <v-col cols="12">
      <h3>// Look at where we ended up at.</h3>
      <h1>
        <span class="txt-404">4</span>
        <span class="txt-404">0</span>
        <span class="txt-404">4</span>
      </h1>
      <br />
      <h3 class="font-weight-light">
        You know what that means, now
        <span class="font-italic font-weight-bold red--text">bugger</span> off
      </h3>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'empty',
  data: () => ({
    seo: {
      title: '404 We Are Lost',
      description: 'This page does not exists :(',
    },
  }),
  created() {
    this.$nuxt.$emit('seo_update', this.seo)
  },
  mounted() {
    const t = document.querySelectorAll('.txt-404')
    setInterval(() => {
      for (let i = 0; i < t.length; i++) {
        t[i].style.animationDelay = Math.floor(Math.random() * 5) + 1 + 's'
      }
    }, 1000)
  },
  methods: {
    goBack() {
      history.length > 2 ? history.back() : (window.location.href = '/')
    },
  },
}
</script>

<style scoped>
.txt-404 {
  color: #ffffff;
  animation: flicker 2s infinite;
  font-size: 500%;
}

@keyframes flicker {
  from {
    color: #ffffff;
  }
  to {
    color: #121212;
  }
}
</style>
