interface TodoListProps {
  todos: {
    id: string;
    title: string;
  }[];
}

export default function TodoList(props: TodoListProps) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
