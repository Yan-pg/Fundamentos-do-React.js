const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bunble.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },  
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                } 
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader'} ,
                    { loader: 'css-loader'}
                ]
            },
            {
                test: /.*\.(gid|png\jpg?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}