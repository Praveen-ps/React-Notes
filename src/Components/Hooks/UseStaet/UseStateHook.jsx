import { React, useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);
  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  /* 
    in Class Component 

    increment(){
        this.setState(prevState=>{return {count:prevState+1}})
    }
  */
  const increment = () => {
    setCount((prevCount) => prevCount + 1); // recommended
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div>Counter</div>
      {count}
      <div>
        <button onClick={increment} style={{ margin: "10px", color: "brown" }}>
          Increment
        </button>
        <button onClick={increment5} style={{ margin: "10px", color: "brown" }}>
          Increment 5
        </button>
        <button onClick={decrement} style={{ margin: "10px", color: "red" }}>
          Decrement 1
        </button>
        <button onClick={reset} style={{ margin: "10px", color: "blue" }}>
          Reset
        </button>
      </div>
    </>
  );
}

export default UseStateHook;
