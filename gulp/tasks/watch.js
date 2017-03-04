/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

const gulp = require('gulp');
const config = require('../config');

gulp.task('watch', ['default'], function () {
    gulp.watch(config.scripts.src, ['scripts']);
});
