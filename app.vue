<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Jonathan Law</h1>
      </v-col>
    </v-row>

    <v-row class="sticky-header" style="top: 0">
      <v-col cols="12" class="hr-line pa-0"></v-col>
    </v-row>

    <v-row class="sticky-header" style="top: 1px">
      <v-col cols="12" class="pa-0" style="height: 100%">
        <Header
            :sheet="sheet"
            :page-title="seo.title"
            :navigation-routes="navigation_routes"
        ></Header>
      </v-col>
    </v-row>

    <v-row class="sticky-header mb-8" style="top: 56px">
      <v-col cols="4" class="hr-line ma-0 pt-0 pb-0"></v-col>
    </v-row>

    <NuxtPage style="min-height: 70vh" @updatePageTitle="updatePageTitle" page-key="static"/>


    <Footer></Footer>
  </v-container>
</template>


<script>
export default {
  name: 'App',
  data: () => ({
    sheet: false,
    pages: {'/': 0, '/background': 1, '/works': 2},
    navigation_routes: [
      {title: 'HOME', route: '/'},
      {title: 'MY BACKGROUND', route: '/background/'},
      {title: 'WORKS', route: '/works/'},
      {title: 'TECH BLOG', href: 'https://jonathanlawhh.medium.com/'},
    ],
    seo: {
      title: '',
      description: '',
      image: '',
    },
    canonical: '/',
  }),
  methods: {
    updatePageTitle(e) {
      this.seo.title = e
    }
  },
}

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Jonathan Law` : 'Jonathan Law';
  }
})
</script>

<style>
.sticky-header {
  position: sticky;
  z-index: 10;
}


.hr-line {
  border-bottom: aliceblue 1px solid;
  width: 100%;
}

.btn_close:hover {
  transform: rotate(180deg);
}

.v-btn--active::before {
  opacity: 0 !important;
}

.v-btn--active::after {
  content: ' ';
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  border-bottom: white solid 1px;
  border-radius: 0 !important;
  animation: btnSelected 0.25s ease-out;
}

@keyframes btnSelected {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

.v-btn::before {
  background-color: transparent;
}
</style>
