// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/modals/'
        //? ''    //для локального просмотра
        : '/',
    assetsDir: 'assets',
    productionSourceMap: false
    
  }
  