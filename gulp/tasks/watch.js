/* Notes:
 - gulp/tasks/browserify.js handles js recompiling with watchify
 - gulp/tasks/browserSync.js watches and reloads compiled files
 */

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function () {
    gulp.watch([config.markup.src, "!"+config.markup.src+'/less/*.less'], ['markup']);
});

gulp.task('less-watcher', function () {
    console.log('in wathcer')
    console.log(config.markup.src+'/**/*.less')
    gulp.watch(config.markup.src+'/**/*.less', ['less']);
});