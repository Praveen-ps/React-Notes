import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function Parent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const increaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const IncreaseSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={increaseAge}>Increase Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={IncreaseSalary}>Increase Salary</Button>
    </div>
  );
}

export default Parent;
