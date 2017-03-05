/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

class TodoListController {

    constructor(TodoListService) {
        this.todoListService = TodoListService;

        this.init();
    }

    init() {
        this.todoListService.loadAll()
            .then(items => this.items = items);
    }

    add() {

    }

}

export default ['TodoListService', TodoListController];
