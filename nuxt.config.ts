// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-primevue", "@nuxtjs/tailwindcss", '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  primevue: {
    options: {
      unstyled: true
    },
    importPT: { as: 'Lara', from: '~/presets/lara' }    //import and apply preset  
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
});