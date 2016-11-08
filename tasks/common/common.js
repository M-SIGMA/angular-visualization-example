'use strict';

var gulp = require('gulp');

var runSequence = require('run-sequence').use(gulp);

gulp.task('common', function (cb) {
  runSequence(['common-scripts', 'common-styles', 'common-views'], cb);
});
