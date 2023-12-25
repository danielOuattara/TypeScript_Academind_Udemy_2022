import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

/* 

New definition of the Todo type in todo.d.ts file, located in the "src" folder

type Todo = {
  id: string;
  title: string;
  completed: boolean;
}; 
*/

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddToDo = (title: string) => {
    setTodos((prevState) => [
      {
        id: new Date().getTime().toString(),
        title,
        completed: false,
      },
      ...prevState,
    ]);
    console.log(title);
  };
  return (
    <div className="App">
      <h1> Todos Application</h1>
      <NewTodo handleAddTodo={handleAddToDo} />
      <TodoList todos={todos} />
    </div>
  );
}
