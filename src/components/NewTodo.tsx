import React, { useContext, useRef } from "react";
import { TodoContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
  const inputTextRef = useRef<HTMLInputElement>(null); // null means we dont know the value of the input yet

  const todosCtx = useContext(TodoContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputValue = inputTextRef.current!.value; // the value cannot be undefined
    console.log(inputValue);
    if (inputValue.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(inputValue);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Todo Text</label>
      <input name="name" id="name" type="text" ref={inputTextRef} />
      <button>Add</button>
    </form>
  );
};
export default NewTodo;
