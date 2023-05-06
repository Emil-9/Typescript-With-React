import Todo from "../model/todo";
import React, { useState } from "react";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{children: any}> = (props) => {

  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddToDoHandler = (addedItem: string) => {
    const newItem = new Todo(addedItem);
    setTodos((prev) => prev.concat(newItem));
  };

  const removeItemHandler = (toDoId: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== toDoId)); //
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: onAddToDoHandler,
    removeTodo: removeItemHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodosContextProvider;
