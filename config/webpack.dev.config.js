var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

module.exports = {
    devtool: 'eval',
    // This will be our app's entry point ( webpack will look for it in the src directory)
    entry: [
        // Add the react hot loader entry point - in reality, you only want this in your dev Webpack config
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'index.tsx'
    ],
    // Output the bundled JS to dist/app.js


    output: {
        filename: 'app.js',
        publicPath: '/dist/',
        path: path.resolve('dist')
    },

    resolve: {
        // Look for the modules in .ts(x) files first, then .js(x)
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // Add 'src' to our moduleDirectories, as all our app code will live in there, so webpack should should look in there
        modules: ['src', 'node_modules'],
    },
    module: {
        loaders: [
            // .ts(x) files should first pass through the Typescript loader, and then through babel loader
            { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'] },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            },
            // "postcss" loader applies autoprefixer to our CSS.
            // "css" loader resolves paths in CSS and adds assets as dependencies.
            // "style" loader turns CSS into JS modules that inject <style> tags.
            {
                test: /\.css$/,
                //loader: 'style-loader!css?importLoaders=1!postcss!resolve-url-loader' // Old loader
                loader: ['style-loader', 'css-loader', 'resolve-url-loader']
            },
            // "file" loader makes sure those assets get served by WebpackDevServer.
            // When you `import` an asset, you get its (virtual) filename. 
            // output.publicPath is the relative path where loaders bundle these file.
            {
                test: /\.(eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:8].[ext]'
                }
            },
            // file-loader for images. Note: use img src=require("pathToImageInSource") rather than src=/path/to/image for loaders to correctly output your bundled images.
            {
                test: /\.(ico|jpg|jpeg|png|gif)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    limit: 10000,
                    name: 'images/[name].[hash:8].[ext]'
                }
            },
            // file-loader for any media files
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'media/[name].[hash:8].[ext]'
                }
            }]
    },
    devServer: {
        publicPath: '/dist',
        hot: true,
        inline: true,
    },

    plugins: [
        // Set up the notifier plugin - you can remove this ( or set alwaysNotify false) if desired 
        // Add the webpack hmr plugin so it will notify the browser the app code changes
        new webpack.HotModuleReplacementPlugin()

    ]
};
