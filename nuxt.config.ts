// https://nuxt.com/docs/api/configuration/nuxt-config

export const routes = [
    {
        name: 'Something About Me',
        path: '/',
        meta: {description: 'I am Jonathan Law Hui Hao, a Business Intelligence Analyst in Malaysia. I combine logistics and process improvement with technology.'}
    },
    {
        name: 'Background',
        path: '/background',
        meta: {description: 'Discover my career journey from APU to AirAsia and the diverse experiences that have shaped my skills and perspective. From education to work history, explore my background and accomplishments in the field of IT. Visit my website now.'}
    },
    {
        name: 'Works',
        path: '/works',
        meta: {description: 'My portfolio of projects that I worked on'}
    },
    {
        name: 'Works',
        path: '/works/works',
        meta: {description: 'My portfolio of projects that I worked on'}
    },
    {
        name: 'Works/AI, ML, RPA',
        path: '/works/ai',
        meta: {
            description: 'Discover my innovative projects utilizing AI and RPA technology. From machine learning models to computer vision applications, learn how I have applied cutting-edge AI solutions to tackle real-world problems and create meaningful impact.',
            image: 'https://jonathanlawhh.com/img/og/logo_w_AI.png'
        }
    },
    {
        name: 'Works/Graphics',
        path: '/works/graphics',
        meta: {
            description: 'My portfolio of short videos uploaded on YouTube and 3DS Max renders',
            image: 'https://jonathanlawhh.com/img/og/logo_w_graphics.png'
        }
    },
    {
        name: 'Works/NFT art',
        path: '/works/nft',
        meta: {
            description: 'Step into the cutting-edge world of NFT art and explore my portfolio of pieces created using YouTube captions',
            image: 'https://jonathanlawhh.com/img/og/work_nft_cover.png'
        }
    },
    {
        name: 'Works/Websites',
        path: '/works/websites',
        meta: {
            description: 'Take a look at my portfolio of diverse websites, including a sitting posture identification website',
            image: 'https://jonathanlawhh.com/img/og/logo_w_websites.png'
        }
    },
    {
        name: 'Works/Data',
        path: '/works/data',
        meta: {description: 'Explore my portfolio of innovative projects created using Google Data Studio. From data visualization to interactive dashboards, discover how I use the power of Google Data Studio to turn data into actionable insights and drive business results'}
    },
    {
        name: 'Works/Data Tinder',
        path: '/works/data/tinder',
        meta: {
            description: 'Get a glimpse into the world of online dating with my interactive dashboard showcasing Tinder users and their demographics in my area, created using Google Data Studio. From age to location, explore the insights and trends that shape the online dating scene',
            image: 'https://jonathanlawhh.com/img/og/work_data_tinder_cover.png'
        }
    },
]

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
        pageTransition: {name: 'page', mode: 'out-in'}
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
    hooks: {
        // Mini hack just to give each page a nice name and meta image
        'pages:extend': (pages: any[]) => {
            pages.map((page) => {
                for (let r = 0; r < routes.length; r++) {
                    if (routes[r].path === page.path) {
                        Object.assign(page, {name: routes[r].name, meta: routes[r].meta})
                    }

                    if (page.children.length > 0) {
                        for (let cidx = 0; cidx < page.children.length; cidx++) {
                            let childRoute = page.children[cidx]
                            if (childRoute.path === routes[r].path.substring(page.path.length + 1)) {
                                Object.assign(childRoute, {name: routes[r].name, meta: routes[r].meta})
                                break
                            }
                        }
                    }
                }
            })
        }
    },
});
