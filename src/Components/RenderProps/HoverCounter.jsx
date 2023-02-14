import React from "react";

export default function HoverCounter({ increment, count }) {
  return <div onMouseOver={increment}>HoverCounter{count}</div>;
}
