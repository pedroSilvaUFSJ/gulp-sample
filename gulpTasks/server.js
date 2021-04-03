const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function server() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
}

function watchFiles(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
}

module.exports = {
    watchFiles,
    server
}