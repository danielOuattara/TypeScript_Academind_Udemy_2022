import TodoList from "./components/TodoList";

export default function App() {
  const todos = [
    { id: "az123z", title: "feed the cat" },
    { id: "az123k", title: "sleep 1 hour" },
  ];
  return (
    <div className="App">
      {/* A component that add new todos */}
      <TodoList todos={todos} />
    </div>
  );
}
