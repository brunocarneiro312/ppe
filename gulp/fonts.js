var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('fonts', function() {
    // return gulp.src(require('main-bower-files')().concat('app/styles/fonts/**/*')
    return gulp.src(['app/styles/fonts/**/*','node_modules/brb-template/dist/fonts/*'])
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest('dist/fonts'))
});
