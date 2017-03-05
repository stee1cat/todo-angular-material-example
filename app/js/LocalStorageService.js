/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

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
            value = JSON.parse(this.storage.getItem(key));
        }

        return value;
    }

    set(key, value) {
        if (this.storage) {
            this.storage.setItem(key, JSON.stringify(value));
        }
    }

    remove(key) {
        if (this.storage) {
            this.storage.removeItem(key);
        }
    }

}

export default LocalStorageService;
