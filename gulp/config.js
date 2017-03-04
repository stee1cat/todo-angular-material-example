/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

module.exports = {
    debug: true,
    dist: {
        root: './build'
    },
    scripts: {
        src: 'app/js/**/*.js',
        dest: 'build/js',
        entries: 'app/js/app.js'
    },
    templates: {
        index: './index.html',
        src: 'app/templates/**/*.pug',
        dest: 'build/templates'
    }
};
