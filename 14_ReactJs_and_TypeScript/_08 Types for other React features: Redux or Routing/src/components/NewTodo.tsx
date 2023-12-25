import { useRef } from "react";
import "./NewTodo.css";

export default function NewTodo(props: NewTodoInterface) {
  const todoRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleAddTodo(todoRef.current!.value);
    todoRef.current!.value = "";
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="form-control">
        <label htmlFor="todo">Title</label>
        <input type="text" id="todo" name="todo" ref={todoRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
