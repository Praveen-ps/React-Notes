import React, { useRef, useEffect } from "react";
//useRef is used to manulate the dom
function FocusDefaultInput() {
  const refElement = useRef(null); // intializing use ref
  useEffect(() => {
    console.log(refElement);
    refElement.current.focus();
  }, []); // we put empty array[] beacuse we have to load the component only once, if we missed to mention means it will render the component continuosly
  return (
    <div>
      <input type="text" ref={refElement} />
    </div>
  );
}

export default FocusDefaultInput;
