var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

gulp.task('css', function() {
    gulp.src('css/faith-styles.css')
        .pipe(rename('faith-styles.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('dist'));

    gulp.src('css/faith-styles.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['css']);
