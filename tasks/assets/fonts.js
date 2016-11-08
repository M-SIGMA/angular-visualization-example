'use strict';

var FONT_DIRECTORY = '/fonts/';

var config = require('../../configs/build.conf.js');

var gulp = require('gulp');

var changed = require('gulp-changed');
var connect = require('gulp-connect');

gulp.task('assets-fonts', function (cb) {
  var src = config.assets.fonts;
  var dest = config.distDir + FONT_DIRECTORY;

  return gulp.src(src)
    .pipe(changed(dest))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});
