var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');

// gulp.task('clean', function(cb) {
//     $.cache.clearAll();
//     cb(del.sync(['dist']));
// });

gulp.task('clean', function(cb) {
    $.cache.clearAll();
    cb(del.sync(['dist/scripts','dist']));
});


// gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));