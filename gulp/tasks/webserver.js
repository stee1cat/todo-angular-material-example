/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

const gulp = require('gulp');
const webserver = require('gulp-webserver');
const config = require('../config');

gulp.task('webserver', function () {
    gulp.src(config.dist.root)
        .pipe(webserver({
            directoryListing: false,
            open: true
        }));
});
