var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;
gulp.task('config', function() {

    var env = "config" + ( argv.env!=undefined ? "."+argv.env : "" ) + ".json" ;
    return gulp.src(env)
        // .pipe($.ngConfig('Config'))
        .pipe($.rename("config.json"))
        .pipe(gulp.dest('./.tmp/scripts'));
});
