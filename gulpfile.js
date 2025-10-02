const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass( {outputStyle: 'compressed'} ))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// função que observa mudanças nos arquivos
function watchFiles() {
    gulp.watch('./src/styles/*.scss', styles);
}

exports.default = gulp.parallel(styles, images);

exports.watch = gulp.series(styles, watchFiles);