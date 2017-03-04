/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

import angular from 'angular';
import material from 'angular-material';

import 'angular-animate';
import 'angular-aria';

import ToDoController from './ToDoController';

export default angular.module('ToDo', [material])
    .controller('ToDoController', ToDoController);
