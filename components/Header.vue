<template>
  <v-toolbar elevation="0" style="background-color: #121212" class="ps-0">
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      aria-label="menu button"
      @click="toggle_sheet"
    ></v-app-bar-nav-icon>
    <v-icon x-small class="hidden-sm-and-down mr-4">circle</v-icon>
    <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items
      v-for="(nr, i) in navigationRoutes"
      :key="i"
      class="hidden-sm-and-down"
    >
      <v-divider v-if="i !== 0" inset vertical></v-divider>
      <v-btn v-if="nr.route" class="hover-fade-in" text :to="nr.route">{{
        nr.title
      }}</v-btn>
      <v-btn
        v-else-if="nr.href"
        target="_blank"
        class="hover-fade-in"
        text
        :href="nr.href"
        >{{ nr.title }}</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  props: {
    navigationRoutes: {
      type: Array,
      default: null,
    },
    sheet: {
      type: Boolean,
      default: false,
    },
    pageTitle: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggle_sheet() {
      this.$emit('toggle_sheet')
    },
  },
}
</script>
