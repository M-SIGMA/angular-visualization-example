'use strict';

var gulp = require('gulp');

var runSequence = require('run-sequence').use(gulp);

gulp.task('assets', function (cb) {
  runSequence(['assets-images', 'assets-fonts'], cb);
});
