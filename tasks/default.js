'use strict';

var gulp = require('gulp');

var runSequence = require('run-sequence').use(gulp);

gulp.task('default', function (cb) {
  runSequence('assets', 'base', 'app', 'common', 'vendor', cb);
});
