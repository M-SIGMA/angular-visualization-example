'use strict';

var IMAGE_DIRECTORY = '/img/';

var config = require('../../configs/build.conf.js');

var args = require('yargs').argv;
var gulp = require('gulp');

var changed = require('gulp-changed');
var connect = require('gulp-connect');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');

gulp.task('assets-images', function (cb) {
  var src = config.assets.images;
  var dest = config.distDir + IMAGE_DIRECTORY;
  var productionEnv = args.production; // ENV VARIABLE

  return gulp.src(src)
    .pipe(changed(dest))
    .pipe(gulpIf(productionEnv, imagemin(src)))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});
