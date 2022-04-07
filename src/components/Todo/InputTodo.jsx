import { ACTION_TYPE } from "../../utils/constants";
import { useTodo } from "../../context/todo-context";
export const InputTodo = () => {
  const { todoState, todoDispatch } = useTodo();
  const { currentTodo } = todoState;
  const addTodoHandler = (e) => {
    if (e.key === "Enter")
      todoDispatch({
        type: ACTION_TYPE.ADD_TODO,
        payload: { newTodo: currentTodo },
      });
    // todoDispatch({
    //   type: ACTION_TYPE.CURRENT_TODO,
    //   payload: { currentValue: "" },
    // });
  };

  const changeTodoHandler = (e) => {
    todoDispatch({
      type: ACTION_TYPE.CURRENT_TODO,
      payload: { currentValue: e.target.value },
    });
  };

  return (
    <input
      type="text"
      className="input-todo"
      placeholder="New Todo"
      onChange={changeTodoHandler}
      onKeyUp={addTodoHandler}
      value={currentTodo}
    />
  );
};
