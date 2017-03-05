/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

import TodoItemDialog from '../TodoItemDialog';

class TodoListController {

    constructor(TodoListService, $mdDialog) {
        this.todoListService = TodoListService;
        this.$mdDialog = $mdDialog;

        this.init();
    }

    init() {
        this.todoListService.loadAll()
            .then(items => this.items = items);
    }

    add(event) {
        let dialog = new TodoItemDialog({
            title: 'Новая задача',
            targetEvent: event,
            text: ''
        });

        this.$mdDialog.show(dialog)
            .then(text => this.todoListService.add({
                text
            }), () => dialog = null);
    }

}

export default TodoListController;
