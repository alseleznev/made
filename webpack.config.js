const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {
    NODE_ENV,
} = process.env;
const IS_DEVELOPMENT = NODE_ENV !== 'production';
const ROOT = path.join(__dirname, 'dist');

module.exports = {
    entry: {
        client: './app.js',
    },
    mode: NODE_ENV,
    output: {
        path: ROOT,
        publicPath: '',
    },
    devtool: 'source-map',
    optimization: {
        noEmitOnErrors: false,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            inject: 'head',
            template: './src/index.html',
            minify: true,
        }),
    ],
    devServer: {
        contentBase: ROOT,
        compress: true,
        port: 3000,
    },
    module: {
        rules: [
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
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },

};
