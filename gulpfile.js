var gulp = require('gulp');
var lr = require('tiny-lr');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var server = lr();
var plumber = require('gulp-plumber');
var onError = function (err) {  
  gutil.beep();
  console.log(err);
};

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
         .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie6', 'ie7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('css'))
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(livereload(server));
        
});

		gulp.task('watch', function() {
    livereload.listen();

    gulp.watch('scss/**/*.scss', ['sass']);  
});

gulp.task('default', [ 'sass', 'watch']);