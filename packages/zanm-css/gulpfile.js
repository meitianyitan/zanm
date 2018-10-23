const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-clean-css');
const fs = require('fs-extra');

// compile component css
gulp.task('compile', () => {
  fs.emptyDirSync('./lib');
  return gulp
    .src('./src/*.less')
    .pipe(less())
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

// copy lib files
gulp.task('lib', ['compile'], () => {
  fs.copySync('./lib', '../../lib/zanm-css');
  fs.copySync('./lib', '../../es/zanm-css');
});

gulp.task('build', ['lib']);
