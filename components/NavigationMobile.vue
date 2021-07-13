<template>
  <div class="text-center">
    <v-bottom-sheet v-model="local_sheet">
      <v-sheet
        class="text-center"
        style="height: 100vh; border-top: 2px white solid"
        align="center"
      >
        <v-row>
          <v-col cols="12" class="mt-16"></v-col>
          <v-col cols="12"><h3>NAVIGATION</h3></v-col>
          <v-col v-for="(nr, i) in navigationRoutes" :key="i" cols="12">
            <v-btn
              :ripple="false"
              text
              :to="nr.route"
              class="hover-fade-in"
              @click="closeSheet(0)"
              v-text="nr.title"
            ></v-btn>
          </v-col>

          <v-col cols="12" class="mt-12">
            <v-btn icon outlined color="red" x-large @click="closeSheet(250)"
              ><v-icon small class="btn_close">close</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: 'NavigationMobile',
  props: {
    navigationRoutes: {
      type: Array,
      default: null,
    },
    sheet: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    local_sheet: {
      get() {
        return this.sheet
      },
      set(value) {
        this.$emit('toggle_sheet', value)
      },
    },
  },
  methods: {
    closeSheet(timeout) {
      setTimeout(() => {
        this.$emit('toggle_sheet', !this.local_sheet)
      }, timeout)
    },
  },
}
</script>
