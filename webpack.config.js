const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {DefinePlugin} = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { options } = require('less');

module.exports = {
    mode: "development", // code 압축하지 않은 다
    devtool: "source-map", // 압축 소스 풀어서 보여줌
    // target: "web",
    // watch: true, // 자동 빌드 설정 개발
    entry: "./src/index.js",
    devServer: {
        static: "./public",
        hot: true, // 모듈 re qie huan
    },
    output: {
        path: path.resolve(__dirname,"./build"),
        filename: "js/bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions:{
                    //             plugins: [
                    //                 require("autoprefixer")
                    //             ]
                    //         }
                    //     }
                    // }

                ]
            },  
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg|webp)$/i,
            //     type: "asset/resource"
            // },
            // {
            //     test: /\.(eot|ttf|woff2?|)$/i,
            //     type: "asset/resource"
            // },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: "asset",
                generator: {
                    filename: "img/[name]_[hash:6][ext]"
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff2?|)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        filename: "font/[name]_[hash:6].[ext]"
                    }
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             // plugins: [
            //             //     "@babel/plugin-transform-arrow-functions",
            //             //     "@babel/plugin-transform-block-scoping"
            //             // ]
            //             presets: [
            //                 "@babel/preset-env"
            //             ]
            //         }
            //         // {
            //         //     loader: "postcss-loader",
            //         //     options: {
            //         //         postcssOptions:{
            //         //             plugins: [
            //         //                 require("autoprefixer")
            //         //             ]
            //         //         }
            //         //     }
            //         // }

            //     }
            // },  
            // {
            //     test: /\.(png|jpe?g|gif|svg|webp)$/i,
            //     use: [
            //         {
            //           loader: 'file-loader',
            //           options: {
            //             // outputPath: "img",
            //             name: 'img/[name]-[hash:6].[ext]'
            //           }
            //         },
            //       ],
            // }
            // {
            //     test: /\.(png|jpe?g|gif|svg|webp)$/i,
            //     use: [
            //         {
            //           loader: 'url-loader',
            //           options: {
            //             // outputPath: "img",
            //             name: 'img/[name]-[hash:6].[ext]',
            //             limit: 100 * 1024
            //           }
            //         },
            //       ],
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "hahahahhahahh"
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: "public",
        //             to: "./",
        //             globOptions: {
        //                 ignore: [
        //                     "**/index.html"
        //                 ]
        //             }
        //         }
        //     ]
        // }),
        new DefinePlugin({
            BASE_URL: "'./'"
        })
    ]
}