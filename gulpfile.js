var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var csslint = require('gulp-csslint');

var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('css', function() {
    gulp.src('css/faith-styles.css')
        .pipe(gulp.dest('dist'));

    gulp.src('css/dropdown.css')
        .pipe(gulp.dest('dist'));

    gulp.src('css/balloon.css')
      .pipe(gulp.dest('dist'));

    gulp.src('css/faith-gravitons.scss')
        .pipe(sass())
        .pipe(uglifycss())
        .pipe(gulp.dest('dist'));

    gulp.src('dist/*.css')
      .pipe(concat('faith-master.css'))
      .pipe(uglifycss())
      .pipe(gulp.dest('dist'));
});

gulp.task('lint', function(){
  gulp.src('css/faith-styles.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task('watch', function () {
  gulp.watch('css/*.scss', ['css']);
  gulp.watch('css/*.css', ['css']);
});

gulp.task('default', ['css']);
