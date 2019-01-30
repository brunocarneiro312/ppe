var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;

gulp.task('builddist',[],function(){
    
    if(argv.gzip) global.gzip = true;
    global.dist = true;
    gulp.start('build');  
});

// gulp.task('builddist', ['jshint', 'html', 'images', 'fonts', 'extras', 'styles'],
//     function() {
//         return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
//     });
