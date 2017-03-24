const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('concat', function () {
  gulp.src(['./app/**/*.js'])
  .pipe(concat('all.js'))
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('./dist'))
});
gulp.task('sass', function () {
  return gulp.src('./app/**/*.sass')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist'));
});
