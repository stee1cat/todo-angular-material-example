/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

import angular from 'angular';

class LocalStorageService {

    constructor() {
        try {
            if ('localStorage' in window && window['localStorage'] !== null) {
                this.storage = window.localStorage;
            }
        } catch (e) {}
    }

    get(key) {
        let value;

        if (this.storage) {
            try {
                value = angular.fromJson(this.storage.getItem(key));
            }
            catch (e) {}
        }

        return value;
    }

    set(key, value) {
        if (this.storage) {
            this.storage.setItem(key, angular.toJson(value));
        }
    }

    remove(key) {
        if (this.storage) {
            this.storage.removeItem(key);
        }
    }

}

export default LocalStorageService;
