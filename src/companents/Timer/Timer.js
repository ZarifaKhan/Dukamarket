import { useState, useEffect } from "react";
import "../../style/timer.css";

const Timer = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("December 31, 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <div className="timer">
      <div className="timer__text">
        <h6>Hurry Up! Offer ends in:</h6>
      </div>

      <div className="clock">
        <p className="clock__item">{timerDays} DAYS</p>
        <p className="clock__item">{timerHours} Hours</p>
        <p className="clock__item">{timerMinutes} Min</p>
        <p className="clock__item">{timerSeconds} sec</p>
      </div>
    </div>
  );
};

export default Timer;
