var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var sassPaths = [
    'node_modules/foundation-sites/scss',

]

gulp.task('default', function() {
    console.log('gulp is working');
})

gulp.task('process-styles', function() {
    return sass('scss/*.scss', {
        loadPath: sassPaths,
        style: 'expanded'
    }).
    pipe(gulp.dest('./css'))
})

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['process-styles'])

})