module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'h5-nuxt-mint-ui',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    //抽出"css"中设置的第三方样式
    extractCSS: true,
    //修改打包路径
    publicPath: '/site/'
  },
  css: [
    'mint-ui/lib/style.css',
    '~/static/fonts/iconfont.css',
    '~/assets/scss/style.scss'
  ],
  loading: '~/components/loading.vue'
}
