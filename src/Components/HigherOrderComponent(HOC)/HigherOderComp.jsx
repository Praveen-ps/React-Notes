import React, { useState } from "react";
// If any props is send through the orginal Component we can't able to use it directly to them because it is wrapped with the HOC Component, So we have to return the orginal Component with the remaining props
const HigherOderComp = (OrginalComponent, number) => {
  const NewComponent = (props) => {
    // to send the props that is passed to the orginalComponent we have to mention the "props" as the parameter for NewComponent and send the props with spread operater to the orginal component
    console.log(props);
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount((prevState) => prevState + number);
    };
    return <OrginalComponent count={count} increment={increment} {...props} />;
  };
  return NewComponent;
};

export default HigherOderComp;
