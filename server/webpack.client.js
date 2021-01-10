const path = require('path');

module.exports = {

  // Tell webpack the root file of our
  // client (react) application
  entry: './src/client/client.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/, // only apply babel to js files
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react', // jsx to function calls
            'stage-0', // for async code
            ['env', { targets: { browsers: ['last 2 versions'] } }] // handle transpile for last versions for browsers
          ]
        }
      }
    ]
  }
}