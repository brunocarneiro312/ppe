var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;

gulp.task('build', ['clean','config','modulos','template','fonts','images','styles','html','data','browserify' ,'browserify-vendor'], function() {
	
	


	if(argv.gzip) global.gzip = true;
});