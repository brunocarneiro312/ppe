var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('html', [],function() {
    
    return gulp.src('app/*.html')
       .pipe($.if(global.gzip,$.replace('{gz}','.gz'),$.replace('{gz}','')))
       .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
       .pipe(gulp.dest('dist'));
});