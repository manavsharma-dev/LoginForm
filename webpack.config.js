
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const DIST_DIR = path.resolve(__dirname, 'dist');
// console.log(DIST_DIR);
// const SRC_DIR = path.resolve(__dirname, "/index.js");
// console.log(SRC_DIR);

const config = {
    entry: './app/index.js' ,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    modules:{
        rules: [
            {
                test: /\.(js)$/,
                use:'babel-loader'
            }
        ]
    },
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin ({
            template: 'app/index.html'
        })
    ]
};

module.export = config;