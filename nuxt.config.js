const SITE_URL = 'https://jonathanlawhh.com'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: '%s | Jonathan Law',
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', hid: 'author', content: 'Jonathan Law Hui Hao' },
      {
        name: 'keywords',
        hid: 'keywords',
        content:
          'jonathan law, jonathan law hui hao, jonathanlawhh, jonathan, jonathanlaw, jonathan malaysia, portfolio, developer, website',
      },
      { name: 'twitter:site', hid: 'twitter:site', content: '@jonathanlawhh' },
      { name: 'twitter:card', hid: 'twitter:card', content: 'summary' },
      { property: 'og:type', hid: 'og:type', content: 'website' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '196x196',
        href: SITE_URL + '/favicon-196.png',
      },
      {
        rel: 'shortcut icon',
        type: 'image/png',
        sizes: '196x196',
        href: SITE_URL + '/favicon-196.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '64x64',
        href: SITE_URL + '/favicon-64.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '48x48',
        href: SITE_URL + '/favicon-48.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16 32x32',
        href: SITE_URL + '/favicon-32.png',
      },
      { hid: 'canonical', rel: 'canonical', href: SITE_URL },
    ],
    script: [
      {
        hid: 'ldjson',
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'jonathan law',
          alternateName: 'jonathan law hui hao',
          url: SITE_URL,
          logo: SITE_URL + '/img/me.webp',
          sameAs: [
            'https://www.facebook.com/jonathanlawhh/',
            'https://jonathanlawhh.medium.com/',
            'https://twitter.com/jonathanlawhh',
            'https://my.linkedin.com/in/jonathanlawhh',
            'https://dev.to/jonathanlawhh',
          ],
        },
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: SITE_URL,
    defaults: {
      changefreq: 'monthly',
      lastmod: new Date(),
    },
    trailingSlash: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: 'en',
  //   },
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
    },
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: 'md',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {},
}
