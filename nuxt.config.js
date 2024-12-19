export default {
  telemetry: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
     host: '0.0.0.0', // default: localhost
     port: 3000,
  },
  ssr: true,
  mode: 'universal',
  router: {
    middleware: ['redirects'],
  },
  head: {
    titleTemplate: 'MWek',
    title: 'MWek',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://use.typekit.net/vls5puz.css" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Orbitron&display=swap" },
    ],
    script: [
      {
        hid: 'gtm-script',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-GWF9EE9GP9',
        async: true
      },
      {
        hid: 'gtm-script2',
        innerHTML: `
        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-GWF9EE9GP9');
        `
      },
      {
        hid: 'g-analytics',
        type: 'text/javascript',
        src: 'https://www.google-analytics.com/analytics.js',
        async: true,
      }
        // {
        //     type: 'text/javascript',
        //     src: 'js/Jquery.js',
        //     body: false,
        // },
        // {
        //   src: "https://cdn-eu.pagesense.io/js/onqor/23fd815eda9a4235aa61eae9b9b1f975.js",
        // }
        // {
        //     type: 'text/javascript',
        //     src: 'js/gsap/minified/gsap.min.js',
        //     body: true
        // },
        // {
        //     type: 'text/javascript',
        //     src: 'js/gsap/minified/Draggable.min.js',
        //     body: true
        // },
    ],
  },
  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/gsap", ssr: false},
    { src: '~/plugins/zoho-pagesense.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // 'nuxt-gsap-module',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    require('./sitemap.js'),
    ['nuxt-mail', {
      message: {
        to: 'talk2us@mwek.co.uk',
      },
      smtp: {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: 'phil.longhurst@onqor.co.uk',
          pass: 'gppddnykogzcdbya'
        },
      },
    }],
  ],
  // or use the top-level option:
  mail: {
    message: {
      to: 'foo@bar.de',
    },
    smtp: {
      host: "smtp.example.com",
      port: 587,
    },
  },
  // router: {
  //   middleware: ['redirects', 'zohoPageSenseTrigger']
  // },
  build: {
    transpile: ['gsap', 'three'],
    // standalone: true
  }
}