import React, { useReducer, useEffect } from "react";
import axios from "axios";
function ReducerWithFetch() {
  let intialState = { error: "", loading: true, post: {} };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          error: "",
          post: action.payload,
        };
      case "FETCH_ERROR":
        return {
          error: "something went Wrong",
          loading: false,
          post: {},
        };

      default:
        return state;
    }
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      {state.loading ? "Loading...." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default ReducerWithFetch;
