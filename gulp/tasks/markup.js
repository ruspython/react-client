var gulp = require('gulp');
var less = require('gulp-less');
var config = require('../config').markup;

gulp.task('markup', ['less'], function () {
    return gulp
        .src(config.src)
        .pipe(gulp.dest(config.dest));
});

gulp.task('less', function () {
    console.log(config.src+'/*.less')
    return gulp
        .src('./src/www/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./build/css'));
});
