var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch');

gulp.task('watch', function () {
  gulp.watch(['./*.js', './test/*.js', './lib/*.js'], ['lint']);
});

gulp.task('default', ['mocha', 'lint', 'watch'], function () {});

gulp.task('lint', function () {
  gulp.src(['./*.js', './test/*.js', './lib/*.js'])
    .pipe(eslint()) //{} pass in rules
    .pipe(eslint.format());
});

gulp.task('mocha', function () {
  return gulp.src('./test/*.js', {
    read: false
  })
    .pipe(mocha({
      reporter: 'nyan'
    }));
});
