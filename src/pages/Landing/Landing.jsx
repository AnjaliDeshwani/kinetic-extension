import "./Landing.css";
import { useState } from "react";
import { useData } from "../../context/data-context";
import { Background } from "../../components";
import { ACTION_TYPE } from "../../utils/constants";

export const Landing = () => {
  const { dataDispatch } = useData();
  const [name, setName] = useState("");
  const nameUpdateHandler = () => {
    dataDispatch({ type: ACTION_TYPE.ADD_USER, payload: { userName: name } });
  };
  return (
    <>
      <Background />
      <div className="main-section p-abs top-btm-lft-rgt fx-col fx-ai-center fx-jc-center">
        <form
          onSubmit={nameUpdateHandler}
          className="fx-col fx-ai-center fx-jc-center"
        >
          <p className="question-text">Hello, What's your name ?</p>
          <input
            type="text"
            className="input-text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="m-3 start-btn px-1-5 py-1 fs-1-5 fx fx-ai-center fx-jc-center">
            Lets Start
            <i className="bx bxs-chevrons-right bx-fade-right"></i>
          </button>
        </form>
      </div>
    </>
  );
};
