// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["nuxt-headlessui", "nuxt-gtag","@pinia/nuxt",],
   carousel: {
    prefix: 'MyPrefix'
  },
  build: {
    transpile: ['sample-library']
  },
  gtag : {
    id: "G-LMPEGPYNK6",
  },
  devtools: { enabled: true },
  css: ["~/assets/css/styles.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    baseURL: '/',
    buildAssetsDir: '/cursos/_nuxt/',
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  headlessui: {
    prefix: "Headless",
  },
    runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_SITE_URL,
      mpPublicKey: process.env.MP_PUBLIC_KEY,
      bookmark: process.env.NUXT_PUBLIC_BOOKMARK,
      apiBase: 'http://aromatika.ocamtech.com/api-v2',
      gtagId: process.env.GTAG_KEY,
      tawkId: process.env.TAWK_ID,
      tawkWigetId: process.env.TAWK_WIGET_ID,
      GOOGLE_MAPS_KEY_FRONTEND:'AIzaSyBasOqHB9foQrF-cO7IlJdQz2ObnnrvKyk',
      BACKEND_URL : ''//NUXT_PUBLIC_BACKEND_URL
    }
  },
});
