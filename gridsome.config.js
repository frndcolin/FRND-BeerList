const path = require('path')

function addStyleResource(rule) {
  rule.use(['style-resource', 'css-loader', 'stylus-loader'])
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styl/global/*.styl')
      ]
    })
}

module.exports = {
  siteName: 'Beer List',
  siteDescription: 'A simple app to track the beers we have tried.',
  siteUrl: 'https://gridsome-starter-bootstrap.loke.dev',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'beers/**/*.md',
        typeName: 'BeerPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    },
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: {},
        pugLoader: {}
      }
    }
  ],
  css: {
    loaderOptions: {
      stylus: {}
    }
  },
  chainWebpack: config => {
    //  allow use of global variables, fx, and mixins without importing in each component
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  }
}
