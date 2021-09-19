const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const insDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: insDevelopment ? 'development' : 'production',
    devtool: insDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], 
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true,
    },
    plugins: [
         insDevelopment && new ReactRefreshWebpackPlugin(), // && => quando não vai utilizar o operador ternario ( ? : )significa que irá retornar true nessa verificação
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),  // para que o plugin não apresente erro, pois ele não reconhece true ou false
    module: {
        rules:[
            {
                test: /\.(j|t)sx$/, // significa que a aplicação tera javascritp ou typescript
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                       plugins: [
                           insDevelopment && require.resolve('react-refresh/babel')
                       ].filter(Boolean)
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']                
            }    
        ],
    }
}