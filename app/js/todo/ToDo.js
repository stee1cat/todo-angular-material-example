/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

import angular from 'angular';
import material from 'angular-material';

import TodoListService from './services/TodoListService';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoItemMenu from './components/TodoItemMenu';

export default angular.module('ToDo', [material])
    .component(TodoList.name, TodoList.config)
    .component(TodoItem.name, TodoItem.config)
    .component(TodoItemMenu.name, TodoItemMenu.config)
    .service('TodoListService', TodoListService);
