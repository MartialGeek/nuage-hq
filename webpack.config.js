var path = require('path');

module.exports = {
    entry: './web/src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'web/dist')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devtool: "source-map"
};
