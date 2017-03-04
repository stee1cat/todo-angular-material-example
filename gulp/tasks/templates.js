/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

const gulp = require('gulp');
const pug = require('gulp-pug');
const config = require('../config');

gulp.task('templates', function () {
    return gulp.src(config.templates.index)
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(config.dist.root));
});
