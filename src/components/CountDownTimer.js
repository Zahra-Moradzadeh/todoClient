import { useState, useEffect } from "react";
import "./Countdown.css";

export function CountDownTimer({deadline}) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [inputDate] = useState(deadline);
  const [currentDate] = useState(inputDate);
  useEffect(() => {
    const changingDate = new Date(inputDate);
    const currentDate = new Date();
    const totalSeconds = (changingDate - currentDate) / 1000;
    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
    setHours(formatTime(Math.floor((totalSeconds / 3600) % 24)));
    setMinutes(formatTime(Math.floor((totalSeconds / 60) % 60)));
    setSeconds(formatTime(Math.floor(totalSeconds % 60)));
  },[currentDate,inputDate]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div className="countdown-container">
      <div className="countdown-values">
        <div className="countdown-value">
          <p className="big-text">{days}</p>
          <span>days</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{hours}</p>
          <span>hou</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{minutes}</p>
          <span>min</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{seconds}</p>
          <span>sec</span>
        </div>

      </div>
    </div>
  );
}
