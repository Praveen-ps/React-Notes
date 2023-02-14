import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const mousePosition = (e) => {
    console.log("mouse event called");
    setx(e.clientX);
    sety(e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", mousePosition);
    console.log("useEffect");
    return () => {
      console.log("unMounted");
      return window.removeEventListener("mousemove", mousePosition);
    };
  }, []);
  return (
    <div>
      HookMouse X-{x} Y={y}
    </div>
  );
}

export default HookMouse;
