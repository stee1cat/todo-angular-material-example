/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

import TodoListController from './TodoListController';
import template from './template.pug';

export default {
    name: 'todoList',
    config: {
        bindings: {
            items: '<'
        },
        template: template(),
        controller: TodoListController
    }
};
