import { useState } from "react";
export const Settings = () => {
  const [modal, setModal] = useState(false);
  const showSettingsModal = () => {
    setModal(() => !modal);
  };
  const updateNameHandler = () => {
    localStorage.setItem("name", "");
    showSettingsModal();
    window.location.reload(false);
  };
  return (
    <div className="settings-section">
      {modal && (
        <div className="settings-modal fx-col fx-jc-center">
          <button className="change-name-btn" onClick={updateNameHandler}>
            ChangeName
          </button>
        </div>
      )}
      <button className="settings-btn" onClick={showSettingsModal}>
        <i className="fa-solid fa-gear"></i>
      </button>
    </div>
  );
};
