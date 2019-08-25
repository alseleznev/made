const path = require('path');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const {
    NODE_ENV,
} = process.env;
const IS_DEVELOPMENT = NODE_ENV !== 'production';

module.exports = {
    entry: {
        client: './app.js',
    },
    mode: NODE_ENV,
    output: {
        path: path.join(__dirname, 'docs'),
        publicPath: '',
    },
    devtool: IS_DEVELOPMENT ? 'eval' : '',
    optimization: {
        noEmitOnErrors: false,
        minimizer: [
            !IS_DEVELOPMENT && new UglifyJsPlugin({
                cache: true,
                extractComments: true,
            }),
        ].filter(Boolean),
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        hot: false,
        inline: false,
        compress: false,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html',
            minify: true,
            hash: !IS_DEVELOPMENT,
        }),
        !IS_DEVELOPMENT && new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css|html)$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        !IS_DEVELOPMENT && new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.(js|css|html)$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: !IS_DEVELOPMENT,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            hash: 'sha512',
                            digest: 'hex',
                            name: 'i/[hash].[ext]',
                            limit: 1500,
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            pngquant: {
                                speed: IS_DEVELOPMENT ? 10 : 3,
                                optimizationLevel: IS_DEVELOPMENT ? 0 : 7,
                                verbose: false,
                            },
                            // https://github.com/svg/svgo#what-it-can-do
                            svgo: {
                                cleanupAttrs: true,
                                removeDoctype: true,
                                removeViewBox: true,
                                removeComments: true,
                                removeMetadata: true,
                                removeDesc: true,
                                removeEmptyAttrs: true,
                                removeEmptyText: true,
                                cleanupIDs: true,
                                removeUnusedNS: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            hash: 'sha512',
                            digest: 'hex',
                            name: 'fonts/[name].[ext]',
                        }
                    },
                ],
            },
        ]
    },
};
