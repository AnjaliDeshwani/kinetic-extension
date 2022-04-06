import { useEffect, useState } from "react";
import { useData } from "../../context/data-context";
import { ACTION_TYPE } from "../../utils/constants";

export const Time = () => {
  const { dataState, dataDispatch } = useData();
  const { time } = dataState;
  const [is24Hrclock, set24Hrclock] = useState(true);

  const updateTimeFormat = () => {
    is24Hrclock ? set24Hrclock(false) : set24Hrclock(true);
  };

  let hours = is24Hrclock ? time.getHours() : time.getHours() % 12 || 12;
  hours = hours < 10 ? `0${hours}` : hours;
  let mins = time.getMinutes();
  mins = mins < 10 ? `0${mins}` : mins;

  useEffect(() => {
    setInterval(() => {
      dataDispatch({
        type: ACTION_TYPE.UPDATE_TIME,
        payload: { date: new Date() },
      });
    }, 1000);
  });

  return (
    <div className="time-section fx fx-ai-center fx-ji-center">
      <span className="time">
        {hours} : {mins}
      </span>
      <button className="change-btn" onClick={updateTimeFormat}>
        <i className="bx bx-dots-horizontal-rounded"></i>
        <span className="change-tooltip">
          {is24Hrclock ? "Change to 12hr clock" : "Change to 24hr clock"}
        </span>
      </button>
    </div>
  );
};
