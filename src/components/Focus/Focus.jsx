import "./Focus.css";
import { useState } from "react";
import { useData } from "../../context/data-context";
import { ACTION_TYPE } from "../../utils/constants";
import { FocusModal } from "./FocusModal";

export const Focus = () => {
  const [currentFocus, setCurrentFocus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { dataState, dataDispatch } = useData();
  const { focus, editFocus, focusCompleted } = dataState;

  const onChangeFocusHandler = (e) => {
    setCurrentFocus(e.target.value);
  };

  const toggleFocusComplete = () => {
    dataDispatch({
      type: ACTION_TYPE.COMPLETE_FOCUS,
    });
  };

  const showOptionsModal = () => {
    setShowModal(() => !showModal);
  };

  return (
    <div className="focus-section">
      {focus && !editFocus ? (
        <div className="present-focus fx-col fx-ai-center fx-jc-center">
          <div className="focus-text">TODAY</div>
          <div className="focus-container fx fx-ai-center fx-jc-center">
            <label>
              <input
                type="checkbox"
                className="focus-checkbox"
                checked={focusCompleted}
                onChange={toggleFocusComplete}
              />
            </label>

            <span
              className={`focus-text ${
                focusCompleted && "focus-strikethrough"
              }`}
            >
              {focus}
            </span>
            <button className="change-btn" onClick={showOptionsModal}>
              <i className="bx bx-dots-horizontal-rounded"></i>
            </button>
          </div>

          {showModal ? <FocusModal setCurrentFocus={setCurrentFocus} /> : ""}
          <span
            className={`focus-incomplete ${focusCompleted && "focus-complete"}`}
          >
            Well done.
            <i class="fa-solid fa-stars"></i>
          </span>
        </div>
      ) : (
        <div>
          <p className="question-text">What's your main focus for today?</p>
          <input
            type="text"
            className="input-text"
            value={currentFocus}
            onKeyUp={(e) => {
              if (e.key === "Enter")
                dataDispatch({
                  type: ACTION_TYPE.ADD_FOCUS,
                  payload: { focus: currentFocus },
                });
            }}
            onChange={onChangeFocusHandler}
          />
        </div>
      )}
    </div>
  );
};
