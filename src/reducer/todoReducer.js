import { v4 as uuid } from "uuid";
import { ACTION_TYPE } from "../utils/constants";

export const todoReducer = (todoState, action) => {
  let newTodoList;
  const todoComplete = () => {
    newTodoList = todoState.todoList.reduce(
      (acc, todoItem) =>
        todoItem.id === action.payload.id
          ? [...acc, { ...todoItem, todoCompleted: !todoItem.todoCompleted }]
          : [...acc, todoItem],
      []
    );
    return { ...todoState, todoList: newTodoList };
  };

  switch (action.type) {
    case ACTION_TYPE.OPEN_TODO:
      return { ...todoState, todaModal: !todoState.todaModal };

    case ACTION_TYPE.CURRENT_TODO:
      return { ...todoState, currentTodo: action.payload.currentValue };

    case ACTION_TYPE.ADD_TODO:
      newTodoList = [
        ...todoState.todoList,
        { id: uuid(), todoTask: action.payload.newTodo, todoCompleted: false },
      ];
      return { ...todoState, currentTodo: "", todoList: newTodoList };

    case ACTION_TYPE.REMOVE_TODO:
      newTodoList = todoState.todoList.filter(
        (todoItem) => todoItem.id !== action.payload.id
      );
      return { ...todoState, todoList: newTodoList };

    case ACTION_TYPE.COMPLETE_TODO:
      return todoComplete();

    case ACTION_TYPE.CREATE_TODO:
      return { ...todoState, createTodo: !todoState.createTodo };

    default:
      return todoState;
  }
};
