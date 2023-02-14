import React, { useReducer } from "react";
const intialState = {
  firstCounter: 0,
  secoundCounter: 0,
};
//notes: where reducer(state,action)==>in state params initialState will come
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      console.log(state);
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "increment2":
      console.log(intialState);
      return { ...state, secoundCounter: state.secoundCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "decrement2":
      return { ...state, secoundCounter: state.secoundCounter - action.value };
    case "reset":
      return intialState;
  }
};
function ReducerCounter2() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>Counter 1 - {count.firstCounter}</h1>
      <h1>Counter 2 - {count.secoundCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment Counter 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement Counter 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment Counter 1 by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        decrement Counter 1 by 5
      </button>
      <br />
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        decrement Counter 2
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        Increment Counter 2 by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        decrement Counter 2 by 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset All</button>
      </div>
    </div>
  );
}

export default ReducerCounter2;
