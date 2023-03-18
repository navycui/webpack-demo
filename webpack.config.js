const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"./build"),
        filename: "bundle.js"
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
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: "asset",
                generator: {
                    filename: "img/[name]_[hash:6][ext]"
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024
                    }
                }
            }
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
    }
}