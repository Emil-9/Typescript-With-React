import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todo-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodoContext);

  return (
    <ul>
      {todosCtx.items.map((elem) => (
        <TodoItem
          key={elem.id}
          text={elem.text}
          onRemoveItem={todosCtx.removeTodo.bind(null, elem.id)} //preconfigure a function for future execution
        />
      ))}
    </ul>
  );
};

export default Todos;
