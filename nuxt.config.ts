// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/scripts',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
    storage: 'sessionStorage',
  },
  image: {
    domains: ['spectorandco.com'],
  },
  fonts: {
    families: [
      {
        name: 'CorporateS-Regular',
        provider: 'local',
        src: '/fonts/Corporate_S_Regular.otf',
        weight: '400',
        style: 'normal',
      },
      {
        name: 'CorporateS-Medium',
        provider: 'local',
        src: '/fonts/Corporate_S_Medium.otf',
        weight: '500',
        style: 'normal',
      },
      {
        name: 'CorporateS-Demi',
        provider: 'local',
        src: '/fonts/Corporate_S_Demi.otf',
        weight: '600',
        style: 'normal',
      },
      {
        name: 'CorporateS-Bold',
        provider: 'local',
        src: '/fonts/Corporate_S_Bold.otf',
        weight: '700',
        style: 'normal',
      },
      {
        name: 'CorporateS-ExtraBold',
        provider: 'local',
        src: '/fonts/Corporate_S_ExtraBold.otf',
        weight: '800',
        style: 'normal',
      },
    ],
  },
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-CA', name: 'Canada-EN', file: 'en.json' },
      { code: 'fr', language: 'fr-CA', name: 'Canada-FR', file: 'fr.json' },
      { code: 'us', language: 'en-US', name: 'United States', file: 'us.json' },
    ],
  },
  runtimeConfig: {
    apiFeatured: '', 
    public: {
      apiDecdout: '', 
      apiStoryboard: '', 
    },
  },
});
