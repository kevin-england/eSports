var gulp = require('gulp')
var nodemon = require('gulp-nodemon');

var app = 'public/js/angular.js';

gulp.task('default', function() {
  nodemon({
    script: app,
  }).on('start', ['test']);
});

gulp.task('test', function() {
})

gulp.task('default', ['test']);

