const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  // transformations
  module: {
    // All all the loaders here in 'rules', instructs what to be done before/while bundle is being generated
    rules: [{
      /**
       * As webpack is bundling all of our modules together,
       * any time it sees a Javascript file, it's going to go
       * ahead and run the babel-loader transformation on it
       */
      test: /\.(js)$/, use: 'babel-loader'
    }, {
      test:/\.svg$/, use: 'svg-inline-loader'
    }, {
      /**
       * On any CSS file inside of our application, go ahead and run
       * the style-loader as well as the css-loader on it
       */
      test: /\.css$/, use: ['style-loader', 'css-loader']
    }]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  // Plugins direct actions to be done after bundle is created
  plugins: [
    /**
     * Generates an index.html page, puts it in /dist folder with script tags that reference new bundle
     */
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}

