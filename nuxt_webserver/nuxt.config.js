// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/scss/main.scss', // Path to your main Sass file
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    loaders: {
      scss: {
        implementation: require('sass')
      }
    }
  },
  modules: [
    '@nuxtjs/device',
    '@nuxt/image'
  ]
})
