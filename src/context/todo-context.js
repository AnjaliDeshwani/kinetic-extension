import { createContext, useContext, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";

const TodoContext = createContext();

const initialState = {
  todoList: !localStorage.getItem("TodoList")
    ? []
    : JSON.parse(localStorage.getItem("TodoList")),
  createTodo: false,
  todaModal: false,
  currentTodo: "",
};

const TodoProvider = ({ children }) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todoState, todoDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);

export { TodoProvider, useTodo };
