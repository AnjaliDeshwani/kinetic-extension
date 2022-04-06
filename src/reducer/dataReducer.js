import { ACTION_TYPE } from "../utils/constants";

export const dataReducer = (dataState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_USER:
      localStorage.setItem("name", action.payload.userName);
      return { ...dataState, userName: action.payload.userName };

    case ACTION_TYPE.UPDATE_TIME:
      return { ...dataState, time: action.payload.date };

    case ACTION_TYPE.ADD_FOCUS:
      localStorage.setItem("focus", action.payload.focus);
      return { ...dataState, focus: action.payload.focus, editFocus: false };

    case ACTION_TYPE.COMPLETE_FOCUS:
      localStorage.setItem("focusComplete", !dataState.focusCompleted);
      return { ...dataState, focusCompleted: !dataState.focusCompleted };

    case ACTION_TYPE.EDIT_FOCUS:
      return { ...dataState, editFocus: true };

    case ACTION_TYPE.CLEAR_FOCUS:
      localStorage.removeItem("focus");
      return {
        ...dataState,
        focus: "",
        editFocus: false,
        focusCompleted: false,
      };

    default:
      return dataState;
  }
};
