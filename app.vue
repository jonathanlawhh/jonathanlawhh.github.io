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
            :navigation-routes="navigation_routes"
        ></Header>
      </v-col>
    </v-row>

    <v-row class="sticky-header mb-8" style="top: 56px">
      <v-col cols="4" class="hr-line ma-0 pt-0 pb-0"></v-col>
    </v-row>

    <NuxtPage style="min-height: 70vh" page-key="static"/>


    <Footer></Footer>
  </v-container>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Jonathan Law` : 'Jonathan Law';
  },
  script: [
    {
      hid: "ld-json",
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "dateCreated": "2024-01-27T00:00:00-05:00",
        "mainEntity": {
          "@type": "Person",
          "name": "Jonathan Law Hui Hao",
          "alternateName": ["Jonathan Law", "jonathanlawhh"],
          "image": "https://jonathanlawhh.com/img/me.webp",
          "sameAs": [
            "https://jonathanlawhh.medium.com/",
            "https://www.linkedin.com/in/jonathanlawhh/",
            "https://dev.to/jonathanlawhh",
          ]
        },
        "name": "Jonathan Law Hui Hao",
        "alternateName": "Jonathan Law",
        "url": "https://jonathanlawhh.com/",
      })
    }
  ]
})

let r = useRoute()
useSeoMeta({
  title: r.name,
  ogTitle: `${r.name} | Jonathan Law`,
  description: r.meta.description,
  ogDescription: r.meta.description,
  ogImage: r.meta.image ?? 'https://jonathanlawhh.com/img/me.webp',
  twitterCard: 'summary_large_image',
})
</script>

<script>
export default {
  name: 'App',
  data: () => ({
    navigation_routes: [
      {title: 'HOME', route: '/'},
      {title: 'MY BACKGROUND', route: '/background/'},
      {title: 'WORKS', route: '/works/'},
      {title: 'TECH BLOG', href: 'https://jonathanlawhh.medium.com/'},
    ],
  }),
  watch: {
    $route(to) {
      this.page_name = to.name
      useSeoMeta({
        title: to.name,
        ogTitle: `${to.name} | Jonathan Law`,
        description: to.meta.description,
        ogDescription: to.meta.description,
        ogImage: to.meta.image ?? 'https://jonathanlawhh.com/img/me.webp',
        twitterCard: 'summary_large_image',
      })
    },
  }
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

.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.8rem);
}
</style>
