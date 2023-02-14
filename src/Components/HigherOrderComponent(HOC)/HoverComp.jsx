import React, { useState } from "react";

function HoverComp() {
  const [Count, setCount] = useState(0);
  const handleHover = () => {
    setCount((prevState) => prevState + 1);
  };
  return <div onMouseOver={handleHover}>HoverComp{Count}</div>;
}
export default HoverComp;
