'use strict';

var JS_DIRECTORY = '/js/';

var config = require('../../configs/build.conf.js');

var args = require('yargs').argv;
var gulp = require('gulp');

var angularFilesort = require('gulp-angular-filesort');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var gulpIf = require('gulp-if');
var iife = require('gulp-iife');
var ngAnnotate = require('gulp-ng-annotate');
var order = require('gulp-order');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('app-scripts', function (cb) {
  var src = config.app.scripts;
  var dest = config.distDir + JS_DIRECTORY;
  var concatFile = 'app.js';

  var productionEnv = (args.production) ? true : false; // ENV VARIABLE

  return gulp.src(src)
    .pipe(order(src, {base: './'}))
    .pipe(plumber())
    .pipe(gulpIf(!productionEnv, sourcemaps.init()))
    .pipe(angularFilesort())
    .pipe(ngAnnotate())
    .pipe(concat(concatFile))
    .pipe(gulpIf(productionEnv, uglify()))
    .pipe(iife({
      useStrict: false,
      trimCode: false,
      prependSemicolon: false
    }))
    .pipe(gulpIf(!productionEnv, sourcemaps.write()))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});
