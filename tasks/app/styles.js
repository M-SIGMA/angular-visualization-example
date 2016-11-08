'use strict';

var CSS_DIRECTORY = '/css/';

var config = require('../../configs/build.conf.js');

var args = require('yargs').argv;
var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

gulp.task('app-styles', function (cb) {
  var src = config.app.styles;
  var dest = config.distDir + CSS_DIRECTORY;
  var concatFile = 'app.css';
  var productionEnv = args.production; // ENV VARIABLE

  return gulp.src(src)
    .pipe(plumber())
    .pipe(sass({
      sourceComments: !productionEnv,
      outputStyle: productionEnv ? 'compressed' : 'nested',
      errLogToConsole: true
    }))
    .pipe(autoprefixer())
    .pipe(concat(concatFile))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});
