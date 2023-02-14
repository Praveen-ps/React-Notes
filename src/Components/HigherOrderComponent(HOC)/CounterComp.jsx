import React, { useState } from "react";
import HigherOderComp from "./HigherOderComp";

/* function CounterComp() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  return <div onClick={handleClick}>CounterComp {count}</div>;
}

export default CounterComp; */

function CounterComp({ increment, count, ...props }) {
  //   console.log(increment, count);
  return (
    <div onClick={increment}>
      {props.name} CounterComp {count}
    </div>
  );
}
// if we have to custom the couter value with this HOC means we have to set the second parameter and use them inside the HOC Component
export default HigherOderComp(CounterComp, 5);
