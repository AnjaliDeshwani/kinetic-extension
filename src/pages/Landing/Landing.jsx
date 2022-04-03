import { Link } from "react-router-dom";

import "./Landing.css";
import { Background } from "../../components";
export const Landing = () => {
  return (
    <>
      <Background />
      <div className="main-section p-abs top-btm-lft-rgt fx-col fx-ai-center fx-jc-center">
        <div className="prompt  fx-col fx-ai-center fx-jc-center">
          <p className="question-text">Hello, What's your name ?</p>
          <input type="text" className="input-text" />
        </div>
        <Link
          to="/home"
          className="m-3 start-btn px-1-5 py-1 fs-1-5 fx fx-ai-center fx-jc-center"
        >
          Lets Start
          <i className="bx bxs-chevrons-right bx-fade-right"></i>
        </Link>
      </div>
    </>
  );
};
