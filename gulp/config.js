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
        entries: 'app/js/bootstrap.js'
    },
    styles: {
        src: 'app/sass/**/*.scss',
        dest: 'build/css',
        entries: 'app/sass/style.scss'
    },
    templates: {
        index: 'app/templates/index.pug',
        src: 'app/{templates,js}/**/*.pug',
        dest: 'build/templates'
    }
};
