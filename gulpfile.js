var gulp = require ('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var ccsvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function(){
  browserSync.reload();
});

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, ccsvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    },
//    browser: 'microsoft-edge:http://localhost:3000'
//browser: 'chrome' //:http://localhost:3000'
    browser: 'iexplore' //:http://localhost:3000'
  });

  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], function(){
  return browserSync.reload();
  //return gulp.src('.app/temp/styles/styles.css')
  //.pipe(browserSync.stream());
});
