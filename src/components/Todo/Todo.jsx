import "./Todo.css";
import { useEffect } from "react";
import { ACTION_TYPE } from "../../utils/constants";
import { useTodo } from "../../context/todo-context";
import { TodoModal } from "../Todo/TodoModal";

export const Todo = () => {
  const { todoState, todoDispatch } = useTodo();
  const { todaModal } = todoState;
  useEffect(() => {});
  const openTodoModal = () => {
    todoDispatch({
      type: ACTION_TYPE.OPEN_TODO,
    });
  };
  return (
    <div className="todo-section">
      <button className="todo-btn" onClick={openTodoModal}>
        Todo
      </button>
      {todaModal && <TodoModal openTodoModal={openTodoModal} />}
    </div>
  );
};
