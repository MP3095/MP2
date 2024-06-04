// vue.config.js

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('js')
      .test(/\.js$/)
      .exclude
      .add(filepath => {
        // Aquí puedes agregar cualquier exclusión adicional si es necesario
        return /node_modules\/(?!chart.js)/.test(filepath);
      })
      .end()
      .use('babel-loader')
      .loader('babel-loader');
  }
};