module.exports = {
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