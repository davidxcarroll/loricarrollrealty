
// SASS
// ============================================================

var gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('_src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./_public/static/_css'));
});

// WATCH
// ============================================================

gulp.task('watch', function () {
  gulp.watch(['./_public/static/*.html'], ['html']),
  gulp.watch(['./_src/sass/**/*.scss'],['sass']);
});

// LIVE RELOAD
// ============================================================
 
var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '_public/static',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./_public/static/*.html')
    .pipe(connect.reload());
});
 
gulp.task('default', ['connect', 'watch']);

// FTP
// ============================================================

// var gulp = require( 'gulp' );
// var gutil = require( 'gulp-util' );
// var ftp = require( 'vinyl-ftp' );

// gulp.task( 'deploy', function() {

//     var conn = ftp.create( {
//         host:     's14088.gridserver.com',
//         user:     'email@david.pizza',
//         password: '+*yk2UI_0pg',
//         parallel: 10,
//         log:      gutil.log
//     } );

//     var globs = [
//         '_public/**'
//     ];

//     return gulp.src( globs, { base: '_public', buffer: false } )
//         .pipe( conn.newer( '.' ) ) // only upload newer files
//         .pipe( conn.dest( '.' ) );

// } );