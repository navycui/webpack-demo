const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"./build"),
        filename: "bundle.js"
    },
    module:{
        rules:[
            // {
            //     test: /\.css$/,
            //     loader: "style-loader"
            // },
            // {
            //     test: /\.css$/,
            //     loader: "css-loader"
            // }
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
}