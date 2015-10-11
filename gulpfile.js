var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs');

gulp.task('check', function(){
  return gulp
      .src([
        './asset/js/*.js'
      ])
      .pipe(jscs())
      .pipe(jshint())
      .pipe(jshint.reporter());
});
