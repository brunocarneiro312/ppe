var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

gulp.task('watch', ['build'], function() {

        browserSync({
            notify: false,
            logPrefix: 'BS',
            // Run as an https by uncommenting 'https: true'
            // Note: this uses an unsigned certificate which on first access
            //       will present a certificate warning in the browser.
            //https: true,
            server: {
                    baseDir: './dist',
                    middleware: [require('compression')()]
            }
        });
        
        gulp.watch([
                'dist/**/*',
        ]).on('change', browserSync.reload );
    
        gulp.watch('app/scripts/modules/**/*.html',['template'] );
        gulp.watch('app/data/**/*',['data']);
        gulp.watch('app/*.html',['html'] );
        gulp.watch(['app/styles/**/*.less','app/styles/**/*.css','app/scripts/modules/**/*.less','app/scripts/modules/**/*.css'], ['styles'] );
        gulp.watch('app/images/**/*', ['images']);
        gulp.watch(['app/scripts/vendors.js'], ['browserify-vendor'] );
});

gulp.task('default',['watch']);