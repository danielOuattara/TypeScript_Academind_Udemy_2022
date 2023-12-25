type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

interface TodoListProps {
  todos: Todo[];
  handleDeleteTodo: (id: string) => void;
}

interface NewTodoInterface {
  handleAddTodo: (title: string) => void;
}
