var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs');
    sass = require('gulp-sass');
    del = require('del');

gulp.task('check', function(){
  return gulp
      .src([
        './asset/js/*.js'
      ])
      .pipe(jscs())
      .pipe(jshint())
      .pipe(jshint.reporter());
});

gulp.task('style', ['clean-styles'], function(){
  return gulp
      .src('./asset/css/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./.tmp'));
});

gulp.task('clean-styles', function(){
  var files = '.tmp/*.css';
  del(files);
})
