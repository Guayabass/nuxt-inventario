// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@primevue/nuxt-module",
  ],
  primevue: {
      options: {
        ripple: true,
        inputVariant: 'filled',
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'system',
                cssLayer: {
                  name: 'primevue',
                  order: 'tailwind-base, primevue, tailwind-utilities'
              }
            }
        }
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
});
