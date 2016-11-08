'use strict';

var JS_DIRECTORY = '/js/';

var config = require('../../configs/build.conf.js');

var args = require('yargs').argv;
var gulp = require('gulp');

var concat = require('gulp-concat');
var connect = require('gulp-connect');
var gulpIf = require('gulp-if');
var order = require('gulp-order');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

gulp.task('vendor-scripts', function (cb) {
  var src = config.vendor.scripts;
  var dest = config.distDir + JS_DIRECTORY;
  var concatFile = 'vendor.js';

  var productionEnv = (args.production) ? true : false; // ENV VARIABLE

  return gulp.src(src)
    .pipe(order(src, {base: './'}))
    .pipe(plumber())
    .pipe(concat(concatFile))
    .pipe(gulpIf(productionEnv, uglify()))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});
