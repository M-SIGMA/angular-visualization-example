'use strict';

var config = require('../configs/build.conf.js');

var gulp = require('gulp');

var connect = require('gulp-connect');
var modRewrite = require('connect-modrewrite'); // Rewrite middle for express servers

gulp.task('connect', function (cb) {
  connect.server({
    root: config.distDir,
    port: config.serverPort,
    livereload: true,
    middleware: function (connect, opt) {
      return [modRewrite(['!/assets|\\..+$ /index.html [L]'])];
    }
  });
});
