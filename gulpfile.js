var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server
gulp.task('serve', function () {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/**/*.*").on('change', browserSync.reload);
});

// Run Default
gulp.task('default', ['serve']);