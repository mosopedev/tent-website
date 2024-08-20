// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ["~/assets/global.css"],
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'http://localhost:3000', 
    gzip: true,
    routes: [
      '/',
      '/about',
      '/privacy',
    ]
  }
})
