var gulp = require('gulp');

gulp.task('images', function() {
    
   gulp.src('node_modules/jquery-ui/themes/redmond/images/*')
           .pipe(gulp.dest('dist/styles/images'));
    
    return gulp.src('app/images/**/*')
        .pipe(gulp.dest('dist/images'));
});
