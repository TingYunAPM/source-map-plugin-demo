const TingyunSourceMapWebpackPlugin = require('@tingyun-common/source-map-webpack-plugin');

module.exports = (config, options) => {
    if (config.mode === "production") {
        if (!config.plugins) {
            config.plugins = [];
        }
        config.plugins.push(
            new TingyunSourceMapWebpackPlugin({
              include: "./dist"
            })
        )
    }

    return config;
};