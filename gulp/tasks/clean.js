/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

const config = require('../config');
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function () {
    return del([config.dist.root]);
});
