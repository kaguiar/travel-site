var gulp = require ('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var ccsvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('default', function(){
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function(){
  console.log("Imagine something useful here");
});

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([nested, ccsvars, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});
gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
