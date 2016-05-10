var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('css', function() {
    gulp.src('css/faith-styles.css')
        .pipe(rename('faith-styles.min.css'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));

    gulp.src('css/faith-styles.css')
      .pipe(gulp.dest('dist'));
});

gulp.task('default', ['css']);
