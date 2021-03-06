const { defineConfig } = require('@vue/cli-service');
const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/main.styl'),
      ],
    });
}

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResource(config.module.rule('stylus').oneOf(type)));
  },
  pwa: {
    name: 'Star Wars Vue',
    themeColor: '#272727',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
});
