import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  return <div>{props.render(count, increment)}</div>;
};

export default Counter;
