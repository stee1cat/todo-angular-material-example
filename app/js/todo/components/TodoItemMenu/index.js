/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

import TodoItemMenuController from './TodoItemMenuController';
import template from './template.pug';

export default {
    name: 'todoItemMenu',
    config: {
        bindings: {
            edit: '&onEdit',
            remove: '&onRemove'
        },
        template: template(),
        controller: TodoItemMenuController
    }
};
