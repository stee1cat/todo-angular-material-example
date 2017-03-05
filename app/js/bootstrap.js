/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

import angular from 'angular';

import 'angular-animate';
import 'angular-aria';

import ToDo from './todo/ToDo';
import AppController from './AppController';

angular.element(document)
    .ready(function () {
        angular.module('app', [ToDo.name])
            .controller('AppController', AppController)
            .run();

        let body = document.getElementsByTagName('body')[0];
        angular.bootstrap(body, ['app']);
    });
