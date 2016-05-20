const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

var files = ['index.js', 'server.js', 'gulpfile.js'];

gulp.task('test:mocha', () => {
  return gulp.src('/test/**/*test.js')
  .pipe(mocha());
});

gulp.task('lint:tests', () => {
  return gulp.src('./test/*.js')
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('lint:chatServer', () => {
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('test', ['test:mocha']);
gulp.task('lint', ['lint:tests', 'lint:chatServer']);
gulp.task('watch', () => {
  gulp.watch(files, ['test', 'lint']);
});

gulp.task('default', ['watch', 'lint', 'test']);
