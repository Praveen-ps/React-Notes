import { React, useEffect, useState } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log("executed");
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount((prevvCount) => prevvCount + 1);
        }}
      >
        You have clicked {count} time
      </button>
    </div>
  );
}

export default UseEffectCounter;
