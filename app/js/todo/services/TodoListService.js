/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

class TodoListService {

    constructor($q) {
        this.$q = $q;

        this.items = [
            {
                text: 'ToDo #1'
            },
            {
                text: 'ToDo #2'
            },
            {
                text: 'ToDo #3'
            },
            {
                text: 'ToDo #4'
            },
            {
                text: 'ToDo #5'
            }
        ];
    }

    loadAll() {
        return this.$q.when(this.items);
    }

}

export default ['$q', TodoListService];
