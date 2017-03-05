/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

const ITEMS_KEY = 'todo-list';

class TodoListService {

    constructor($q, LocalStorageService) {
        this.$q = $q;
        this.localStorageService = LocalStorageService;
        this.items = [];
    }

    loadAll() {
        return this.$q((resolve) => {
            this.items = this.localStorageService.get(ITEMS_KEY);

            if (!this.items) {
                this.items = [];
            }

            resolve(this.items);
        });
    }

    saveAll() {
        this.localStorageService.set(ITEMS_KEY, this.items);
    }

    add(item) {
        if (item && item.text) {
            this.items.unshift(Object.assign({}, {
                id: Date.now(),
                done: false
            }, item));

            this.saveAll();
        }
    }

    update(id, newItem) {
        let item = this.find(id);

        if (item) {
            item.text = newItem.text;
            item.done = newItem.done;

            this.saveAll();
        }
    }

    remove(item) {
        let index;

        if ((index = this.items.indexOf(item)) !== -1) {
            this.items.splice(index, 1);

            this.saveAll();
        }
    }

    find(id) {
        return this.items.find(item => item.id == id);
    }

}

export default ['$q', 'LocalStorageService', TodoListService];
