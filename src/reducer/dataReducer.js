import { ACTION_TYPE } from "../utils/constants";

export const dataReducer = (dataState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_USER:
      localStorage.setItem("name", action.payload.userName);
      return { ...dataState, userName: action.payload.userName };

    case ACTION_TYPE.UPDATE_TIME:
      return { ...dataState, time: action.payload.date };

    default:
      return dataState;
  }
};
