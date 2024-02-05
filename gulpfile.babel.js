// @ts-check
const gulp = require('gulp')
const loadPlugins = require('gulp-load-plugins')
const webpack = require('webpack')
const del = require('del')

/**
 * @type {{rename: import('gulp-rename'); util: import('gulp-util'); }}
 */
const plugins = loadPlugins()

const webpackConfig = {
  background: require('./background/webpack.config.js'),
  popup: require('./popup/webpack.config.js'),
  content: require('./content/webpack.config.js'),
}

const scriptsTasks = Object.keys(webpackConfig)
for (const appName of scriptsTasks) {
  gulp.task(appName, (cb) => {
    webpack(webpackConfig[appName], (err, stats) => {
      // if (err) {
      //   throw new plugins.util.PluginError('webpack', err)
      // }
      // if (!stats) {
      //   throw new Error('[webpack]' + ' No stats')
      // }
      // plugins.util.log('[webpack]', stats.toString())
      cb()
    })
  })
}
gulp.task('popup_html', () => {
  return gulp
    .src('popup/src/index.html')
    .pipe(plugins.rename('popup.html'))
    .pipe(gulp.dest('./dist'))
})
gulp.task('copy_manifest', () => {
  return gulp.src('manifest.json').pipe(gulp.dest('./dist'))
})

function build() {
  return gulp.parallel('popup_html', 'copy_manifest', ...scriptsTasks)
}
function watch() {
  gulp.watch(['popup/**/*', 'content/**/*', 'background/**/*'], build())
}
function clean() {
  return del(['dist'])
}

exports.build = build()
exports.watch = watch
exports.clean = clean
exports.default = build()
