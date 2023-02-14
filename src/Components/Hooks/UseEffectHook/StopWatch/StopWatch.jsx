import React, { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setisPaused] = useState(true);
  let interval = null;
  useEffect(() => {
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 0);
    } else {
      clearInterval(interval);
    }
    return () => {
      return clearInterval(interval);
    };
  }, [isActive, isPaused]);
  const handleReset = () => {
    setIsActive(false);
    setCount(0);
  };
  const handleStop = () => {
    setisPaused(true);
  };
  const handleStart = () => {
    setIsActive(true);
    setisPaused(false);
  };
  let totalSec = count;
  let milliSec = Math.floor((totalSec / 10) % 100);
  let seconds = Math.floor((totalSec / 1000) % 60);
  let minute = Math.floor((totalSec / 1000 / 60) % 60);

  return (
    <div>
      <div>
        {minute >= 10 ? minute : `0${minute}`}:
        {seconds >= 10 ? seconds : `0${seconds}`}:
        {milliSec >= 10 ? milliSec : `0${milliSec}`}
      </div>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleStart}>start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StopWatch;
