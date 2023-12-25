"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.patchTodo = exports.getTodos = exports.createTodo = void 0;
const todoModel_1 = require("./../models/todoModel");
let TODOS = [];
//------------------------------
const createTodo = (req, res, next) => {
    if (!req.body.title) {
        return res.status(400).json({ message: "Error, must define a title" });
    }
    const newTodo = new todoModel_1.Todo(new Date().getTime().toString(), req.body.title);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Todo created successfully", todo: newTodo });
};
exports.createTodo = createTodo;
//------------------------------
const getTodos = (req, res, next) => {
    res.status(200).json({ todos: TODOS });
};
exports.getTodos = getTodos;
//------------------------------
const patchTodo = (req, res, next) => {
    TODOS = TODOS.map((todo) => {
        if (todo.todoId === req.params.todoId) {
            return Object.assign(Object.assign({}, todo), req.body);
        }
        else {
            return todo;
        }
    });
    res.status(201).json({ message: "Todo patched successfully", todos: TODOS });
};
exports.patchTodo = patchTodo;
//------------------------------
const deleteTodo = (req, res, next) => {
    const todoIndex = TODOS.findIndex((todo) => todo.todoId == req.params.todoId);
    TODOS.splice(todoIndex, 1);
    res.status(201).json({ message: "Todo created successfully", todos: TODOS });
};
exports.deleteTodo = deleteTodo;
