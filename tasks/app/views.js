'use strict';

var VIEWS_DIRECTORY = '/views/';

var config = require('../../configs/build.conf.js');

var args = require('yargs').argv;
var gulp = require('gulp');

var connect = require('gulp-connect');
var gulpIf = require('gulp-if');
var minifyHTML = require('gulp-minify-html');
var plumber = require('gulp-plumber');

gulp.task('app-views', function (cb) {
  var src = config.app.views;
  var dest = config.distDir + VIEWS_DIRECTORY;
  var productionEnv = args.production; // ENV VARIABLE

  return gulp.src(src)
    .pipe(plumber())
    .pipe(gulpIf(productionEnv, minifyHTML({
      quotes: true,
      empty: true
    })))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});
