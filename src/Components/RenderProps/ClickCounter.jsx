import React from "react";

export default function ClickCounter({ increment, count }) {
  return <button onClick={increment}>ClickCounter {count}</button>;
}
