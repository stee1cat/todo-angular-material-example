/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

const gulp = require('gulp');
const config = require('../config');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');

gulp.task('scripts', function () {
    return browserify({
            entries: config.scripts.entries,
            debug: config.debug
        })
        .transform('babelify', {
            presets: ['es2015']
        })
        .transform('pugify', {
            compileDebug: config.debug
        })
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(buffer())
        .pipe(gulpIf(config.debug, sourcemaps.init({
            loadMaps: true
        })))
        .pipe(gulpIf(!config.debug, uglify()))
        .pipe(gulpIf(config.debug, sourcemaps.write('./')))
        .pipe(gulp.dest(config.scripts.dest));
});
