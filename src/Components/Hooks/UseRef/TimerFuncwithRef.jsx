import React, { useState, useEffect, useRef } from "react";

function TimerFuncwithRef() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    /* const interval= setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval); */
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <p>{`Timer 2 => ${timer}`}</p>
      <button
        onClick={() => {
          //   clearInterval(interval); we cann't call it like this because of scope of the variable is not available outside the function
          clearInterval(intervalRef.current);
        }}
      >
        Clear Timer 2
      </button>
    </div>
  );
}

export default TimerFuncwithRef;
