'use strict';

var gulp = require('gulp');

var runSequence = require('run-sequence').use(gulp);

gulp.task('vendor', function (cb) {
  runSequence(['vendor-scripts', 'vendor-styles'], cb);
});
