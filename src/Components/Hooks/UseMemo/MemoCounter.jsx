import React, { useState, useMemo } from "react";

function MemoCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const increaseOne = () => {
    setCounterOne(counterOne + 1);
  };
  const increaseTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  const isEven = useMemo(() => {
    //purposly slowing the process because everytime the component is rerendered because of the function you may consider this function as filtering a bunch of product which is fetched by some API that takes time to render, if we use this as a normal function means it will be rendered for any state change so it will affect the performance,thats why we have to use the useMemo hook which is similar to useCallback hook where we have to wrap the component with this hook and provide the callback function as an first argument and send the depended state which have to load this function
    let i = 0;
    while (i < 900000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <div>
        <button onClick={increaseOne}>Counter1-{counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <button onClick={increaseTwo}>Counter2-{counterTwo}</button>
    </div>
  );
}

export default MemoCounter;
