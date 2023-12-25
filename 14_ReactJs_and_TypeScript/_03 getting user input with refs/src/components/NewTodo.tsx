import { useRef } from "react";

export default function NewTodo() {
  const todoRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const todoTitle = todoRef.current!.value;
    console.log(todoTitle);
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
