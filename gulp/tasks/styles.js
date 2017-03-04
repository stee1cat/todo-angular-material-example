/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const config = require('../config');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('styles', function () {
    return gulp.src(config.styles.entries)
        .pipe(gulpIf(config.debug, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpIf(config.debug, sourcemaps.write('./')))
        .pipe(gulp.dest(config.styles.dest));
});
