/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

import TodoItemController from './TodoItemController';
import template from './template.pug';

export default {
    name: 'todoItem',
    config: {
        bindings: {
            data: '<'
        },
        template: template(),
        controller: ['TodoListService', '$mdDialog', TodoItemController]
    }
};
