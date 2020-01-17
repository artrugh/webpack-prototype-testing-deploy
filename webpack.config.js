/// webpack.config.js

const path = require('path');

module.exports = {
    module: {
        // customize the entry point File. By default it is ./src/index.js

        // entry: './pass/to/my/entry/file.js',

        //defaults to ./dist/main.js for the main output file and to 
        //the ./dist folder for any other generated file.

        // output: {
        //     path: path.resolve(__dirname, 'dist'),
        //     filename: 'my_first_webpack.bundler.js'
        // }
        
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
};