'use strict';

var DATA_DIRECTORY = '/data/';

var config = require('../../configs/build.conf.js');

var gulp = require('gulp');

var changed = require('gulp-changed');
var connect = require('gulp-connect');

gulp.task('assets-data', function (cb) {
  var src = config.assets.data;
  var dest = config.distDir + DATA_DIRECTORY;

  return gulp.src(src)
    .pipe(changed(dest))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});
