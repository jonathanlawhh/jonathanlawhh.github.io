import {createVuetify, ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin(nuxtApp => {
    const t: ThemeDefinition = {
        dark: true,
        colors: {
            primary: '#ff7582',
            secondary: '#00a56a',
        },
    }

    const vuetify = createVuetify({
        ssr: false,
        components,
        directives,
        theme: {
            defaultTheme: 'dark',
            themes: {t}
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
