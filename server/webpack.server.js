const path = require('path');

module.exports = {
  // Inform webpack that we are building a bundle
  // for nodeJS rather than a browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
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