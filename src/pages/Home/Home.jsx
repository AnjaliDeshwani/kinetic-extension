import "./Home.css";
import {
  Background,
  Time,
  Greet,
  Focus,
  Weather,
  Quote,
  Settings,
  GoogleSearch,
  Todo,
} from "../../components";
export const Home = () => {
  return (
    <>
      <Background />
      <div className="main-section p-abs top-btm-lft-rgt fx-col ">
        <div className="top-region fx fx-jc-sb fx-ai-center">
          <GoogleSearch />
          <Weather />
        </div>

        <div className="center-region fx-col fx-ai-center">
          <Time />
          <Greet />
          <Focus />
        </div>

        <div className="bottom-region fx fx-ai-fe fx-jc-sb">
          <Settings />
          <Quote />
          <Todo />
        </div>
      </div>
    </>
  );
};
