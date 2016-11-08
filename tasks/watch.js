'use strict';

var config = require('../configs/build.conf.js');

var gulp = require('gulp');

gulp.task('watch', ['default', 'connect'], function (cb) {
  gulp.watch(config.assets.images, ['assets-images']);

  gulp.watch(config.base.scripts, ['base-scripts']);
  gulp.watch(config.base.styles, ['base-styles']);
  gulp.watch(config.base.views, ['base-views']);

  gulp.watch(config.app.scripts, ['app-scripts']);
  gulp.watch(config.app.styles, ['app-styles']);
  gulp.watch(config.app.views, ['app-views']);

  gulp.watch(config.common.scripts, ['common-scripts']);
  gulp.watch(config.common.styles, ['common-styles']);
  gulp.watch(config.common.views, ['common-views']);
});
