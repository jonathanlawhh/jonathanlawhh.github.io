<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-btn outlined text to="/works/" exact large>
          <v-icon>chevron_left</v-icon>
          BACK TO WORKS
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mt-8 mb-8 text-center"
           :style="'background: url(' + backgroundImage + ') no-repeat center; background-size: cover;'"
           style="min-height: 320px; opacity: 0.25; filter: blur(1px)">
    </v-row>

    <v-row style="position: relative">
      <v-col style="position: absolute; top: -240px;" class="text-center">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
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
    description: {
      type: String,
      default: '',
      required: true
    },
    backgroundImage: {
      type: String,
      default: '',
      required: true
    }
  },
}
</script>
