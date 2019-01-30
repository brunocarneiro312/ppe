var gulp = require('gulp')
var $ = require('gulp-load-plugins')();
var fs = require('fs');

var bundlePaths = {
    src: [
        './app/scripts/app.js'
    ],
    dest:'./dist/scripts/',
};

// Browserify and copy js files
gulp.task('browserify', ['config','template','modulos'], $.watchify(function(watchify) {
    
    var watching = !global.dist;
    return gulp.src(bundlePaths.src)
        .pipe(watchify({
            watch:watching
        }))
        .pipe($.if(global.gzip,$.gzip()))
        // .pipe($.streamify($.uglify({mangle:true})))
        .pipe(gulp.dest(bundlePaths.dest));
}))
