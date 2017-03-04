/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

import angular from 'angular';
import ToDo from './todo/ToDo';

angular.element(document)
    .ready(function () {
        angular.module('app', [ToDo.name])
            .run(() => console.log('Started'));

        let body = document.getElementsByTagName('body')[0];
        angular.bootstrap(body, ['app']);
    });
