"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor(todoId, title, status = false) {
        this.todoId = todoId;
        this.title = title;
        this.status = status;
    }
}
exports.Todo = Todo;
