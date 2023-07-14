const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminPngquant = require('imagemin-pngquant');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Отключаем сжатие для development-сборки
            if (process.env.NODE_ENV === 'production') {
                // Используем TerserPlugin для сжатия JavaScript-файлов
                webpackConfig.optimization.minimizer.push(
                    new TerserPlugin({
                        terserOptions: {
                        compress: {
                            drop_console: true, // Удалить console.log из кода
                        },
                        },
                    })
                );
                // Используем ImageminPlugin для сжатия изображений
                webpackConfig.plugins.push(
                    new ImageminPlugin({
                        plugins: [
                            imageminPngquant({
                                quality: [0.6, 0.8],
                            }),
                        ],
                        deleteOriginalAssets: true,
                        filename: '[path][name].[ext]',
                        publicPath: '/your-public-path/',
                        exclude: /\.(jsx?|tsx?|json|html|xml|css|scss)$/i,
                        test: /\.(jpe?g|png|gif|svg)$/i,
                        minify: (data, options) => {
                            const { path } = options;
                            if (/\.png$/i.test(path)) {
                                return imageminPngquant()(data);
                            }
                            return data;
                        },
                    })
                );
            }
            return webpackConfig;
        },
    },
};