/**
 * Copyright (c) 2017 Gennadiy Khatuntsev <e.steelcat@gmail.com>
 */

class TodoItemMenuController {

    openMenu(menu, event) {
        menu.open(event);
    }

    edit() {
        console.log('edit');
    }

    remove() {
        console.log('remove');
    }

}

export default TodoItemMenuController;
