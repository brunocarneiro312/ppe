var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('data', function() {
    return gulp.src('app/data/**/*')
        .pipe(gulp.dest('dist/data'));
});
