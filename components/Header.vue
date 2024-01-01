<template>
  <v-toolbar :elevation="0" style="background-color: #121212" class="ps-0">
    <v-app-bar-nav-icon class="hidden-md-and-up" aria-label="menu button" @click="toggle_sheet = true">

    </v-app-bar-nav-icon>
    <v-icon size="x-small" class="hidden-sm-and-down mr-4" icon="mdi-circle"></v-icon>
    <v-toolbar-title style="min-width: 320px">{{ page_name }}</v-toolbar-title>

    <v-spacer></v-spacer>
    <nav style="display: inline; width: 70%; height: 100%" class="hidden-sm-and-down">
      <v-toolbar-items v-for="(nr, i) in navigationRoutes.slice().reverse()" :key="i" style="float: right">
        <v-divider inset vertical></v-divider>
        <v-btn v-if="nr.route" class="hover-fade-in" variant="text" :to="nr.route" :exact="false">
          {{ nr.title }}
        </v-btn>
        <v-btn v-else-if="nr.href" target="_blank" class="hover-fade-in" variant="text" :href="nr.href">
          {{ nr.title }}
        </v-btn>
      </v-toolbar-items>
    </nav>
  </v-toolbar>
  <v-dialog
      v-model="toggle_sheet"
      width="auto"
      transition="dialog-bottom-transition"
  >
    <v-card height="70vh" width="90vw" class="mobile-nav-card">
      <v-card-text>
        <v-row class="text-center">
          <nav style="width: 100%" class="mt-16">
            <v-col cols="12">
              <p class="font-weight-bold mb-8">NAVIGATION</p>
            </v-col>
            <v-col cols="12" v-for="(nr, i) in navigationRoutes" :key="i">
              <v-btn v-if="nr.route" class="hover-fade-in" rounded="0" size="large" variant="text" :to="nr.route"
                     @click="closeSheet(500)">{{
                  nr.title
                }}
              </v-btn>

              <v-btn v-else-if="nr.href" target="_blank" :href="nr.href" class="hover-fade-in" rounded="0"
                     size="large"
                     variant="text" :to="nr.route" @click="closeSheet(500)">
                {{ nr.title }}
              </v-btn>
            </v-col>
          </nav>
          <v-col cols="12" class="mt-12">
            <v-btn icon="true" variant="outlined" color="red" x-large @click="closeSheet(500)" class="rotate-close">
              <v-icon small icon="mdi-window-close"></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
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
    }
  },
  data() {
    return {
      toggle_sheet: false,
      page_name: ''
    }
  },
  methods: {
    closeSheet(timeout) {
      setTimeout(() => {
        this.toggle_sheet = false
      }, timeout)
    },
  },
  created() {
    this.page_name = this.$route.name
  },
  watch: {
    $route(to) {
      this.page_name = to.name
    },
  }
}
</script>

<style>
.v-btn__overlay {
  background-color: transparent !important;
}
</style>

<style scoped>
.rotate-close:active {
  transform: rotate(180deg);
}

.mobile-nav-card {
  border: #d4d4d4 solid 1px;
  overflow: hidden;
}

.mobile-nav-card:before {
  border: #d4d4d4 solid 1px;
  height: 70%;
  width: 120%;
  overflow: hidden;
  top: 125px;
  left: 4px;
  position: absolute;
  border-radius: 64px;
  content: '';
  transition: all 0.15s ease-in;
  z-index: -10;
  transform: rotate(-4deg);
}
</style>
