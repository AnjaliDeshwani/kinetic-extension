import { useEffect, useState } from "react";
import { useData } from "../../context/data-context";
export const Greet = () => {
  const { dataState } = useData();
  const { time } = dataState;
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName(localStorage.getItem("name"));
  }, []);

  const hour = time.getHours();

  const greet =
    (hour < 12 ? "Morning" : "") || (hour < 16 ? "Afternoon" : "") || "Evening";

  return (
    <div className="greet-section">
      <p className="greet-text">
        {" "}
        Good {greet}, {userName}!
      </p>
    </div>
  );
};
