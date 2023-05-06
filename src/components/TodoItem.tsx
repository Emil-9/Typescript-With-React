import React from "react";

const TodoItem: React.FC<{ text: string; onRemoveItem: () => void }> = (
  props
) => {
  return <li onClick={props.onRemoveItem}>{props.text}</li>;
};
export default TodoItem;
