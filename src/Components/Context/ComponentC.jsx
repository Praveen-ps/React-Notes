import React from "react";
import { UserConsumer } from "./ContextComp";

function ComponentC() {
  return (
    <UserConsumer>
      {(userName) => {
        // console.log(userName);
        return <div>Hello {userName}!</div>;
      }}
    </UserConsumer>
  );
}

export default ComponentC;
