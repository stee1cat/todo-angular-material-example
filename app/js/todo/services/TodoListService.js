/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

class TodoListService {

    constructor($q) {
        this.$q = $q;

        this.items = [];
    }

    loadAll() {
        return this.$q.when(this.items);
    }

    add(item) {
        if (item && item.text) {
            this.items.unshift(Object.assign({}, {
                id: Date.now(),
                done: false
            }, item));
        }
    }

    update(id, newItem) {
        let item = this.find(id);

        if (item) {
            item.text = newItem.text;
            item.done = newItem.done;
        }
    }

    remove(item) {
        let index;

        if ((index = this.items.indexOf(item)) !== -1) {
            this.items.splice(index, 1);
        }
    }

    find(id) {
        return this.items.find(item => item.id == id);
    }

}

export default ['$q', TodoListService];
