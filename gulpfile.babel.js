const webpack = require('webpack')
const config = require('./background/webpack.config.js')
webpack(config, () => {
  // ...
})

// vs

// const webpack = require('webpack')
// const config = require('./background/webpack.config.js')
// webpack(config)

// when I place a callback, which I need to do work, it opens the webpack output in a new text editor window, how to avoid that
