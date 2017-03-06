/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

import angular from 'angular';

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
            this.items.unshift(angular.extend({}, {
                id: Date.now(),
                done: 0
            }, item));

            this.saveAll();
        }
    }

    update(id, newItem) {
        let item = this.find(id);

        if (item) {
            item.text = newItem.text;
            item.done = newItem.done ? 1 : 0;

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
        let i = 0,
            length = this.items.length;

        // Без полифила для IE11
        for (; i < length; i++) {
            if (this.items[i].id == id) {
                return this.items[i];
            }
        }

        return false;
    }

}

export default ['$q', 'LocalStorageService', TodoListService];
