module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'practice-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt 연습' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty',
        // 'pg-hstore': 'empty',
      }
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  serverMiddleware: [
    // Will register file from project api directory to handle /api/* requires
    { path: '/api/test', handler: '~/api/index.js' },
    // We can create custom instances too
  ]
}

