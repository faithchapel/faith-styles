var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var csslint = require('gulp-csslint');

gulp.task('css', function() {
    gulp.src('css/faith-styles.css')
        .pipe(rename('faith-styles.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('dist'));

    gulp.src('css/faith-styles.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', function(){
  gulp.src('css/faith-styles.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task('default', ['css']);
