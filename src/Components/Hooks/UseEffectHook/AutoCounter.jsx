import React, { useState, useEffect } from "react";

function AutoCounter() {
  const [count, setCount] = useState(0);
  const updateTime = () => {
    setCount(count + 1);
  };
  /* const stopCount = () => {
    return clearInterval(interval);
  }; */
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => {
      return clearInterval(interval);
    };
  }, [count]);
  return <div>{count}</div>;
}

export default AutoCounter;
