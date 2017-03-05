/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

import angular from 'angular';
import template from './template.pug';
import TodoItemDialogController from './TodoItemDialogController';

export default function (modal = {}) {
    return {
        parent: angular.element(document.body),
        template: template(),
        targetEvent: modal.targetEvent,
        locals: {
            modal: modal
        },
        controllerAs: '$ctrl',
        bindToController: true,
        controller: ['$mdDialog', 'modal', TodoItemDialogController]
    }
};
