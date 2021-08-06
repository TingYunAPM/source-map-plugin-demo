const TingyunSourceMapWebpackPlugin = require('@tingyun-common/source-map-webpack-plugin');

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 生产环境加入webpack插件
      config.plugins.push(
          new TingyunSourceMapWebpackPlugin({
            include: "./dist",
          })
      )
    }
  },
};