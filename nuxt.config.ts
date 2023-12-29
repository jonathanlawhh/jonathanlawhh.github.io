// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            ],
            htmlAttrs: {
                lang: 'en'
            },
        },
    },
    css: [
        '@/assets/main.css',
        '@/assets/override.scss'
    ],
    build: {
        transpile: ['vuetify'],
    },
    modules: ['nuxt-simple-sitemap'],
    site: {
        url: 'https://jonathanlawhh.com/',
        name: 'Jonathan Law Hui Hao',
        cacheTtl: 1000 * 60 * 60 * 24 * 30,
        trailingSlash: true,
    },
});
