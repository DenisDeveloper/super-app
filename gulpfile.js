var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('build', function () {
    return browserify({entries: './application/main.js', debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('super.js'))
        .pipe(vinylBuffer())
        .pipe(ngAnnotate())
        .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['watch']);