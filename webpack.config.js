var webpack = require('webpack')

var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')

var ROOT_PATH = path.resolve(__dirname)

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || false))
});
module.exports = {
    devtool: 'source-map',
    entry: [
        path.resolve(ROOT_PATH, 'app/src/index')
    ],
    module: {
        preloaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: ['tslint']
            }
        ],
        loaders: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot','ts']
        },
            {
                test: /\.s?css$/,
                loaders: ['style', 'css', 'sass']
            }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx','.ts', '.tsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'app/build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, 'app/build'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Listlogs'
        }),
        devFlagPlugin
    ]
}
