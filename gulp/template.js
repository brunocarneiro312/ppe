var gulp = require('gulp');
var angularTemplates = require('gulp-angular-templatecache');

gulp.task('template', function (cb) {
    
    gulp.src(['app/scripts/modules/**/*.html'])
        .pipe(angularTemplates({standalone:true}))
        .pipe(gulp.dest('.tmp/scripts'))
        .on('end',function(){
            cb();
        });
});