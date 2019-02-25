var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    },
    injectChanges: true,
    browser: 'microsoft-edge:http://localhost:3000'
    //browser: 'chrome' //:http://localhost:3000'
    //browser: 'iexplore' //:http://localhost:3000'
  });

  watch('./app/index.html', function () {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], function () {
  return browserSync.reload();
  //return gulp.src('.app/temp/styles/styles.css')
  //  .pipe(browserSync.stream({ match: '**/*.css' }));
});