import { RequestHandler } from "express";
import { Todo } from "./../models/todoModel";

let TODOS: Todo[] = [];

//------------------------------
export const createTodo: RequestHandler = (req, res, next) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Error, must define a title" });
  }
  const newTodo = new Todo(
    new Date().getTime().toString(),
    (req.body as { title: string }).title,
  );
  TODOS.push(newTodo);

  res.status(201).json({ message: "Todo created successfully", todo: newTodo });
};

//------------------------------
export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

//------------------------------
export const patchTodo: RequestHandler<{ todoId: string }> = (
  req,
  res,
  next,
) => {
  TODOS = TODOS.map((todo) => {
    if (todo.todoId === req.params.todoId) {
      return { ...todo, ...req.body };
    } else {
      return todo;
    }
  });

  res.status(201).json({ message: "Todo patched successfully", todos: TODOS });
};

//------------------------------
export const deleteTodo: RequestHandler<{ todoId: string }> = (
  req,
  res,
  next,
) => {
  const todoIndex = TODOS.findIndex((todo) => todo.todoId == req.params.todoId);
  TODOS.splice(todoIndex, 1);

  res.status(201).json({ message: "Todo created successfully", todos: TODOS });
};
