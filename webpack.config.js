const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [{
      /**
       * As webpack is bundling all of our modules together,
       * any time it sees a Javascript file, it's going to go
       * ahead and run the babel-loader transformation on it
       */
      test: /\.(js)$/, use: 'babel-loader'
    }, {
      /**
       * On any CSS file inside of our application, go ahead and run
       * the style-loader as well as the css-loader on it
       */
      test: /\.css$/, use: ['style-loader', 'css-loader']
    }]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}

