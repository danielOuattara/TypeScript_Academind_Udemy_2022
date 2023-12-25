import { useRef } from "react";

interface NewTodoInterface {
  handleAddTodo: (title: string) => void;
}

export default function NewTodo(props: NewTodoInterface) {
  const todoRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleAddTodo(todoRef.current!.value);
    todoRef.current!.value = "";
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div>
        <label htmlFor="todo">Title</label>
        <input type="text" id="todo" name="todo" ref={todoRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
