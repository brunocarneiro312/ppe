var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var glob = require('glob');

gulp.task('styles', ['modulos'], function() {

    function verificarArquivo(){
        glob('.tmp/app-brb.less',function(err,files){
            if(files.length>0)
                executaScript();
            else
                setTimeout(verificarArquivo,100);
        });
        
    }

    function executaScript(){
        return gulp.src([
            '.tmp/app-brb.less',
        ])
            .pipe($.plumber())
            .pipe($.less())
            .pipe($.autoprefixer({browsers: ['last 1 version']}))
            .pipe($.cleanCss({keepSpecialComments:0}))
            .pipe($.if(global.gzip,$.gzip()))
            .pipe(gulp.dest('dist/styles'));
    }
    
    verificarArquivo();
});