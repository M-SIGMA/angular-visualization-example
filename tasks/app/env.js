'use strict';

var JS_DIRECTORY = '/js/';

var config = require('../../configs/build.conf.js');

var args = require('yargs').argv;
var gulp = require('gulp');

var concat = require('gulp-concat');
var connect = require('gulp-connect');
var gulpIf = require('gulp-if');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

gulp.task('app-env', function (cb) {
  var src = [];
  var dest = config.distDir + JS_DIRECTORY;
  var concatFile = 'env.js';
  var productionEnv = (args.production) ? true : false; // ENV VARIABLE

  src.push(productionEnv ? './configs/env/production.conf.js' : './configs/env/development.conf.js');

  return gulp.src(src)
    .pipe(plumber())
    .pipe(concat(concatFile))
    .pipe(gulpIf(productionEnv, uglify()))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});
