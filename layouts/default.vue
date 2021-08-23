<template>
  <v-app>
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
            @toggle_sheet="sheet = !sheet"
          ></Header>
        </v-col>
      </v-row>

      <v-row class="sticky-header mb-8" style="top: 56px">
        <v-col cols="4" class="hr-line ma-0 pt-0 pb-0"></v-col>
      </v-row>

      <Nuxt keep-alive />

      <Footer :last-update="last_update"></Footer>
    </v-container>

    <NavigationMobile
      :sheet="sheet"
      :navigation-routes="navigation_routes"
      @toggle_sheet="sheet = !sheet"
    ></NavigationMobile>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    Header: () => import('@/components/Header'),
    NavigationMobile: () => import('@/components/NavigationMobile'),
    Footer: () => import('@/components/Footer'),
  },
  data: () => ({
    sheet: false,
    pages: { '/': 0, '/background': 1, '/works': 2 },
    navigation_routes: [
      { title: 'HOME', route: '/' },
      { title: 'MY BACKGROUND', route: '/background/' },
      { title: 'WORKS', route: '/works/' },
      { title: 'TECH BLOG', href: 'https://jonathanlawhh.medium.com/' },
    ],
    last_update: '',
    seo: {
      title: '',
      description: '',
      image: '',
    },
    canonical: '/',
  }),
  async fetch() {
    this.seo_update()

    await fetch(
      'https://api.github.com/repos/jonathanlawhh/jonathanlawhh.github.io/commits/gh-pages'
    )
      .then((res) => res.json())
      .then((r) => {
        if (r.commit !== undefined) {
          const d = new Date(r.commit.author.date).toDateString().split(' ')
          this.last_update = `${d[1]} ${d[3]}`
        } else {
          this.last_update = '|| Github API rate limit hit :('
        }
      })
  },
  head() {
    return {
      title: this.seo.title,
      description: this.seo.description,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://jonathanlawhh.com' + this.canonical,
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seo.description,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.seo.title + ' | Jonathan Law',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.seo.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.seo.image || 'https://jonathanlawhh.com/img/me.webp',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.seo.title + ' | Jonathan Law',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.seo.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.seo.image || 'https://jonathanlawhh.com/img/me.webp',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jonathanlawhh.com' + this.canonical,
        },
      ],
    }
  },
  created() {
    this.seo_update()
  },
  methods: {
    seo_update() {
      this.$nuxt.$on('seo_update', (s) => {
        this.seo = s
        this.canonical = this.$nuxt.$route.path
      })
    },
  },
}
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
