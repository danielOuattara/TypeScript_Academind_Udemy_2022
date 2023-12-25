import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

export default function App() {
  const todos = [
    { id: "az123z", title: "feed the cat" },
    { id: "az123k", title: "sleep 1 hour" },
  ];

  const handleAddToDo = (title: string) => {
    console.log(title);
  };
  return (
    <div className="App">
      <NewTodo handleAddTodo={handleAddToDo} />
      <TodoList todos={todos} />
    </div>
  );
}
