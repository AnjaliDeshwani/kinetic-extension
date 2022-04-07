import { useEffect } from "react";
import { ACTION_TYPE } from "../../utils/constants";
import { useTodo } from "../../context/todo-context";
import { InputTodo } from "./InputTodo";
import { TodoList } from "./TodoList";

export const TodoModal = ({ openTodoModal }) => {
  const { todoState, todoDispatch } = useTodo();
  const { todoList, createTodo } = todoState;
  const createTodoHandler = () => {
    todoDispatch({
      type: ACTION_TYPE.CREATE_TODO,
    });
  };
  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className="todo-modal">
      {createTodo || todoList.length !== 0 ? (
        <div>
          {" "}
          <div className="todo-list fx-col">
            <div className="todo-top fx fx-jc-sb">
              <p>TODAY</p>
              <span className="list-close-btn" onClick={openTodoModal}>
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>

            <div className="todo-middle fx fx-ai-center">
              {todoList.length !== 0 ? (
                <TodoList />
              ) : (
                <p className="fx fx-ai-center fx-jc-center">
                  No Todos till now
                </p>
              )}
            </div>
            <div className="todo-bottom">
              <InputTodo />
            </div>
          </div>
        </div>
      ) : (
        <div className="no-todo  fx-col fx-ai-center fx-jc-center">
          <p>Add a todo to get started</p>
          <button className="new-todo-btn" onClick={createTodoHandler}>
            New Todo
          </button>
        </div>
      )}
    </div>
  );
};
