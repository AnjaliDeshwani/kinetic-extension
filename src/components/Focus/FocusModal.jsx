import "./Focus.css";
import { useData } from "../../context/data-context";
import { ACTION_TYPE } from "../../utils/constants";
export const FocusModal = ({ setCurrentFocus }) => {
  const { dataDispatch } = useData();
  const clearFocus = () => {
    setCurrentFocus("");
    dataDispatch({
      type: ACTION_TYPE.CLEAR_FOCUS,
    });
  };
  const editFocus = () => {
    dataDispatch({
      type: ACTION_TYPE.EDIT_FOCUS,
    });
  };
  return (
    <div className="modal">
      <ul className="list stacked-list">
        <li>
          <button
            className="modal-btn fx fx-ai-center fx-jc-sb"
            onClick={clearFocus}
          >
            <i className="fa-solid fa-xmark"></i>
            Clear
          </button>
        </li>
        <li>
          <button
            className="modal-btn fx fx-ai-center fx-jc-sb"
            onClick={editFocus}
          >
            <i className="fa-solid fa-pen"></i>
            Edit
          </button>
        </li>
      </ul>
    </div>
  );
};
