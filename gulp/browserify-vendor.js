var gulp = require('gulp')
var $ = require('gulp-load-plugins')();

var bundlePaths = {
    src: [
        './app/scripts/vendors.js'
    ],
    dest:'./dist/scripts/',
};

// Browserify and copy js files
gulp.task('browserify-vendor', $.watchify(function(watchify) {
    var watching = !global.dist;
    return gulp.src(bundlePaths.src)
        .pipe(watchify({
            watch:watching
        }))
        // .pipe($.sourcemaps.write('.'))
        .pipe($.if(global.dist,$.streamify($.uglify())))
        .pipe($.if(global.gzip,$.gzip()))
        .pipe(gulp.dest(bundlePaths.dest));
}))







