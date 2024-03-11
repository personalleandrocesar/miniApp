// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/api/**': { cors: true, headers: { 'access-control-allow-methods': 'GET, POST' } },
    'http://191.101.70.209:4000/**': { cors: true, headers: { 'access-control-allow-methods': 'GET, POST' } },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      link: [
     ],
      meta: [
        { name: 'theme-color', content: '#34d399' },
        { name: 'theme-color', content: '#34d399' },
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    },
  },
  css: [
    '~/assets/main.css'
  ],
  modules: [
  '@nuxt/content',
  'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
