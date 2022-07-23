import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: './src',
  ssr: false,
  components: {
    global: true,
    dirs: ['~/components', '~/components/panels']
  }
})
