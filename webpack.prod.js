const path = require("path")
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: "./server.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js"
    },
    mode: 'production',
    target: 'node',
    externals: [nodeExternals()], 
    module: {
        rules: [
            {
                // test: /\.js$/,   
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}