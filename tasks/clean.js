'use strict';

var config = require('../configs/build.conf.js');

var del = require('del');
var gulp = require('gulp');

gulp.task('clean', function (cb) {
  del([config.distDir], cb);
});
