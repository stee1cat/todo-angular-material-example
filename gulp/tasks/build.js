/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

const gulp = require('gulp');
const sequence = require('gulp-sequence');

gulp.task('build', sequence('clean', 'templates', 'scripts', 'styles'));
