import { ACTION_TYPE } from "../../utils/constants";
import { useTodo } from "../../context/todo-context";
export const TodoList = () => {
  const { todoState, todoDispatch } = useTodo();
  const { todoList } = todoState;

  const completeTodoHandler = (todoItem) => {
    todoDispatch({
      type: ACTION_TYPE.COMPLETE_TODO,
      payload: { id: todoItem.id },
    });
  };

  const removeTodoHandler = (todoItem) => {
    todoDispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: { id: todoItem.id },
    });
  };
  return (
    <div className="todo-items">
      {todoList.map((todoItem) => {
        return (
          <div className="show-todo fx fx-jc-sb fx-ai-center">
            <label>
              <input
                type="checkbox"
                className="todo-checkbox"
                onClick={() => completeTodoHandler(todoItem)}
              />
            </label>
            <span className={todoItem.todoCompleted && "focus-strikethrough"}>
              {todoItem.todoTask}
            </span>
            <button
              className="todo-close-btn fx fx-ai-center fx-jc-sb"
              onClick={() => removeTodoHandler(todoItem)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};
