const path = require('path');
module.exports = {
    entry: {
      'index':'./src/js/index.js',
    },
    output: {
        path: path.join(__dirname,'./dist/'),
        publicPath: "./",
        filename: "js/[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};