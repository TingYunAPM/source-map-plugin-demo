const TingyunSourceMapWebpackPlugin = require('@tingyun-common/source-map-webpack-plugin');

module.exports = {
    webpack: (config) => {
        if (process.env.NODE_ENV === "production") {
            if (!config.plugins) {
                config.plugins = [];
            }
            // 生产环境加入webpack插件
            config.plugins.push(
                new TingyunSourceMapWebpackPlugin({
                    include: "./build"
                })
            )
        }
        return config;
    },
  }