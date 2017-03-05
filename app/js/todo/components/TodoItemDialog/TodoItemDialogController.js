/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

class TodoItemDialogController {

    constructor($mdDialog, modal) {
        this.$mdDialog = $mdDialog;
        this.modal = modal;
    }

    close() {
        this.$mdDialog.hide();
    }

    cancel() {
        this.$mdDialog.cancel();
    }

    save() {
        if (this.$scope.task.$valid) {
            this.$mdDialog.hide(this.modal.text);
        }
    };

}

export default TodoItemDialogController;
