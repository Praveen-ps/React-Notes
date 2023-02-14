import React, { useReducer } from "react";

const intialState = 0;
/* 
    ***********Syntax*****************
const reducer = (state,action)=>{
    return newState;
} */

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};
function MultipleUseReducer() {
  const [count, dispatch] = useReducer(reducer, intialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, intialState);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>{countTwo}</div>
      <button onClick={() => dispatchTwo("increment")}>Increment</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
}

export default MultipleUseReducer;
