/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

import TodoItemDialog from '../TodoItemDialog';

class TodoItemController {

    constructor(todoListService, $mdDialog) {
        this.todoListService = todoListService;
        this.$mdDialog = $mdDialog;
    }

    edit(event) {
        let dialog = new TodoItemDialog({
            title: 'Редактирование задачи',
            targetEvent: event,
            text: this.data.text
        });

        this.$mdDialog.show(dialog)
            .then(text => this.todoListService.update(this.data.id, {
                text: text,
                done: this.data.done
            }), () => dialog = null);
    }

    remove(event) {
        let confirm = this.$mdDialog.confirm()
            .title('Вы уверены что хотите удалить задачу?')
            .targetEvent(event)
            .cancel('Отмена')
            .ok('Удалить');

        this.$mdDialog.show(confirm)
            .then(() => this.todoListService.remove(this.data))
            .catch(() => confirm = null);
    }

    toggleDone() {
        this.data.done = !this.data.done;
        this.todoListService.update(this.data.id, this.data);
    }


}

export default TodoItemController;
